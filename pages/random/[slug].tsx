import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getCategory, getCategoryPosts, getPostBySlug} from '../../lib/api'
// import PostTitle from '../../components/post-title'
import Head from 'next/head'
// import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { Post, Category } from '../../interfaces/post'
import { Box, Breadcrumbs, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material'
import markdownStyles from './markdown-styles.module.css'
import PostPage from '../../components/post/page'
import Crumbs from '../../components/crumbs'

type Props = {
  post: Post
  category: Category
  morePosts: Post[]
  preview?: boolean
}

export default function RandomPost({ post, category, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
    <Header/>
    <Head>
        <title>
          {post.title} | DataCrump
        </title>
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <Container>
      <Crumbs post={post} category={category}/>
      </Container>
      
      <PostPage post={post} prev_post={post} next_post={post} />
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
  const post = getPostBySlug('random', params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      category: getCategory('random'),
      morePosts: getCategoryPosts('random')
    },
  }
}

export async function getStaticPaths() {
  const posts = getCategoryPosts('random')
  
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        },
      }
    }),
    fallback: false,
  }
}
