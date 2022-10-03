import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getCategory, getCategoryPosts, getPostBySlug} from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { Post, Category } from '../../interfaces/post'
import { Box, Breadcrumbs, Button, Container, Divider, Grid, Link, Paper, Typography } from '@mui/material'
import markdownStyles from './markdown-styles.module.css'
import PostPage from '../../components/post/page'
import Crumbs from '../../components/crumbs'
import PostCard from '../../components/post/card'

type Props = {
  posts: Post[]
  category: Category
}

export default function RandomPost({ posts, category }: Props) {
  const router = useRouter()
  if (!router.isFallback && !category?.slug) {
    return <ErrorPage statusCode={404} />
  }

  let random_posts = [];
  const post = posts[0]
  for (let i=0; i<4; i++) {
    random_posts.push(
      <Grid item>
      <PostCard post={post} prev_post={post} />
        </Grid>
    )
  }
  
  

  return (
    <>
      <Layout>
        <Header/>
        <Head>
          <title>Data Crump</title>
        </Head>

    {/* <Box sx={{ flexGrow: 1 }}> */}
    <Container>
      <h2>Random crump</h2>
      <Divider variant="middle" />
    </Container>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
        { random_posts }
      </Grid>
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
  <Grid item>
  <Button size="small" href="/random">More random</Button>
  </Grid>
</Grid>
    
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {
  const posts = getCategoryPosts('random')
  const category = getCategory('random')
  return {
    props: { 
      posts: posts,
      category: category
    },
  }
}

