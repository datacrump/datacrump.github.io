import Head from 'next/head'
// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Data Crump</title>
        <meta name="description" content="Perosanl blog about data engineering and computer science" />
    </Head>
  )
}

export default Meta
