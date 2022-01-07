import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "@styles/site-section.module.scss" 

interface Data{
    link: string
    icon: string 
    text: string 
    width: number 
    height: number
    target?: string
}

export default function SiteSection(data: Data){
    
    return(
        <section className={styles.item}>
            <Image src={data.icon} alt={data.text} width={data.width} height={data.height}></Image>
            <div className={styles.item__button}> 
                {data.target ? <a href={data.link} target={data.target}>{data.text}</a> : <Link href={data.link}>{data.text}</Link>}
            </div>  
        </section>
    )
}