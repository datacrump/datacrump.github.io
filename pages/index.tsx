import { getCategoryPosts, getTopPosts } from '../lib/api'
import Head from 'next/head'
import { Post, Category } from '../interfaces/post'
import Header from '../components/header'
import Layout from '../components/layout'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import PostCard from '../components/post/card'


type Props = {
  random: Post[]
  top: Post[]
}

export default function Index({ random, top }: Props) {

  let random_posts = [];

  random.forEach(post => {
    random_posts.push(
      <Grid item key={post.slug}>
        <PostCard post={post} prev_post={post} />
      </Grid>
    )
  })


  return (
    <>
      <Layout>
        <Head>
          <title>Data Crump</title>
        </Head>

        {/* <Box sx={{ flexGrow: 1 }}> */}
        <Container>
          <h2>Random crump</h2>
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
          <Grid item>
            <Button size="small" href="/random">More random</Button>
          </Grid>
        </Grid>

      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const random = getCategoryPosts('random');
  random.slice(0, 3)
  const top = getTopPosts();

  return {
    props: {
      random: random,
      top: top
    },
  }
}
