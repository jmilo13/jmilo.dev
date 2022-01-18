import React from 'react'
import SectionTitle from '@components/SectionTitle'
import styles from "@styles/about.module.scss" 

export default function About(){
  return(
    <>
      <SectionTitle title='Sobre mí'/>
      <section className={styles.information}>
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
    </>
  )
}