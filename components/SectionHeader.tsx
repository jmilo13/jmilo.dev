import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "@styles/sectionHeader.module.scss" 

interface Data{
  sections: Sections[]
  title: string
  social1: string
  social2: string
}
interface Sections{
  text: string
  url: string
  openOther?: boolean
}

const profile = '/images/profile.png'
const github = '/icons/github.png'
const linkedin = '/icons/linkedin.png'

export default function SectionHeader(data: Data){
  const [hide, setHide] = useState(true)
  return(
    <>
      <header className={styles.header}>
        <section className={styles.titleContainer}>
          <h1 className={styles.title}>{data.title}</h1>       
        </section>
        <button className={styles.buttonMenu} onClick={() => setHide(!hide)}></button>
        <nav className={hide ? styles.hide : styles.navbar}>
          <section className={styles.titleContainerMenu}>
            <h1 className={styles.title}>Camilo Gonzalez</h1>       
          </section>
          <section className={styles.list}>
            <div className={styles.imageContainer}>
              <Link href='/'><Image src={profile} width={80} height={80}/></Link>
            </div>
            <ul>
              {data.sections.map(section => 
                <li>
                  {section.openOther ? <a href={section.url} target='_blank'>Fuera{section.text}</a> 
                  : <Link href={section.url}>{section.text}</Link>}
                </li>)
              }   
            </ul>
            <div className={styles.social}>
              <a href={data.social1} target='_blank'><Image src={linkedin} width={45} height={45}/></a>
              <a href={data.social2} target='_blank'><Image src={github} width={45} height={45}/></a>
            </div>
          </section>
        </nav>
      </header>
    </>
    )
}