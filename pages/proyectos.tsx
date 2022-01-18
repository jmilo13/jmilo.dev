import React from 'react'
import Image from 'next/image'
import SectionTitle from '@components/SectionTitle'
import { projects } from '@utils/lists'
import styles from '@styles/projects.module.scss'


export default function Projects(){
    return(
      <>
        <SectionTitle title='Proyectos'/>
        <article className={styles.list}>
          {projects.map(project => (
          <section key={project.id} className={styles.card}>
            <div className={styles.containerImage}>
              
            </div>
            <a className={styles.imageLink} href={project.deployUrl} target='_blank'>
              <Image src={project.imageSrc} alt={project.title} width="320" height="220"/>
            </a>
            <div className={styles.containerRepo}>
              <div></div> 
              <a href={project.repoUrl} target='_blank'>Ver repositorio</a>
              {project.aditionalData !== undefined && <div>
                <span onClick={() => {
                  const element = document.querySelector(`#${project.id}`)
                  element?.classList.toggle(styles.show)
                }}>Credenciales</span>
                <div id={`${project.id}`} className={styles.tooltip}>
                  <p>{project.aditionalData}</p>
                </div>
              </div>
              }
            </div>
          </section>
          ))}
        </article>
        
      </>
    )
}