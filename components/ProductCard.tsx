import React from 'react'
import styles from "@styles/productCard.module.scss" 
import Button from '@components/Button'

interface Data{
  title: string
  items: string[]
}

export default function SectionHeader(data: Data){
  return(
    <article className={styles.article}>
      <h3>{data.title}</h3>  
      {data.items.map(item => <p><i/>{item}</p> )} 
      <Button link="https://wa.me/message/V7KKKDIRGD62K1" text='Cotizar' solid target='_blank' section/>   
    </article>
    )
}