import React from 'react'
import Head from 'next/head'
import SectionTitle from '@components/SectionTitle'
import styles from "@styles/about.module.scss" 
import Link from 'next/dist/client/link'

export default function About(){
  return(
    <>
      <Head>
        <title>Portafolio - Sobre mí</title>
        <meta name='description' content='Información sobre Camilo Gonzalez como frontend depeloper y algunos aspectos personales'/> 

        <meta property="og:title" content="Portafolio - Sobre mí" key="ogtitle"/>
        <meta property="og:site_name" content='Portafolio' key="ogsitename" />
        <meta property="og:type" content="about" key="ogtype"/>
        <meta property="og:url" content="/sobre-mi" key="ogurl"/>
        <meta property="og:description" content='Información sobre Camilo Gonzalez como frontend depeloper y algunos aspectos personales' key="ogdescription"/>
      </Head>
      <SectionTitle title='Sobre mí'/>
      <section className={styles.information}>
        <p>
          Me llamo Camilo Gonzalez, soy colombiano y desde hace algunos años vivo en la Ciudad Autónoma de Buenos Aires, Argentina. Me gradue de psicología en 2016. Motivado por la pandemia en 2020, quise explorar otros horizontes, lo que me llevó a estudiar programación. 
        </p>
        <p>
          Uno de mis primeros proyectos web fue <a href='https://murocincelado.vercel.app/' rel='noreferrer noopener' target='_blank'>Muro Cincelado</a> un blog personal en el que también promocionaba mis servicios como psicologo. Inicialmente hecho en wordpress lo rediseñe en react y recientemente implemente Notion como CMS para las entradas de blog.
        </p>
        <p>
          Si te interesa ver más de mi trabajo puedes revisar mis <a href='/proyectos' target='_blank' rel='noreferrer noopener'>proyectos</a>. Este sitio, por ejemplo, esta construido con tecnologías como Raect, NextJs, TypeScript y Sass. Puedes ver el codigo <a href='https://github.com/jmilo13/jmilo.dev' target='_blank' rel='noreferrer noopener'>aquí</a>. 
        </p>
        <p>
          Si te gusta lo que hago y quieres crear tu propio sitio web, puedes revisar en <a href='/crea-tu-web' target='_blank'>crea tu web</a> para obtener más información y contactarme a través de <a href='https://www.linkedin.com/in/jmilo-dev/' target='_blank' rel='noreferrer noopener'>LinkedIn</a>, <a href="mailto:jmilo.dev@gmail.com" rel='noreferrer noopener'>mail</a> o <a href='https://wa.me/message/V7KKKDIRGD62K1' target='_blank' rel='noreferrer noopener'>Whatsapp</a>
        </p>
      </section>
    </>
  )
}