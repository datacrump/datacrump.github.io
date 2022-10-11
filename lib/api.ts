import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { posts, categories, tags } from '../_posts/db'
import { Category, Post, Tag } from '../interfaces'


const postsDirectory = join(process.cwd(), '_posts')

export function getPosts(category: string) : Array<Post> {
  return JSON.parse(fs.readFileSync(join(postsDirectory, `${category}/data.json`), { encoding: 'utf8' }));
}

export function loadPostContent(post: Post) {
  const fullPath = join(postsDirectory, `${post.contentPath}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  post['content'] = content
  return post
}


export function getAllCategories(): Category[] {
  return categories
}

export function getAllTags(): Tag[] {
  return tags
}

export function getAllPosts(): Post[] {
  return posts.filter(post => post.visible == true || process.env.NODE_ENV != 'production').sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getCategory(slug: string): Category {
  return categories.find(category => category.slug == slug)
}

export function getTag(slug: string): Tag {
  return tags.find(tag => tag.slug == slug)
}

export function getCategoryPosts(category: Category) : Array<Post> {
  return posts.filter(post => post.category.slug == category.slug && post.visible == true).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getTagPosts(tag: Tag): Post[] {
  return posts.filter(post => post.visible == true && post.tags.includes(tag)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getTopCategories(cnt: number) : Category[] {
  return categories.filter(item => item.top == true).slice(0, cnt)
}

export function getTopPosts(cnt: number) : Post[] {
  return posts.filter(post => post.top == true && post.visible == true).sort((post1, post2) => (post1.date > post2.date ? -1 : 1)).slice(0, cnt)
}

export function getLatestPosts(cnt: number) : Post[] {
  return posts.filter(post =>  post.visible == true).sort((post1, post2) => (post1.date > post2.date ? -1 : 1)).slice(0, cnt)
}

export function getPostBySlug(categorySlug: string, slug: string) : Post {
  return posts.filter(post => post.category.slug == categorySlug && post.visible == true).map((post) => loadPostContent(post)).find(post => post.slug == slug)
}
