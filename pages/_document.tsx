import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta property="og:image" itemProp='image' content='https://jmilo-dev.vercel.app/images/profile.jpeg' key='ogimage'/>
          <meta property="og:image:secure_url" itemProp='image' content='https://jmilo-dev.vercel.app/images/profile.jpeg' key='ogimage:secure_url'/>
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument