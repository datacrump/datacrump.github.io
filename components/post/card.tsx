import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { Post } from "../../interfaces/post"
import ShareMenu from "../share"
import Image from 'next/image'
// import profilePic from '../public/me.png'

type Props = {
  post: Post
  prev_post: Post
}

export default function PostCard({ post, prev_post }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="181"
        image={post.cardImage}
        alt={post.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <ShareMenu title={post.title} description={post.excerpt} image={post.coverImage} uri={post.fullPath}></ShareMenu>
        <Button size="small" href={post.fullPath}>Read More</Button>
      </CardActions>
    </Card>
  )
}

