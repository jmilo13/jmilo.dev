import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from "@styles/navbar.module.scss" 

interface Data{
  sections: Sections[]
  social1: string
  social2: string
  social3: string
}
interface Sections{
  text: string
  url: string
  openOther?: boolean
}

const profile = '/images/profile.jpeg'
const github = '/icons/github.png'
const linkedin = '/icons/linkedin.png'
const whatsapp = '/icons/whatsapp.png'

export default function SectionHeader(data: Data){
  const [hide, setHide] = useState(true)
  const router = useRouter()
  const click = () => setHide(!hide)
  return(
    <>
      <section className={router.pathname === '/' ? styles.none : styles.container}>
        <button className={styles.buttonMenu} onClick={click}></button>
        <nav className={hide ? styles.hide : styles.navbar}>
          <div className={styles.titleContainerMenu}>
            <h1 className={styles.title}>Camilo Gonzalez</h1>       
          </div>
          <div className={styles.list}>
            <div className={styles.imageContainer} onClick={click}>
              <Link href='/'><img src={profile} width={100} height={100}/></Link>
            </div>
            <ul>
              {data.sections.map(section => 
                <li key={section.text} onClick={click}>
                  {section.openOther ? <a href={section.url} target='_blank' rel='noreferrer noopener'>{section.text}</a> 
                  : <Link href={section.url}>{section.text}</Link>}
                </li>)
              }   
            </ul>
            <div className={styles.social}>
              <a onClick={click} href={data.social1} target='_blank' rel='noreferrer noopener'><Image src={linkedin} width={45} height={45}/></a>
              <a onClick={click} href={data.social2} target='_blank' rel='noreferrer noopener'><Image src={github} width={45} height={45}/></a>
              <a onClick={click} href={data.social3} target='_blank' rel='noreferrer noopener'><Image src={whatsapp} width={45} height={45}/></a>
            </div>
          </div>
        </nav>
      </section>
    </>
    )
}