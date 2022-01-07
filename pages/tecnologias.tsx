import React from 'react'
import Image from 'next/image'

const html = '/images/html5.png'
const css = '/images/css.png'
const javaScript = '/images/javascript-logo.png'
const git = '/images/git.png'
const sass = '/images/SASS.png'

export default function Tecnologies(){
    return(
        <React.Fragment>
            <header>
              <h1>Tecnologías</h1>
              <p>Menú</p>
            </header>
            <section>
              <Image src={html} alt="html" width="90" height="90"/>
              <Image src={css} alt="css" width="90" height="90"/>
              <Image src={javaScript} alt="javaScript" width="90" height="90"/>
              <Image src={sass} alt="sass" width="90" height="90"/>
              <Image src={git} alt="git" width="90" height="90"/>
            </section>
        </React.Fragment>
    )
}