import React from 'react'
import Btnnoticias from '../components/buttons/Btnnoticias'
import CardCategoria from '../components/cards/CardCategoria'
import CardConsejo from '../components/cards/CardConsejo'
import BtnYellowVer from '../components/buttons/BtnYellowVer'
import CardNoticia from '../components/cards/CardNoticia'
import BtnBlue_ver from '../components/buttons/BtnBlue_ver'
import CardArticulos from '../components/cards/CardArticulos'
import CardLibros from '../components/cards/CardLibros'

const Home = () => {
    const dbHome = require("../bd/home.json")
    console.log(dbHome)
  return (
    <div className=' '>
        <section id="Video">
            <img src='./imagenes/img-video.png' alt='video Academia Nacional de Ciencias' className='w-full lg:h-[calc(100vh-85px)] mx-auto'/>
        </section>

        <section id="Presentacion">
            <div
                className='contenedor'>
                <h1> Academia Nacional de Ciencias </h1>
                <p
                    className='presentacion '>
                    La Academia Nacional de Ciencias fue fundada el 6 de agosto de 1938 por un grupo de 35 distinguidos científicos peruanos, originalmente con el nombre “Academia Nacional de Ciencias Exactas, Físicas y Naturales de Lima”, para promocionar la investigación científica y la difusión del conocimiento científico.
                </p>
            </div>
        </section>

        <section id="Noticias">
            <div
                className='contenedor'>
                <h1 
                    className='noticias'>
                    Noticias sobre la comunidad
                </h1>
                <div
                    className='grid mx-auto  mb-[20px]
                    lg:grid-cols-2 lg:w-[1064px] sm:gap-[40px] lg:mb-[80px] sm:mt-[10px] '>
                    <img 
                        alt='card'
                        src='imagenes/noticias/noticia-principal.png' 
                        className='w-[327px] h-[200px] rounded-md mx-auto
                        sm:w-[541px] sm:h-[322px] ' />
                    <div 
                        className='mt-[32px] mx-auto
                        sm:mt-[0px]'>
                        <h3>
                            Biología digital en pandemia
                        </h3>
                        <div 
                            className='grid w-[310px] gap-[11px] mx-auto grid-cols-2 mt-[24px] 
                            md:w-[300px] sm:gap-[24px] sm:ml-[21px]'>
                            <p className='nombre'>
                                Irving Suarez
                            </p>
                            <p className='numero pt-[4px]'>
                                22/01/2022
                            </p>
                        </div>
                        <p 
                            className='texto mt-[24px] w
                            sm:ml-[21px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies scelerisque mauris sed ipsum augue at tortor volutpat. Maecenas tortor suspendisse nibh aliquam tincidunt in risus eget. Et phasellus non ut senectus pellentesque purus...
                        </p>
                        <Btnnoticias/>
                    </div>
                </div>
                <div 
                    className='grid mx-auto gap-[40px]
                    lg:grid-cols-[472px_472px]  lg:w-[1064px] lg:gap-[100px]'>
                    <CardNoticia imagen="imagenes/noticias/noticia1.png"/>
                    <CardNoticia imagen="imagenes/noticias/noticia2.png"/>
                    <CardNoticia imagen="imagenes/noticias/noticia1.png"/>
                    <CardNoticia imagen="imagenes/noticias/noticia2.png"/>
                </div>
            </div>
        </section>

        <section id="Estadisticas"
            className='grid mx-auto mt-[30px] h-[400px]
            lg:mt-[80px]
            lg:w-[1440px] lg:h-[448px]
            bg-[url("/public/imagenes/fondo-estadistica.png")] bg-center relative
            before:w-full before:h-full before:absolute before:bg-[#101E32] before:opacity-40'>
            <div 
                className='grid w-[294px] relative mx-auto estadistica 
                lg:grid-cols-3 lg:w-[1440px] lg:gap-[70px] items-center'> 
                <div>
                    <p 
                        className='mx-auto
                        lg:pb-[20px]'>
                        10
                        <p 
                            className='estadisitica2'>
                            Directivos
                        </p>
                    </p>
                </div> 
                
                <div>
                    <p 
                        className='
                        lg:pb-[25px]'>
                        400+
                            <p 
                                className='estadisitica2'>
                                Miembros de la comunidad
                            </p>
                    </p>
                </div>
                
                <div className=''>
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
                  
            </div>
        </section>

        <section id="Categorias">
            <div
                className='contenedor '>
                <h2
                    className='text-[#0668B8]'>
                    Categorías
                </h2>
                <div 
                    className='grid mt-[32px] grid-cols-1 gap-[40px] pb-[48px]
                    lgcard:grid-cols-2 lgcard:gap-[50px] lg:mt-[75px]'>
                    <CardCategoria imgC="./imagenes/categoria/card-historico.png" texto="Historico"/>
                    <CardCategoria imgC="./imagenes/categoria/card-cultural.png" texto="Cultural"/>
                    <CardCategoria imgC="./imagenes/categoria/card-lecturas.png" texto="Lecturas"/>
                    <CardCategoria imgC="./imagenes/categoria/card-conocimiento.png" texto="Conocimiento"/>
                </div>
                <div 
                    className='grid justify-items-center'>
                    <BtnBlue_ver/>
                </div>
            </div>
        </section>

        <section id="Consejo"
            className='grid w-[311px] mx-auto
            sm:px-[8%] sm:w-auto
              xl:px-0 2xl:w-[1440px] 
            bg-[url("/public/imagenes/fondo-consejo.png")] bg-center relative
            before:w-full before:h-full before:absolute before:bg-[#101E32] before:opacity-70'>
            <div
                className='contenedor relative'>
                <h2
                    className='text-[#FFE252]'>
                    Consejo Directivo
                </h2>
                <div 
                    className=' grid justify-items-center
                    grid-cols-2 gap-[8px] pt-[40px]
                    sm:grid-cols-1 sm:gap-[79px] md:grid-cols-2
                    xl:grid-cols-3 xl:pt-[72px]'>
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

        <section id="Alianzas">
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

        <section id="Publicaciones">
            <div
                className='contenedor'>
                <div
                    className='grid justify-items-center gap-x-[70px] gap-y-[64px]
                    grid-cols-1
                    lg:grid-cols-2 '>
                    <div>
                        <p
                            className='publicados'>
                            Artículos Publicados
                        </p>
                        <div
                            className='py-[24px] lg:py-[32px]
                            gap-y-[24px] lg:gap-y-[32px]'>
                            <CardArticulos/>
                            <CardArticulos/>
                            <CardArticulos/>
                        </div>
                    </div>
                    <div>
                        <p
                            className='publicados'>
                            Libros Publicados
                        </p>
                        <div
                            className='py-[24px] lg:py-[32px]
                            gap-y-[24px] lg:gap-y-[32px]'>
                            <CardLibros/>
                            <CardLibros/>
                            <CardLibros/>
                            <CardLibros/>
                        </div>
                    </div>
                </div>
                <div 
                    className='grid justify-items-center'>
                    <BtnYellowVer/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
