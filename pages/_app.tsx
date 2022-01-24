import type { AppProps } from 'next/app'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import '@styles/global-styles/global.scss'
import { sections } from '@utils/lists'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar 
        sections={sections}
        social1={'https://www.linkedin.com/in/jmilo-dev/'}
        social2={'https://github.com/jmilo13'}
      />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp