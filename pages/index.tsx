import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import HeroHome from '@components/HeroHome'
import SiteSection from '@components/SiteSection' 
import styles from '@styles/home.module.scss'

const welcome = '/images/welcome.png'
const github = '/icons/github.png'
const linkedin = '/icons/linkedin.png'

export default function Home(){
    return(
        <>
        <Head>
            <title>Portafolio</title>
            <meta name='description' content='Portafolio de Camilo Gonzalez como frontend developer. Incluye información, tecnologías, proyectos y un CV descargable.'/> 

            <meta property="og:title" content="Inicio" key="ogtitle"/>
            <meta property="og:site_name" content='Portafolio' key="ogsitename" />
            <meta property="og:type" content="homepage" key="ogtype"/>
            <meta property="og:url" content="/" key="ogurl"/>
            <meta property="og:description" content='Portafolio de Camilo Gonzalez como frontend developer. Incluye información, tecnologías, proyectos y un CV descargable.' key="ogdescription"/>
        </Head>
        <article className={styles.home}>
            <div className={styles.hero}>
                <HeroHome 
                    src1={linkedin} 
                    src2={github}
                    social1={'https://www.linkedin.com/in/jmilo-dev/'}
                    social2={'https://github.com/jmilo13'}
                    text='Saludo' 
                    width={30} 
                    height={30} 
                    title='Camilo Gonzalez'
                    subtitle='Frontend Developer'
                />
            </div>
            <div className={styles.image}>
                <Image src={welcome} layout='fill' />   
            </div>
            <section className={styles.description}>
                <p>
                    ¡Hola! 
                    Te doy la bienvenida a mi web, la mejor forma de mostrarte mis habilidades y contarte un poco sobre mi.
                </p>
            </section>
            <section className={styles.sectionButtons}>
                <SiteSection link="/sobre-mi" text="Sobre mí"/>
                <SiteSection link="/tecnologias" text="Tecnologías"/>
                <SiteSection link="/proyectos" text="Proyectos"/>
                <SiteSection link="/documents/CV_Desarrollador_web.pdf" target="_blanck" text="CV"/>
            </section>
        </article>
        </>
    )
}