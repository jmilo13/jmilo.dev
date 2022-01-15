import React from 'react'
import Link from 'next/link'
import styles from "@styles/button.module.scss" 

interface Data{
    link: string
    text: string 
    target?: string
}

export default function Button(data: Data){
    return (
    <div className={styles.button}> 
        {data.target ? <a href={data.link} target={data.target}>{data.text}</a> : <Link href={data.link}>{data.text}</Link>}
    </div> 
    )
}