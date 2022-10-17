import { AppProps } from 'next/app'
import '../styles/index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
// import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { red, blue, green } from '@mui/material/colors';
import Script from 'next/script';
import CookieConsent, {getCookieConsentValue} from 'react-cookie-consent';
import Link from 'next/link';
import next from 'next';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export default function MyApp(props: MyAppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // #28FE13
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? 'light' : 'light',
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: green[800], //#2e7d32
            // main: "#28FE13",
          },
          secondary: {
             main: blue[900],
          },
          // background: {
          //   default: prefersDarkMode ? '#fff' : '#121212',
          // },
          error: {
          main: red.A400,
         },
        },
      }),
    [prefersDarkMode],
  );

  // const isConsentIn = getCookieConsentValue('datacrump_policy');
  const isConsentIn = true;
  const isProduction = (process.env.NODE_ENV == 'production')


  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {isConsentIn && isProduction ? (
         <Script id="google-tag-manager" strategy="afterInteractive">
         {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-PHSCKJB');
         `}
       </Script>
      ) : (
        <Script></Script>
      )}
        <Component {...pageProps} />
        <CookieConsent
        location="bottom"
        // enableDeclineButton={true}
        // buttonText="Sure man!!"
        cookieName="datacrump_policy"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling == false) {
            window.location.reload();
          }
        }}
      >
        This website uses cookies to enhance the user experience. {" "}
        <Link href="/privacy-policy">Privacy policy</Link>
      </CookieConsent>
      </ThemeProvider>
    </CacheProvider>
  );
}

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
