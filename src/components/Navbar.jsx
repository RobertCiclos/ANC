import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

  const cambioIconoQuery = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  
  return (
    <header
      className='contenedor h-[49px] sm:h-[104px] py-[0px] '>
      <nav
        className=' grid grid-cols-2  items-center h-full
        lg:grid-cols-[1fr_644px]'>
        <img 
          src='./svg/logo-navbar.svg' 
          alt='Academia Nacional de Ciencias'
          className='w-[79px] sm:w-[176px]'
        />
       {!cambioIconoQuery ?
          <button
            className='justify-self-end'>
            <img 
              src='./svg/logo-menu.svg' 
              alt='menu Academia Nacional de Ciencias'/>
          </button>
          :
          <div
            className='flex gap-x-[40px]'>
            <button className='navbarbutton'> Inicio </button>
            <button className='navbarbutton'> Publicaciones </button>
            <button className='navbarbutton'> Actividad Académica </button>
            <button className='navbarbutton'> Proyectos </button>
            <button className='navbarbutton'> Contacto </button>
          </div>
          }
      </nav>
      
    </header>
  )
}

export default Navbar
