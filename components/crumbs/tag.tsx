import { Card, CardMedia, CardContent, Typography, CardActions, Button, Breadcrumbs, Link } from "@mui/material"
import { Category, Post, Tag } from "../../interfaces"
import { getCategoryLink } from "../utils"


type Props = {
  tag: Tag
}

export default function TagCrumbs({ tag }: Props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Data Crump
  </Link>
  <Link underline="hover" color="inherit" href="/tags">
    Tags
  </Link>
  <Typography color="text.primary">{tag.title}</Typography>
</Breadcrumbs>
  )
}

