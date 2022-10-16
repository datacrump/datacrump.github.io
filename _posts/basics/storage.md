## what is

### object storage

AWS simple storage service (S3) - is the best know object-store. However, it’s not the only provider of object storage, other choices:
- Azure Blob storage
- Google cloud storage (GCS)
- DigitalOcean spaces

> search for object store providers you might have found one in your home town :) 

### block storage

I think the easiest way to think about block storage - it's an HDD or SSD or NVRAM which you can attach to your running instance in the cloud. Each cloud provider does have a version of it.

## usage

If your project is Netflix, Spotify, or a book library - in which your objects need to be returned to the user full - object store might be a perfect solution.

### object store for database

> amount of data you need to read is directly responsible for your database performance

The parquet file is split into row groups which contain columns and meta information about it. Readers are expected to first read the file metadata to find all the column chunks they are interested in. The column chunks should then be read sequentially. The format is explicitly designed to separate the metadata from the data.

However to achieve this storage needs to support the ability to read chunks of files, this is easily achievable in block storage because the operating system supports this. 

Object storage on the other hand returns all or nothing for a given key. In S3 there is a way to seek, however HTTP protocol is not as fast as direct access storage provided by the operating system.

At least right now many databases which are based on object storage - first need to download a file to local storage (block storage) and then process it the same way.

Of course, this is not the case if your files are JSON or CSV. The computation engine needs to read a full file to be able to parse information from it. If you need to read the full file object store is a very good solution.

## which one to chooce

for near realtime data retrieval - block storage

for data lake or unstructured data - object store

## additional info

### pricing 

Block storage at a minimum twice expensive compared to object-store.

| Type | Product | Price per TB / month |
| -----| ------------ | -------------------- |
| Object | AWS S3   | around $23   |
| Object | GCS     | around $23    |
| Block | EBS     | starts at $80    |
| Block | Google Disk     | starts at $44    |

### access layer

Object sore - HTTP protocol

Block storage - operating system

## summary

Both object and block storage has it's use cases and very often you will need to go with a mixture of both

> what fits everything very often doesn't fit anything
