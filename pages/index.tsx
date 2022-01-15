import React from 'react'
import Image from 'next/image'

import SiteSection from '@components/SiteSection' 

const welcome = '/images/welcome.png'
const profile = '/images/profile.png'

export default function Home(){
    return(
        <React.Fragment>
            <section>
                <h1>Camilo Gonzalez</h1>
                <h2>Frontend Developer</h2>
            </section>
            <section>
                <Image src={welcome} alt="Saludo" width="142" height="142"></Image>
                <p>
                    ¡Hola! 
                    Te doy la bienvenida a mi web, la mejor forma de mostrarte mis habilidades y contarte un poco sobre mi.
                </p>
            </section>
            <SiteSection link="/sobre-mi" text="Sobre mí"/>
            <SiteSection link="/tecnologias" text="Tecnologías"/>
            <SiteSection link="/proyectos" text="Proyectos"/>
            <SiteSection link="/documents/CV_Desarrollador_web.pdf" target="_blanck" text="CV"/>
        </React.Fragment>
    )
}