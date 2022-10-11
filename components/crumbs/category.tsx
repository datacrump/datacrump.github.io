import { Card, CardMedia, CardContent, Typography, CardActions, Button, Breadcrumbs, Link } from "@mui/material"
import { Category, Post } from "../../interfaces"
import { getCategoryLink } from "../utils"


type Props = {
  category: Category
}

export default function CategoryCrumbs({ category }: Props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Data Crump
  </Link>
  <Link underline="hover" color="inherit" href="/categories">
    Categories
  </Link>
  <Typography color="text.primary">{category.title}</Typography>
</Breadcrumbs>
  )
}

