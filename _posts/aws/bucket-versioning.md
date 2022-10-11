## S3 bucket versioning - budget burner

This is how AWS presents bucket versioning.

> Versioning in Amazon S3 is a means of keeping multiple variants of an object in the same bucket. You can use the S3 Versioning feature to preserve, retrieve, and restore every version of every object stored in your buckets.

A key point here **is a means of keeping multiple variants of an object**  as you know for each object stored in S3 you need to pay $0.023 GB / month.

> It might look like a small price, however, if you are using S3 as data lake storage - you not talking gigabytes anymore. Right! 

Let me run an experiment so you would not have to!

## enable bucketing

Bucket versioning is enabled when you are creating a bucket. You can also enable versioning under the properties of a created bucket.

![creat bucket](/assets/s3/bucket-versioning/versioning.png)

## working with versioning

A bucket with versioning enabled is not anyhow different from a bucket without it. So you might not even know if the bucket has versioning enabled or not at first glance.

### object upload 

Let's say we have the following object

![my gang](/assets/s3/bucket-versioning/gang.png)

Let's upload this object to the object store multiple times and see how it works.

![my gang](/assets/s3/bucket-versioning/copy_objects.png)

As you see I have uploaded this object twice however I only see single object in S3. Great!

### deleteing objects

Let's say we decided to delete our object because we do not need it anymore:

![s3 console](/assets/s3/bucket-versioning/delete.png)

Let's check the S3 console
![s3 console](/assets/s3/bucket-versioning/delete_console_3.png)

If you stop here you might think this is great! Don't forget amazon promised to keep all the versions... so if you toggle **Show versions** you will see all your objects are still in the bucket event the one you have deleted.

![s3 console](/assets/s3/bucket-versioning/delete_console_2.png)

> This is expected behavior it's definitely not an issue. 

In my opinion, it is very easy to miss deleted objects which could lead to an increase in your storage and eventually cost. We pay for all the storage we used in S3.

## how to check if you have this issue

In the real world, it might be tricky to see all the object versions inside a bucket. So how would one find these hidden objects?

### storage Lens

Storage Lens - is a service from AWS which collects statistical information about your bucket, and in my experience, this is one of the best ways to identify problematic buckets.

Go to your buckets and you will see **Account Snapshot** on the right side there will be a button **View Storage Lens dashboard**
![storage lens](/assets/s3/bucket-versioning/account_snapshot.png)

In the dashboard select **Bucket**
![my gang](/assets/s3/bucket-versioning/dashboard_1.png)

Scroll down to bucket list and instead os summary select **Cost efficiency**

![my gang](/assets/s3/bucket-versioning/cost_efficiency.png)

Here you will see all your buckets, metric you are looking for is: **Noncurrent version bytes** if this metric is more than zero you might be having some old data hiding around.

As you can see in my case my bucket is using 6MB of current and 6 times more (36MB) noncurrent objects. I would be paying for a total of 42MB of storage. 

## cleaning data, handling your budget

Once again AWS is doing what it promised to do by saving all the versions of your data in a bucket.

I think you will agree with me very often we do not need to keep all the versions of an object, I do see some use cases then we must keep all the versions however my "gang" isn't one of these things :)


### lifecycle policy

Let's update the lifecycle policy to remove all the object which was deleted and only keep a single version (in case we would need to restore)

So to delete noncurrent version objects you need to select an option: **Permanently delete noncurrent versions of objects** and specify the number of days after how much you would like to delete noncurrent objects also you can optionally specify the number of versions you would like to keep. 

My setup: delete all noncurrent version objects after 1 day (minimum) and keep a single object.

![my gang](/assets/s3/bucket-versioning/lifecycle_1.png)
![my gang](/assets/s3/bucket-versioning/lifecycle_2.png)

It takes time (up to 24h) for the lifecycle policy to trigger, however after some time final result is. 

I still have deleted objects (because I asked for 1 version to be kept) this way my storage cost for S3 will not grow unexpectedly.

![my gang](/assets/s3/bucket-versioning/whats_left.png)


## summary

Bucket versioning is a powerful feature. If you need to keep all versions of the data this feature will save hours of development work.

If you need to use this feature gor for it, however as always think what should be your data retention policies.

Rule of thumb: 
Create a lifecycle policy the moment you are creating bucket - this way you will not need to worry about unexpected costs.
