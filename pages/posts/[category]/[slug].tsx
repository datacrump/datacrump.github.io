import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
import Header from '../../../components/header'
// import PostHeader from '../../components/post-header'
import Layout from '../../../components/layout'
import { getAllPosts, getCategory, getCategoryPosts, getPostBySlug } from '../../../lib/api'
// import PostTitle from '../../components/post-title'
import Head from 'next/head'
// import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../../lib/markdownToHtml'
import { Post, Category } from '../../../interfaces'
import { Box, Breadcrumbs, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material'
import markdownStyles from './markdown-styles.module.css'
import PostPage from '../../../components/post/page'
import PostCrumbs from '../../../components/crumbs/post'
import { getFullUrl } from '../../../components/utils'

type Props = {
  post: Post
  category: Category
  posts: Post[]
}

export default function RandomPost({ post, category, posts }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Head>
          <title>{`${post.title} | Data Crump`}</title>
          <meta name="description" content={post.excerpt} />
          {(category.coverImage)?<meta property="og:Image" content={getFullUrl(post.coverImage)}  key="og:image" />: <></>}
        </Head>
      <Container>
        <PostCrumbs post={post} category={category} />
      </Container>
      <PostPage post={post} posts={posts} />
    </Layout>
  )
}

type Params = {
  params: {
    category: string;
    slug: string;
  }
}

export async function getStaticProps({ params }: Params) {

  const post = getPostBySlug(params.category, params.slug)
  const content = await markdownToHtml(post.content || '')
  const category = getCategory(params.category)
  const posts = getCategoryPosts(category).filter(item => item.slug != post.slug).slice(0, 3)
  

  return {
    props: {
      post: {
        ...post,
        content,
      },
      category: category,
      posts: posts
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          category: post.category.slug,
          slug: post.slug
        },
      }
    }),
    fallback: false,
  }
}
