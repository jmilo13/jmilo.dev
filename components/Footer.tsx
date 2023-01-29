import React from 'react'
import styles from "@styles/footer.module.scss" 


export default function Footer(){
    return (
    <footer className={styles.footer}>
      <p className={styles.content}>Puedes ver el <a href='https://github.com/jmilo13/jmilo.dev' target='_blank' rel='noreferrer noopener'>repositorio</a> de este sitio</p>
    </footer>
    )
}