import React from 'react'
import Image from 'next/image'

const muroCincelado = '/images/murocincelado.png'

export default function About(){
    return(
        <React.Fragment>
            <header>
              <p>Menú</p>
            </header>
            <section>
                <h1>Sobre mí</h1>
            </section>
            <section>
                <p>
                  Soy colombiano viviendo hace unos años en la Ciudad Autónoma de Buenos Aires, Argentina. Soy psicólogo y el desarollo web es algo que recientemente empecé explorar y me ha encantado.
                </p>
                <p>
                  El último año fue de cambios globales y mi vida no fue la exepción. Decidí abrir mi página web, para explorar diferentes cosas: escribir, hacer consulta clínica y sin darme cuenta despertó una nueva pasión.
                </p>
                <p>
                  Puedes visitarla, en principio la hice con wordpres a punta de tutoriales, hoy la relance construida con React y Next.
                </p>
            </section>
            <section>
              <Image src={muroCincelado} alt="Saludo" width="307" height="175"></Image>
            </section>
        </React.Fragment>
    )
}