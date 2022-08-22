import React from 'react'

const Navbar = () => {
  return (
    <div
      className='flex h-[49px] lg:h-[104px] items-center'>
      <nav
        className='grid mx-auto
        w-[320px] h-[33px] grid-cols-[80px_1fr_32px]
        sm:w-[600px] md:w-[666px]
        lg:w-[980px] lg:h-[64px] lg:grid-cols-[176px_1fr_644px]
        xl:w-[1140px]'>
        <img src='./svg/logo-navbar.svg' alt='Academia Nacional de Ciencias'/>
        <button
          className='visible lg:invisible col-start-3 lg:col-start-2'>
          <img src='./svg/logo-menu.svg' alt='menu Academia Nacional de Ciencias'/>
        </button>
        <div
          className='invisible lg:visible lg:col-start-3 flex gap-x-[40px]'>
          <button className='navbarbutton'> Inicio </button>
          <button className='navbarbutton'> Publicaciones </button>
          <button className='navbarbutton'> Actividad Académica </button>
          <button className='navbarbutton'> Proyectos </button>
          <button className='navbarbutton'> Contacto </button>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
