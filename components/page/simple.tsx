import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Container, Divider, Paper } from "@mui/material"
import { Post } from "../../interfaces/post"


type Props = {
  children: React.ReactNode
}

export default function SimplePage({ children }: Props) {
  return (
    <>
      <Grid container paddingBottom={5}>
        <Container>

          <Paper elevation={3}>
            <Container>
              {children}
            </Container>
          </Paper>
        </Container>
      </Grid>
    </>
  )
}





