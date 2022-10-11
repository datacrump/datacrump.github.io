import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { Post } from "../../interfaces"
import ShareMenu from "../share"
import { getPostLink } from "../utils"

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  
  return (
    <Card sx={{ maxWidth: 345, height: 366 }}>
      <CardMedia
        component="img"
        height="181"
        image={post.cardImage}
        alt={post.title}
      />
      <CardContent sx={{ height: 132 }}>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <ShareMenu title={post.title} description={post.excerpt} image={post.coverImage} uri={getPostLink(post)}></ShareMenu>
        <Button size="small" href={getPostLink(post)}>Read More</Button>
      </CardActions>
    </Card>
  )
}

