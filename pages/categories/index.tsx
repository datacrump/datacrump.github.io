import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { getAllCategories, getCategory, getCategoryPosts, getPostBySlug } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { Post, Category } from '../../interfaces'
import { Container, Divider, Grid, Paper } from '@mui/material'
import CategoryCard from '../../components/category/card'

type Props = {
  categories: Category[]
}

export default function RandomPost({ categories }: Props) {

  let top_categories = []

  categories.forEach(item => {
    top_categories.push(
      <Grid item key={item.slug}>
        <CategoryCard category={item} />
      </Grid>
    )
  })

  return (
    <>
      <Layout>
        <Head>
          <title>Categories | Data Crump</title>
          <meta name="description" content="Different categories" />
          <meta property="og:image" content="/assets/logo.png" key="og:image"/>
        </Head>
        <Container>
          
          </Container>
          <Container>
          
            <Paper elevation={3}>
            <Container>
            <h2>Categories</h2>
            </Container>
            <Divider variant="middle" />
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} padding={3}>
              {top_categories}
            </Grid>
            
            </Paper>
          </Container>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const categories = getAllCategories()
  return {
    props: {
      categories: categories
    },
  }
}
