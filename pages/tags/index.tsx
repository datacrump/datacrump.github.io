import Layout from '../../components/layout'
import { getAllTags } from '../../lib/api'
import Head from 'next/head'
import { Tag } from '../../interfaces'
import { Container, Divider, Grid, Paper } from '@mui/material'
import TagCard from '../../components/tags/card'


type Props = {
  tags: Tag[]
}

export default function RandomPost({ tags }: Props) {

  let top_tags = []

  tags.forEach(item => {
    top_tags.push(
      <Grid item key={item.slug}>
        <TagCard tag={item} />
      </Grid>
    )
  })


  return (
    <>
      <Layout>
        <Head>
          <title>Tags | Data Crump</title>
          <meta name="description" content="Different tags" />
        </Head>
        <Container>

        </Container>
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


export async function getStaticProps() {
  const tags = getAllTags()
  return {
    props: {
      tags: tags
    },
  }
}
