// import Alert from './alert'
// import Footer from './footer'
// import Meta from './meta'

import Footer from "./footer"
import Meta from "./meta"
import CookieConsent from "react-cookie-consent";
import { Box, Link } from "@mui/material";
import Header from "../header";


type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      {/* <Meta /> */}
      {/* <div className="min-h-screen"> */}
        {/* <Alert preview={preview} /> */}
      <Header />
        <Box sx={{ pb: 7 }}>{children}</Box>
      {/* </div> */}
      <Footer/>
    </>
  )
}

export default Layout
