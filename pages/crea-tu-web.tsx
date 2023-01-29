import React from 'react'
import Head from 'next/head'
import SectionTitle from '@components/SectionTitle'
import ProductCard from '@components/ProductCard'
import styles from "@styles/create.module.scss" 

export default function About(){
  return(
    <>
      <Head>
        <title>Portafolio - Planes</title>
        <meta name='description' content='Planes para el desarrollo de sitios web'/> 

        <meta property="og:title" content="Portafolio - Crea tu web" key="ogtitle"/>
        <meta property="og:site_name" content='Portafolio' key="ogsitename" />
        <meta property="og:type" content="information" key="ogtype"/>
        <meta property="og:url" content="/crea-tu-web" key="ogurl"/>
        <meta property="og:description" content='Información sobre Camilo Gonzalez como frontend depeloper y algunos aspectos personales' key="ogdescription"/>
      </Head>
      <SectionTitle title='Crea tu web'/>
      <section className={styles.create}>
        <p>
          Si te interesa tener tu propio sitio web aqui tienes diferentes opciones de acuerdo a tus necesidades. En cualquiera puedes optar por configurar <strong>multilenguaje</strong>:
        </p>
        <div className={styles.containerCards}>
          <ProductCard 
            title='Landing page'
            items = {[
              "Toda la información en tu página de inicio",
              "La prioridad es generar un reconocimeinto de marca y el contacto directo con el cliente",
              "Dale a tus clientes la información precisa",
            ]}
          />
          <ProductCard 
            title='Sitio web con secciones'
            items = {[
              "Información básica en la ventana de inicio para el reconocimiento de la marca",
              "Organiza la información de tu negocio en secciones independientes (Quienes somos, Contacto, Servicios, etc)",
              "El objetivo es darle información mas detallada al cliente y generar un contacto directo",
            ]}
          />
          <ProductCard 
            title='Blog'
            items = {[
              "Organiza la información de tu negocio en secciones independientes (Quienes somos, Contacto, Servicios, etc)",
              "Entradas de blog con o sin comentarios de los visitantes",
              "Entorno amigable para crear y gestionar las publicaciones",
              "El objetivo es conectar con la comunidad y crear contenido periódicamente"
            ]}
          />
          <ProductCard 
            title='E-commerce - Catálogo'
            items = {[
              "Organiza la información de tu negocio en secciones independientes (Quienes somos, Contacto, Servicios, etc)",
              "Muestra a tus clientes todos tus productos y stock",
              "Gestiona la lista de productos desde tu web con inicio de sesión",
              "El objetivo es generar un contacto directo para la compra del producto o servicio",
            ]}
          />
          {/* <ProductCard 
            title='E-commerce - Tienda online'
            items = {[
              "Organiza la información de tu negocio en secciones independientes (Quienes somos, Contacto, Servicios, etc)",
              "Muestra a tus clientes todos tus productos y stock",
              "Ten un carrito de compra y ofrece diferentes medios de pago",
              "El objetivo es que tus clientes puedan realizar el proceso de compra completo en tu sitio web sin contactarte"
            ]}
          /> */}
        </div>
      </section>
    </>
  )
}