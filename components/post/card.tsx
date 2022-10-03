import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { Post } from "../../interfaces/post"


type Props = {
  post: Post
  prev_post: Post
}

export default function PostCard({ post, prev_post }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={post.coverImage}
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
        <Button size="small">Share</Button>
        <Button size="small" href={post.fullPath}>Read More</Button>
      </CardActions>
    </Card>
  )
}

