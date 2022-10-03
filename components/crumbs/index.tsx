import { Card, CardMedia, CardContent, Typography, CardActions, Button, Breadcrumbs, Link } from "@mui/material"
import { Category, Post } from "../../interfaces/post"


type Props = {
  post: Post
  category: Category
}

export default function Crumbs({ post, category }: Props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Data Crump
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href={"/" + category.slug }
  >
    {category.title}
  </Link>
  <Typography color="text.primary">{post.title}</Typography>
</Breadcrumbs>
  )
}

