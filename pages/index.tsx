import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import HeroHome from '@components/HeroHome'
import SiteSection from '@components/SiteSection' 
import styles from '@styles/home.module.scss'

const welcome = '/images/welcome.png'
const github = '/icons/github.png'
const linkedin = '/icons/linkedin.png'
const whatsapp = '/icons/whatsapp.png'

export default function Home(){
    return(
        <>
        <Head>
            <title>Portafolio - Inicio</title>
            <meta name='description' content='Portafolio de Camilo Gonzalez como frontend developer. Incluye información, tecnologías, proyectos y un CV descargable.'/> 
            
            <meta property="og:title" content="Portafolio - Inicio" key="ogtitle"/>
            <meta property="og:site_name" content='Portafolio' key="ogsitename" />
            <meta property="og:type" content="homepage" key="ogtype"/>
            <meta property="og:url" content="/" key="ogurl"/>
            <meta property="og:description" content='Portafolio de Camilo Gonzalez como frontend developer. Incluye información, tecnologías, proyectos y un CV descargable.' key="ogdescription"/>
        </Head>
        <article className={styles.home}>
            <HeroHome 
                src1={linkedin} 
                src2={github}
                src3={whatsapp}
                social1={'https://www.linkedin.com/in/jmilo-dev/'}
                social2={'https://github.com/jmilo13'}
                social3={'https://wa.me/message/V7KKKDIRGD62K1'}
                text='Saludo' 
                width={30} 
                height={30} 
                title='Camilo Gonzalez'
                subtitle='Frontend Developer'
            />
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
                <SiteSection link="/crea-tu-web" text="Crea tu web"/>
                <SiteSection link="/tecnologias" text="Tecnologías"/>
                <SiteSection link="/proyectos" text="Proyectos"/>
                <SiteSection link="/documents/CV_Desarrollador_Frontend.pdf" target="_blanck" text="CV"/>
            </section>
        </article>
        </>
    )
}