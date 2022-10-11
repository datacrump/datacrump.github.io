import { Card, CardMedia, CardContent, Typography, CardActions, Button, Breadcrumbs, Link } from "@mui/material"
import { Category, Post } from "../../interfaces"
import { getCategoryLink } from "../utils"


type Props = {
  post: Post
  category: Category
}

export default function PostCrumbs({ post, category }: Props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Data Crump
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href={getCategoryLink(category)}
  >
    {category.title}
  </Link>
  <Typography color="text.primary">{post.title}</Typography>
</Breadcrumbs>
  )
}

