import React, {useState} from 'react'
import Head from 'next/head'
import SectionTitle from '@components/SectionTitle'
import { projects } from '@utils/lists'
import styles from '@styles/projects.module.scss'


export default function Projects(){
  const[distance, setDistance] = useState(0)
    return(
      <>
        <Head>
            <title>Proyectos</title>
            <meta name='description' content='Conjunto de proyectos realizados con diferentes tecnologias. Incluye deploy y repositorio en GitHub de cada uno'/> 

            <meta property="og:image" content='/images/profile.png' key='ogimage'/>
            <meta property="og:title" content="Proyectos" key="ogtitle"/>
            <meta property="og:site_name" content='Portafolio' key="ogsitename" />
            <meta property="og:type" content="article" key="ogtype"/>
            <meta property="og:url" content="/proyectos" key="ogurl"/>
            <meta property="og:description" content='Conjunto de proyectos realizados con diferentes tecnologias. Incluye deploy y repositorio en GitHub de cada uno' key="ogdescription"/>
        </Head>
        <SectionTitle title='Proyectos'/>
        <article className={styles.list}>
          {projects.map(project => {
            const changeVisibility = (e:any) => {
              const element = document.querySelector(`#${project.id}`)
              setDistance(window.scrollY)
              if(e.target.id === 'open'){
                element?.classList.add(styles.show)
              }else{
                element?.classList.remove(styles.show)
              }
            }
            
          return (
          <section key={project.id} className={styles.card}>
            <a className={styles.imageLink} href={project.deployUrl} target='_blank'>
              <img src={project.imageSrc} alt={project.title} width="340" height="230"/>
            </a>
            <div className={styles.containerRepo}>
              <div></div> 
              <a href={project.repoUrl} target='_blank'>Ver repositorio</a>
              <div>
                <span id='open' onClick={changeVisibility}>+ Información</span>
                <div id={`${project.id}`} className={styles.tooltip} style={{top: `${distance}px`}}>
                  <div className={styles.content}>
                    <button id='close' className={styles.close} onClick={changeVisibility}></button>
                    <h1>{project.title}</h1>
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