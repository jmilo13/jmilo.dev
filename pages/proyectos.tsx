import React from 'react'
import SectionTitle from '@components/SectionTitle'
import { projects } from '@utils/lists'
import styles from '@styles/projects.module.scss'


export default function Projects(){
    return(
      <>
        <SectionTitle title='Proyectos'/>
        <article className={styles.list}>
          {projects.map(project => {
            const changeVisibility = (e:any) => {
              const element = document.querySelector(`#${project.id}`)
              if(e.target.id === 'open'){
                element?.classList.add(styles.show)
                window.scrollTo(0,0)
              }else{
                element?.classList.remove(styles.show)
              }
            }
            
          return (
          <section key={project.id} className={styles.card}>
            <div className={styles.containerImage}>
            </div>
            <a className={styles.imageLink} href={project.deployUrl} target='_blank'>
              <img src={project.imageSrc} alt={project.title} width="320" height="220"/>
            </a>
            <div className={styles.containerRepo}>
              <div></div> 
              <a href={project.repoUrl} target='_blank'>Ver repositorio</a>
              <div>
                <span id='open' onClick={changeVisibility}>+ Información</span>
                <div id={`${project.id}`} className={styles.tooltip}>
                  <div className={styles.content}>
                    <button id='close' className={styles.close} onClick={changeVisibility}></button>
                    {project.aditionalData.map(data => <p key={`data${project.aditionalData.indexOf(data)}`}>{data}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </section>
          )})}
        </article>
        
      </>
    )
}