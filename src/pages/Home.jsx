import React from 'react'
import Btnnoticias from '../components/buttons/Btnnoticias'
import CardBiologia from '../components/cards/CardBiologia'
import CardCategoria from '../components/cards/CardCategoria'
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
                <h1 
                    className='noticias'>
                    Noticias sobre la comunidad
                </h1>
                <div
                    className='grid mx-auto  mb-[20px]
                    sm:grid-cols-2 sm:w-[1064px] sm:gap-[40px] sm:mb-[80px] sm:mt-[10px] '>
                    <img 
                        alt='card'
                        src='imagenes/noticias/noticia-principal.png' 
                        className='w-[327px] h-[200px] rounded-md
                        sm:w-[541px] sm:h-[322px] ' />
                    <div 
                        className='mt-[32px] mx-auto
                        sm:mt-[0px]'>
                        <h3 
                            className='h3'>
                            Biología digital en pandemia
                        </h3>
                        <div 
                            className='grid w-[310px] gap-[11px] mx-auto grid-cols-2 mt-[24px] 
                            sm:w-[300px] sm:gap-[24px] sm:ml-[21px]'>
                            <p className='nombre'>
                                Irving Suarez
                            </p>
                            <p className='numero pt-[4px]'>
                                22/01/2022
                            </p>
                        </div>
                        <p 
                            className='texto mt-[24px] 
                            sm:ml-[21px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies scelerisque mauris sed ipsum augue at tortor volutpat. Maecenas tortor suspendisse nibh aliquam tincidunt in risus eget. Et phasellus non ut senectus pellentesque purus...
                        </p>
                        <Btnnoticias/>
                    </div>
                </div>
                <div 
                    className='grid mx-auto gap-[40px]
                    sm:grid-cols-[472px_472px]  sm:w-[1064px] sm:gap-[100px]'>
                    <CardBiologia imagen="imagenes/noticias/noticia1.png"/>
                    <CardBiologia imagen="imagenes/noticias/noticia2.png"/>
                    <CardBiologia imagen="imagenes/noticias/noticia1.png"/>
                    <CardBiologia imagen="imagenes/noticias/noticia2.png"/>
                </div>
            </div>
        </section>

        <section
            id="Estadisticas"
            className='grid w-[375px] mx-auto h-[429px] mt-[30px]
            sm:mt-[80px]
            sm:w-[1440px] sm:h-[448px]
            bg-[url("/public/imagenes/fondo-estadistica.png")] bg-center relative
            before:w-full before:h-full before:absolute before:bg-[#101E32] before:opacity-40'>
            <div 
                className='grid w-[294px] relative mx-auto estadistica 
                lg:grid-cols-3 lg:w-[1010px] lg:gap-[100px] items-center'> 
                  <p 
                    className='
                    lg:pb-[20px]'>
                    10
                    <p 
                        className='estadisitica2'>
                        Directivos
                    </p>
                  </p>
                  <p 
                    className='
                    lg:pb-[25px]'>
                    400+
                        <p 
                            className='estadisitica2'>
                            Miembros de la comunidad
                        </p>
                  </p>
                  <p 
                    className='
                    lg:pb-[25px]'>
                      +60
                      <p 
                            className='estadisitica2'>
                            Proyectos de investigación
                        </p>
                  </p>
            </div>
        </section>

        <section
            id="Categorias">
            <div
                className='contenedor'>
                <h2
                    className=''>
                    Categorías
                </h2>
                <div 
                    className='grid grid-cols-2'>
                    <CardCategoria/>
                    <CardCategoria/>

                </div>
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

        <section>

        </section>
    </div>
  )
}

export default Home
