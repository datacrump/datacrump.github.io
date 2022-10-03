// import Alert from './alert'
// import Footer from './footer'
// import Meta from './meta'

import Footer from "./footer"
import Meta from "./meta"
import CookieConsent from "react-cookie-consent";
import { Link } from "@mui/material";


type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
      <CookieConsent
        location="bottom"
        // enableDeclineButton={true}
        // buttonText="Sure man!!"
        cookieName="datacrump_policy"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience. {" "}
        <Link href="/privacy-policy">Privacy policy</Link>
      </CookieConsent>
    </>
  )
}

export default Layout
