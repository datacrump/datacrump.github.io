import { Card, CardMedia, CardContent, Typography, CardActions, Button, Paper, Container } from "@mui/material"
import { Category, Post, Tag } from "../../interfaces"
import ShareMenu from "../share"
import Image from 'next/image'
import { getCategoryLink, getPostLink, getTagLink } from "../utils"
import { width } from "@mui/system"
import Link from "next/link"
// import profilePic from '../public/me.png'


type Props = {
  tag: Tag
}

export default function TagCard({ tag }: Props) {
  
  return (
    <Link href={getTagLink(tag)}>
        <Button variant="outlined" href={getTagLink(tag)}>{tag.title}</Button>
    </Link>
  )
}

