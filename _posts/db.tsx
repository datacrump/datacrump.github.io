export const categories = [
    {
        "slug": 'random',
        "title": "Random crump",
        "excerpt": "Place for random topics",
        "coverImage": "/assets/logo.png",
        "content": "",
        "top": true
    },
    {
        "slug": 'aws',
        "title": "AWS crump",
        "excerpt": "Place for topics related to AWS",
        "coverImage": "/assets/logo.png",
        "content": "",
        "top": true
    }
]

export const tags = [
    {
        "slug": 's3',
        "title": "AWS S3",
        "excerpt": "",
        "coverImage": "/assets/logo.png",
        "content": ""
    },
    {
        "slug": 'aws',
        "title": "AWS",
        "excerpt": "",
        "coverImage": "/assets/logo.png",
        "content": ""
    },
    {
        "slug": 'budget',
        "title": "Budget",
        "excerpt": "",
        "coverImage": "/assets/logo.png",
        "content": ""
    }
]

// Content design is the practice of creating content experiences that meet a user’s intent, contextual expectations, and usability needs.
export const posts = [
    {
        "slug": "hellow-world",
        "category": categories.find(category => category.slug == "random"),
        "title": "Hello world",
        "excerpt": "Hello world - let me introduce you to Data Crump. Data Crump - is a personal project about my passion for data engineering",
        "coverImage": "/assets/random/hello-world/hello-world_cover.png",
        "cardImage": "/assets/random/hello-world/hello-world_card.png",
        "date": "2022-10-02T23:36:35.000Z",
        "contentPath": "/random/hello-world.md",
        "content": "",
        "top": false,
        "visible": true,
        "tags": tags.filter(tag => [].includes(tag.slug))
    },
    {
        "slug": "whoami",
        "category": categories.find(category => category.slug == "random"),
        "title": "whoami",
        "excerpt": "Hi I'm a data engineer and I genuinely believe that anyone who starts sharing his opinion, must first present one's credibility",
        "coverImage": "/assets/random/whoami/whoami_cover.png",
        "cardImage": "/assets/random/whoami/whoami_card.png",
        "date": "2022-10-06T23:36:35.000Z",
        "contentPath": "/random/whoami.md",
        "content": "",
        "top": true,
        "visible": true,
        "tags": tags.filter(tag => [].includes(tag.slug))
    },
    {
        "slug": "bucket-versioning",
        "category": categories.find(category => category.slug == "aws"),
        "title": "How to burn money with S3",
        "excerpt": "S3 Bucket versioning is one of the best features provided by AWS it's also one of the best ways to burn your budget",
        "coverImage": "/assets/s3/bucket-versioning/title_cover.png",
        "cardImage": "/assets/s3/bucket-versioning/title_card.png",
        "date": "2022-10-10T12:36:35.000Z",
        "contentPath": "/aws/bucket-versioning.md",
        "content": "",
        "top": true,
        "visible": true,
        "tags": tags.filter(tag => ['s3', 'aws', 'budget'].includes(tag.slug))
    }
]