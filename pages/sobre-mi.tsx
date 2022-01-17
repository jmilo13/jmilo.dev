import React from 'react'
import SectionHeader from '@components/SectionHeader'
import styles from "@styles/about.module.scss" 

const sections = [
  {
    text: 'Sobre mí',
    url: '/sobre-mi',
  },
  {
    text: 'Tecnologías',
    url: '/tecnologias',
  },
  {
    text: 'Proyectos',
    url: '/proyectos',
  },
  {
    text: 'CV',
    url: '/documents/CV_Desarrollador_web.pdf',
    openOther: true,
  },
  ]

export default function About(){
  return(
    <>
      <SectionHeader 
        sections={sections} 
        title='Sobre mí' 
        social1={'https://www.linkedin.com/in/jmilo-dev/'}
        social2={'https://github.com/jmilo13'}
      />
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