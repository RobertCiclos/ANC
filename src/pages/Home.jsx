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
                    className=' grid bg-slate-500
                    grid-cols-2
                    lg:grid-cols-3 lg:gap-x-[79px] lg:gap-y-[88px]'>
                    <CardConsejo foto='' nombre='Dr. Alberto Gago ' cargo='Presidente'/>
                    <CardConsejo foto='' nombre='Dra. Gisella Orjeda' cargo='Vicepresidente'/>
                    <CardConsejo foto='' nombre='Dr. José Macharé' cargo='Secretario'/>
                    <CardConsejo foto='' nombre='Dra. Dionicia Gamboa' cargo='Tesorera'/>
                    <CardConsejo foto='' nombre='Dra. Silvia Rosas' cargo='Vocal'/>
                    <CardConsejo foto='' nombre='Dra. Gretty Villena ' cargo='Vocal'/>
                    <CardConsejo foto='' nombre='Dra. Luisa Vetter' cargo='Vocal'/>
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
