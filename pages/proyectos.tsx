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
              <h1>Proyectos</h1>
              <p>Menú</p>
            </header>
            <section>
              <Image src={html} alt="html" width="300" height="300"/>
              <div>
                <Image src={css} alt="css" width="30" height="30"/> 
                <span>Repositorio</span>
              </div>
            </section>
            <section>
              <Image src={html} alt="html" width="300" height="300"/>
              <div>
                <Image src={css} alt="css" width="30" height="30"/> 
                <span>Repositorio</span>
              </div>
            </section>
            <section>
              <Image src={html} alt="html" width="300" height="300"/>
              <div>
                <Image src={css} alt="css" width="30" height="30"/> 
                <span>Repositorio</span>
              </div>
            </section>
        </React.Fragment>
    )
}