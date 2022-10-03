import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Container, Divider, Paper } from "@mui/material"
import { Post } from "../../interfaces/post"


type Props = {
  post: Post
  prev_post: Post
  next_post: Post
}

export default function PostPage({ post, prev_post, next_post }: Props) {
  return (
    <>
    <Grid container padding={3}>
      <Container>
        <h1>{post.title}</h1>
        <Divider />
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} lg={8}>
          <Paper elevation={3}>
          <Container>
            <img src={post.coverImage} />
            <div>{post.excerpt}</div>
            <div dangerouslySetInnerHTML={{ __html: post.content }}/>
          </Container>
          </Paper>  
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper elevation={3}>
            <Container>
              <div>xs=4</div>
              
            </Container>
            </Paper>
          </Grid>
        </Grid>
        </Container>
        </Grid>
        </>
  )
}





