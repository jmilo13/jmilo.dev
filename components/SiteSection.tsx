import React from 'react'
import Link from 'next/link'
import Button from './Button'
import styles from "@styles/site-section.module.scss" 

interface Data{
    link: string
    text: string 
    target?: string
}

export default function SiteSection(data: Data){
    
    return(
        <section className={styles.item}>
            <div className={styles.triangle}></div>
            <Button target={data.target} link={data.link} text={data.text} solid={false}/>
        </section>
    )
}