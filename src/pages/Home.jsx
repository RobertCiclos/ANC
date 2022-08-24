import React from 'react'
import CardConsejo from '../components/cards/CardConsejo'

const Home = () => {
    const dbHome = require("../bd/home.json")
    console.log(dbHome)
  return (
    <div>
        <section
            id="Video">
            <img src='./imagenes/img-video.png' alt='video Academia Nacional de Ciencias' className='video'/>
        </section>

        <section
            id="Presentacion">
            <div
                className='contenedor'>
                <h1 className=''> Academia Nacional de Ciencias </h1>
                <p
                    className='presentacion '>
                    La Academia Nacional de Ciencias fue fundada el 6 de agosto de 1938 por un grupo de 35 distinguidos científicos peruanos, originalmente con el nombre “Academia Nacional de Ciencias Exactas, Físicas y Naturales de Lima”, para promocionar la investigación científica y la difusión del conocimiento científico.
                </p>
            </div>
        </section>

        <section
            id="Noticias">
            <div
                className='contenedor'>

            </div>
        </section>

        <section
            id="Estadisticas">
            <div
                className='contenedor'>

            </div>
        </section>

        <section
            id="Categorias">
            <div
                className='contenedor'>
                <h2
                    className='text-[#0668B8]'>
                    Categorías
                </h2>
            </div>
        </section>

        <section
            id="Consejo">
            <div
                className='contenedor'>
                <h2
                    className='text-[#FFE252]'>
                    Consejo Directivo
                </h2>
                <div 
                    className=' grid grid-cols-2 bg-slate-500 gap-auto
                    xl:grid-cols-3 '>
                    <CardConsejo foto='./imagenes/consejo/dr-alberto.png' nombre='Dr. Alberto Gago ' cargo='Presidente'/>
                    <CardConsejo foto='./imagenes/consejo/dr-gisella.png' nombre='Dra. Gisella Orjeda' cargo='Vicepresidente'/>
                    <CardConsejo foto='./imagenes/consejo/dr-jose.png' nombre='Dr. José Macharé' cargo='Secretario'/>
                    <CardConsejo foto='./imagenes/consejo/dr-dionicia.png' nombre='Dra. Dionicia Gamboa' cargo='Tesorera'/>
                    <CardConsejo foto='./imagenes/consejo/dr-silvia.png' nombre='Dra. Silvia Rosas' cargo='Vocal'/>
                    <CardConsejo foto='./imagenes/consejo/dr-gretty.png' nombre='Dra. Gretty Villena ' cargo='Vocal'/>
                    <CardConsejo foto='./imagenes/consejo/dr-luisa.png' nombre='Dra. Luisa Vetter' cargo='Vocal'/>
                </div>
            </div>
        </section>

        <section
            id="Alianzas">
            <div
                className='contenedor'>
                <h2
                    className='text-[#0668B8]'>
                    Alianzas y comunidades
                </h2>
                <div
                    className='grid mx-auto gap-x-[32px]
                    w-[278px] grid-cols-2 gap-y-[24.12px] pt-[46px]
                    sm:w-[556px] sm:grid-cols-3 sm:gap-y-[40px] md:pt-[56px]
                    lg:w-[752px] lg:grid-cols-4 lg:gap-y-[75px] lg:pt-[64px]'>
                    <img classname='img-alianzas' src='./svg/tesla-logo.svg' alt=''/>
                    <img classname='img-alianzas' src='./svg/logo-google.svg' alt=''/>
                    <img classname='img-alianzas' src='./svg/ibm-logo.svg' alt=''/>
                    <img classname='img-alianzas' src='./svg/duolingo-logo.svg' alt=''/>
                    <img classname='img-alianzas' src='./svg/tesla-logo.svg' alt=''/>
                    <img classname='img-alianzas' src='./svg/logo-google.svg' alt=''/>
                    <img classname='img-alianzas' src='./svg/ibm-logo.svg' alt=''/>
                    <img classname='img-alianzas' src='./svg/duolingo-logo.svg' alt=''/>
                </div>
            </div>
        </section>

        <section
            id="Publicaciones">
            <div
                className='contenedor'>

            </div>
        </section>
    </div>
  )
}

export default Home
