import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@components/styles/site-section.module.scss'

export default function SiteSection(props){
    const {link, icon, text, width, height} = props
    return(
        <section className={styles.item}>
            <Image src={icon} alt={text} width={width} height={height}></Image>
            <div className={styles.item__button}> 
                <Link href={link}>{text}</Link>
            </div>
            
        </section>
    )
}