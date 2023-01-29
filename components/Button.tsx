import React from 'react'
import Link from 'next/link'
import styles from "@styles/button.module.scss" 

interface Data{
    link: string
    text: string 
    target?: string
    solid?: boolean
    section?: boolean
}

export default function Button(data: Data){
    return (
    <div className={`${data.solid ? styles.button : styles.transparent} ${data.section && styles.buttonSection}`}> 
        {data.target ? <a href={data.link} target={data.target}>{data.text}</a> : <Link href={data.link}>{data.text}</Link>}
    </div> 
    )
}