import React from 'react'
import Image from 'next/image'
import HeroHome from '@components/HeroHome'
import SiteSection from '@components/SiteSection' 
import styles from '@styles/home.module.scss'

const welcome = '/images/welcome.png'

export default function Home(){
    return(
        <article className={styles.home}>
            <HeroHome 
                src={welcome} 
                text='Saludo' 
                width={142} 
                height={142} 
                title='Camilo Gonzalez'
                subtitle='Frontend Developer'
            />
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
    )
}