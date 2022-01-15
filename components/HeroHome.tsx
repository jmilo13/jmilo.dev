import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@styles/heroHome.module.scss' 

interface Data{
    src: string
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
        <div className='hero_image'>
            <Image src={data.src} alt="Saludo" width="142" height="142" />   
        </div>
    </section>
    )
}