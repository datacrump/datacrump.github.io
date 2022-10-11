import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getAllPosts, getAllTags, getCategory, getCategoryPosts, getPostBySlug, getTag, getTagPosts } from '../../lib/api'
// import PostTitle from '../../components/post-title'
import Head from 'next/head'
// import { CMS_NAME } from '../../lib/constants'
import { Post, Category, Tag } from '../../interfaces'
import { Box, Breadcrumbs, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material'
import markdownStyles from './markdown-styles.module.css'
import PostPage from '../../components/post/page'
import PostCrumbs from '../../components/crumbs/post'
import PostCard from '../../components/post/card'
import TagCrumbs from '../../components/crumbs/tag'
import { getFullUrl } from '../../components/utils'

type Props = {
  tag: Tag
  posts: Post[]
}

export default function RandomPost({ tag, posts }: Props) {
  const router = useRouter()
  if (!router.isFallback && !tag?.slug) {
    return <ErrorPage statusCode={404} />
  }

  let random_posts = [];
  posts.forEach(post => {
    random_posts.push(
      <Grid item key={post.slug}>
        <PostCard post={post} />
      </Grid>
    )
  })

  return (
    <>
      <Layout>
        <Head>
          <title>{`${tag.title} | Data Crump`}</title>
          <meta name="description" content={tag.excerpt} />
          {(tag.coverImage)?<meta property="og:image" content={getFullUrl(tag.coverImage)}  key="og:image"/>: <></>}
        </Head>
        <Container>
        <TagCrumbs tag={tag} />
      </Container>
        <Container>
          <h2>{tag.title}</h2>
          <Divider variant="middle" />
        </Container>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
          {random_posts}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
        </Grid>

      </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string;
  }
}

export async function getStaticProps({ params }: Params) {
  const tag = getTag(params.slug)
  const posts = getTagPosts(tag)
  // const content = await markdownToHtml(post.content || '')

  return {
    props: {
      tag: tag,
      posts: posts
    },
  }
}

export async function getStaticPaths() {
  const tags = getAllTags()

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: tag.slug
        },
      }
    }),
    fallback: false,
  }
}
