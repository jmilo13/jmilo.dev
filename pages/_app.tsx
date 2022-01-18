import type { AppProps } from 'next/app'
import Navbar from '@components/Navbar'
import '@styles/global-styles/global.scss'

const sections = [
  {
    text: 'Sobre mí',
    url: '/sobre-mi',
  },
  {
    text: 'Tecnologías',
    url: '/tecnologias',
  },
  {
    text: 'Proyectos',
    url: '/proyectos',
  },
  {
    text: 'CV',
    url: '/documents/CV_Desarrollador_web.pdf',
    openOther: true,
  },
  ]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar 
        sections={sections}
        social1={'https://www.linkedin.com/in/jmilo-dev/'}
        social2={'https://github.com/jmilo13'}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp