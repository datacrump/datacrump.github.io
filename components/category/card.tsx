import { Card, CardMedia, CardContent, Typography, CardActions, Button, Paper, Container } from "@mui/material"
import { Category, Post } from "../../interfaces"
import ShareMenu from "../share"
import Image from 'next/image'
import { getCategoryLink, getPostLink } from "../utils"
import { width } from "@mui/system"
import Link from "next/link"
// import profilePic from '../public/me.png'


type Props = {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  
  return (
    <Link href={getCategoryLink(category)}>
        <Button variant="outlined" href={getCategoryLink(category)}>{category.title}</Button>
    </Link>
  )
}

