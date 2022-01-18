import React from 'react'
import Image from 'next/image'
import {tecnologies} from '@utils/lists'
import SectionTitle from '@components/SectionTitle'
import styles from '@styles/tecnologies.module.scss'

export default function Tecnologies(){
    return(
      <>
        <SectionTitle title='Tecnologías'/>
        <article className={styles.list}>
          {tecnologies.map(tecnology => (
            <section key={tecnology.id} className={styles.card}>
              <div className={styles.image}>
                <Image src={tecnology.url} alt={tecnology.name} width="90" height="90"/>
              </div>
              <p className={styles.name}>{tecnology.name}</p>
            </section>
          ))}
        </article>
        
      </>
    )
}