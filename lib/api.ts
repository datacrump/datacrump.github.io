import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { posts, categories } from '../_posts/posts'
import { Category, Post } from '../interfaces/post'


const postsDirectory = join(process.cwd(), '_posts')

export function getPosts(category: string) : Array<Post> {
  return JSON.parse(fs.readFileSync(join(postsDirectory, `${category}/data.json`), { encoding: 'utf8' }));
}

export function loadPostContent(post: Post) {
  const realSlug = post.path
  const fullPath = join(postsDirectory, `${post.path}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  post['content'] = content
  return post
}


export function getAllCategories(): Array<Category> {
  return categories
}

export function getCategory(slug: string): Category {
  return categories.find(category => category.slug == slug)
}

export function getAllPosts(): Array<Category> {
  return posts
}

export function getCategoryPosts(categorySlug: string) : Array<Post> {
  return posts.filter(post => post.categorySlug == categorySlug).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getTopPosts() : Array<Post> {
  return posts.filter(post => post.top == true).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getPostBySlug(categorySlug: string, slug: string) : Post {
  return posts.filter(post => post.categorySlug == categorySlug).map((post) => loadPostContent(post)).find(post => post.slug == slug)
}
