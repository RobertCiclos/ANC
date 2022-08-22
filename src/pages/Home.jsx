import React from 'react'

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
            <div>
                <h1 className=''> Academia Nacional de Ciencias </h1>
                <p
                    className='presentacion '>
                    La Academia Nacional de Ciencias fue fundada el 6 de agosto de 1938 por un grupo de 35 distinguidos científicos peruanos, originalmente con el nombre “Academia Nacional de Ciencias Exactas, Físicas y Naturales de Lima”, para promocionar la investigación científica y la difusión del conocimiento científico.
                </p>
            </div>
        </section>

        <section
            id="Noticias">
        
        </section>

        <section
            id="Estadisticas">
        
        </section>

        <section
            id="Categorias">
        
        </section>

        <section
            id="Consejo">
        
        </section>

        <section
            id="Alianza">
        
        </section>

        <section
            id="Publicaciones">
        
        </section>
    </div>
  )
}

export default Home
