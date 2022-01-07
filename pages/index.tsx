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
            <SiteSection link="/sobre-mi" icon={profile} text="Sobre mí" width="45" height="45" />
            <SiteSection link="/tecnologias" icon={profile} text="Tecnologías" width="45" height="45" />
            <SiteSection link="/proyectos" icon={profile} text="Proyectos" width="45" height="45" />
            <SiteSection link="/public/images/css.png" tarjet="_blanck" icon={profile} text="CV" width="45" height="45" />
        </React.Fragment>
    )
}