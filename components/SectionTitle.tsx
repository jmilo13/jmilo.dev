import React from 'react'
import styles from "@styles/sectionTitle.module.scss" 

interface Data{
  title: string
}

export default function SectionHeader(data: Data){
  return(
    <section className={styles.section}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{data.title}</h1>       
      </div>    
    </section>
    )
}