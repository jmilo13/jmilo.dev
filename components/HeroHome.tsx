import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@styles/heroHome.module.scss' 

interface Data{
    src1: string
    src2: string
    src3: string
    social1: string
    social2: string
    social3: string
    text: string 
    width: number
    height: number
    title: string
    subtitle: string
}

export default function HeroHome(data:Data){
    return (
    <section className={styles.hero}>
        <div className={styles.header}>
            <h1 className={styles.title}>{data.title}</h1>
            <h2 className='hero_subtitle'>{data.subtitle}</h2>
        </div>
        <div className={styles.social}>
              <a href={data.social1} target='_blank' rel='noreferrer noopener'><Image src={data.src1} width={data.width} height={data.height}/></a>
              <a href={data.social2} target='_blank' rel='noreferrer noopener'><Image src={data.src2} width={data.width} height={data.height}/></a>
              <a href={data.social3} target='_blank' rel='noreferrer noopener'><Image src={data.src3} width={data.width} height={data.height}/></a>
        </div>
        
    </section>
    )
}