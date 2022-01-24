import React from 'react'
import Head from 'next/head'
import SectionTitle from '@components/SectionTitle'
import styles from "@styles/about.module.scss" 

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
          Me llamo Camilo Gonzalez, tengo 28 años, soy colombiano y actualmente vivo en la Ciudad Autónoma de Buenos Aires, Argentina, desde hace algunos años. Me gusta explorar nuevos horizontes y por ello empecé a estudiar programación. Además de desarrollador web soy psicólogo y a veces escribo, puedes leerme en <a href='https://www.murocincelado.com/' target='_blank'>Muro Cincelado</a>.
        </p>
        <p>
          La mejor forma de saber lo que puedo hacer es ver mis <a href='/proyectos' target='_blank'>proyectos</a>, este sitio por ejemplo esta construido con tecnologías como Raect, NextJs, TypeScript y Sass. Puedes ver el codigo <a href='https://github.com/jmilo13/jmilo.dev'>aquí</a>. 
        </p>
        <p>
          Si te gusta lo que hago y quieres contratarme puedes escribirme a través de mis redes sociales como <a href='https://www.linkedin.com/in/jmilo-dev/' target='_blank'>LinkedIn</a> o a mi correo electrónico <a href="mailto:jmilo.dev@gmail.com">jmilo.dev@gmail.com</a>. Si te gusta  mi trabajo tambien me puedes invitar un cafecito 😉
        </p>
        <a href='https://cafecito.app/jmilo-dev' rel='noopener' target='_blank'><img srcSet='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' /></a>
      </section>
    </>
  )
}