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


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export default function MyApp(props: MyAppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // mode: prefersDarkMode ? 'light' : 'light',
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: blue[900],
          },
          secondary: {
             main: green[900],
          },
          error: {
          main: red.A400,
         },
        },
      }),
    [prefersDarkMode],
  );


  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
