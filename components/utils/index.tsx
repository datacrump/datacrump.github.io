import { Post, Category, Tag } from "../../interfaces"


export function getPostLink(post: Post) {
    return `/posts/${post.category.slug}/${post.slug}`
  }

  export function getPostUrl(post: Post) {
    return `https://www.datacrump.com/posts/${post.category.slug}/${post.slug}`
  }
  

  export function getCategoryLink(category: Category) {
    return `/posts/${category.slug}`
  }
  
  export function getTagLink(tag: Tag) {
    return `/tags/${tag.slug}`
  }
  