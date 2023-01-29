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
            <title>Portafolio - Proyectos</title>
            <meta name='description' content='Conjunto de proyectos realizados con diferentes tecnologias. Incluye deploy y repositorio en GitHub de cada uno'/> 
            <meta property="og:title" content="Portafolio - Proyectos" key="ogtitle"/>
            <meta property="og:site_name" content='Portafolio' key="ogsitename" />
            <meta property="og:type" content="article" key="ogtype"/>
            <meta property="og:url" content="/proyectos" key="ogurl"/>
            <meta property="og:description" content='Conjunto de proyectos realizados con diferentes tecnologias. Incluye deploy y repositorio en GitHub de cada uno' key="ogdescription"/>
        </Head>
        <SectionTitle title='Proyectos'/>
        <section className={styles.container}>
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
            <section key={project.id} className={styles.project}>
              <div className={styles.box} id={`box${project.id}`}>
                <div className={styles.card}>    
                  <div className={styles.front}>
                  <img src={project.imageSrc} alt={project.title} width="340" height="230" onClick={() => {
                      const element = document.querySelector(`#box${project.id}`)
                      element?.classList.remove(styles.rotate) 
                  }}/>
                  </div>
                  <div className={`${styles.back} ${styles.front}`}>
                    <div className={styles.information} onClick={() => {
                          const element = document.querySelector(`#box${project.id}`)
                          element?.classList.add(styles.rotate)
                    }}>
                        <h1>{project.title}</h1>
                        {project.aditionalData.map(data => <p key={`data${project.aditionalData.indexOf(data)}`}>{data}</p>)}
                        {project.references?.map(reference => <p key={`data${project.references.indexOf(reference)}`}>{reference.texto}<a href={reference.url} target="_blank">{reference.textoUrl}</a></p>)}
                    </div>
                  </div>    
                </div>
              </div>
              <div className={styles.containerRepo}>
                {project.repoUrl !== ""
                  ? <a href={project.repoUrl} target='_blank'>Ver repositorio</a>
                  : <p>Sin acceso a repositorio</p> 
                }
                <a href={project.deployUrl} target='_blank'>Visitar sitio</a>
              </div>
            </section>
            )})}
          </article>
        </section>
        
        
      </>
    )
}