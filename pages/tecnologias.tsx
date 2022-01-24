import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import {tecnologies} from '@utils/lists'
import SectionTitle from '@components/SectionTitle'
import styles from '@styles/tecnologies.module.scss'

export default function Tecnologies(){
    return(
      <>
      <Head>
          <title>Portafolio - Tecnologías</title>
          <meta name='description' content='Stack tecnológico actual, usado en los diferentes proyectos implementados'/> 

          <meta property="og:title" content="Portafolio - Tecnologías" key="ogtitle"/>
          <meta property="og:site_name" content='Portafolio' key="ogsitename" />
          <meta property="og:type" content="article" key="ogtype"/>
          <meta property="og:url" content="/tecnologias" key="ogurl"/>
          <meta property="og:description" content='Stack tecnológico actual, usado en los diferentes proyectos implementados' key="ogdescription"/>
        </Head>
        <SectionTitle title='Tecnologías'/>
        <article className={styles.list}>
          {tecnologies.map(tecnology => (
            <section key={tecnology.id} className={styles.card}>
              <div className={styles.image}>
                <Image src={tecnology.url} alt={tecnology.name} width="90" height="90"/>
              </div>
              <p className={styles.name}>{tecnology.name}</p>
            </section>
          ))}
        </article>
        
      </>
    )
}