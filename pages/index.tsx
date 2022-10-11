import { getAllTags, getCategoryPosts, getLatestPosts, getTopCategories, getTopPosts } from '../lib/api'
import Head from 'next/head'
import { Post, Category, Tag } from '../interfaces'
import Layout from '../components/layout'
import { Box, Button, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import PostCard from '../components/post/card'
import CategoryCard from '../components/category/card'
import TagCard from '../components/tags/card'


type Props = {
  latest: Post[]
  top: Post[]
  categories: Category[]
  tags: Tag[]
}

export default function Index({ latest, top, categories, tags }: Props) {

  let latest_posts = [];
  let top_posts = [];
  let top_categories = []

  categories.forEach(item => {
    top_categories.push(
      <Grid item key={item.slug}>
        <CategoryCard category={item} />
      </Grid>
    )
  })

  let top_tags = []

  tags.forEach(item => {
    top_tags.push(
      <Grid item key={item.slug}>
        <TagCard tag={item} />
      </Grid>
    )
  })

  top.forEach(post => {
    top_posts.push(
      <Grid item key={post.slug}>
        <PostCard post={post} />
      </Grid>
    )
  })

  latest.forEach(post => {
    latest_posts.push(
      <Grid item key={post.slug}>
        <PostCard post={post}  />
      </Grid>
    )
  })


  return (
    <>
      <Layout>
        <Head>
          <title>Data Crump</title>
        </Head>
        <Container>
          <Paper elevation={3}>
            <Container>
              <h2>Top categories</h2>
            </Container>
            <Divider variant="middle" />
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
              {top_categories}
            </Grid>

          </Paper>
        </Container>

        <Container>
          <h2>Top crumps</h2>
          <Divider variant="middle" />
        </Container>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
          {top_posts}
        </Grid>
        <Container>
          <h2>Latest crumps</h2>
          <Divider variant="middle" />
        </Container>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
          {latest_posts}
        </Grid>
        <Container>
          <Paper elevation={3}>
            <Container>
              <h2>Tags</h2>
            </Container>
            <Divider variant="middle" />
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
              {top_tags}
            </Grid>

          </Paper>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const latest = getLatestPosts(3);
  const top = getTopPosts(3);
  const categories = getTopCategories(6)
  const tags = getAllTags()


  return {
    props: {
      latest: latest,
      top: top,
      categories: categories,
      tags: tags
    },
  }
}
