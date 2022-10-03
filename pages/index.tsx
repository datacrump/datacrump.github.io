// import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
// import Layout from '../components/layout'
import { getTopPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { Post, Category} from '../interfaces/post'
import Header from '../components/header'
import Layout from '../components/layout'
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import PostCard from '../components/post/card'


type Props = {
  topPosts: Post[]
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


export default function Index({ topPosts }: Props) {
  const heroPost = topPosts[0]
  const morePosts = topPosts.slice(1)

  let random_posts = [];

  for (let i=0; i<4; i++) {
    random_posts.push(
      <Grid item>
      <PostCard post={heroPost} prev_post={heroPost} />
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
  const topPosts = getTopPosts();
  return {
    props: { topPosts },
  }
}
