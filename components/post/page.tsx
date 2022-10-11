import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Container, Divider, Paper, MenuItem } from "@mui/material"
import { Box } from "@mui/system"
import { Post } from "../../interfaces"
import PostCard from "./card"
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import { Facebook, Twitter } from "@mui/icons-material";
import { getPostLink, getPostUrl } from "../utils";

type Props = {
  post: Post
  posts: Post[]
}

export default function PostPage({ post, posts }: Props) {
  let latest_posts = [];
  if (posts.length > 0) {
    latest_posts.push(
      <>
      <Divider />
      <div>Similar posts</div>
      </>
    )
  }

  posts.forEach(post => {
    latest_posts.push(
      <Grid item key={post.slug}>
        <PostCard post={post} />
      </Grid>
    )
  })
  const url = getPostUrl(post)
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
                  <div className="postContent" dangerouslySetInnerHTML={{ __html: post.content }} />
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper elevation={3}>
                <Container>
                  Share on social media:<br/>
                  <FacebookShareButton url={url}>
                    <Facebook fontSize="large" />
                  </FacebookShareButton>
                  <TwitterShareButton url={url}>
                    <Twitter fontSize="large"/>
                  </TwitterShareButton>
                  <Box>
                    {latest_posts? latest_posts: <></>}
                  </Box>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}





