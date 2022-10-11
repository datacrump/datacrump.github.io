import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Header from '../../../components/header'
import Layout from '../../../components/layout'
import { getAllCategories, getCategory, getCategoryPosts, getPostBySlug } from '../../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdownToHtml'
import { Post, Category } from '../../../interfaces'
import { Container, Divider, Grid} from '@mui/material'
import PostCard from '../../../components/post/card'
import CategoryCrumbs from '../../../components/crumbs/category'

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
          <title>{`${category.title} | Data Crump`}</title>
          <meta name="description" content={category.excerpt} />
          {(category.coverImage)?<meta name="og:Image" content={category.coverImage} />: <></>}
        </Head>
        <Container>
        <CategoryCrumbs category={category} />
      </Container>
        <Container>
          <h2>{category.title}</h2>
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
    category: string;
  }
}

export async function getStaticProps({ params }: Params) {
  const item = getCategory(params.category)
  const posts = getCategoryPosts(item)
  return {
    props: {
      posts: posts,
      category: item
    },
  }
}

export async function getStaticPaths() {
  const categories = getAllCategories()

  return {
    paths: categories.map((category) => {
      return {
        params: {
          category: category.slug
        },
      }
    }),
    fallback: false,
  }
}