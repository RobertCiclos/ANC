import React from 'react'

const Footer = () => {
  return (
    
    <section 
      className='h-[159px] grid lg:max-w-[1440px] mx-auto lg:h-[500px]
      bg-[url("/public/imagenes/img-footer.png")] bg-cover bg-center relative
      before:w-full before:h-full before:absolute before:bg-[#101E32] before:opacity-80'>
      <div 
        className="mx-auto justify-items-center grid relative">
        <img src='svg/logo-footer.svg' alt='Logo del footer'
          className='mx-auto w-[48px] h-[64x]
          sm:w-[179px] sm:h-[241px]'/>
        <div 
          className="grid grid-cols-3 w-[49px] gap-[8px] mx-auto 
          sm:w-[180px] sm:gap-[30px] mt-[49px] mb-[36px]">
          <a href='https://www.instagram.com/'>
            <img src="./svg/logo-ig.svg" alt='Logo Instagram'
              className=" w-[11px] h-[11x]
              sm:w-[40px] sm:h-[40px]"/>
          </a>
          <a href='https://www.facebook.com/'>
            <img src="./svg/logo-fb.svg" alt='Logo Facebook'
              className="w-[11px] h-[11x]
              sm:w-[40px] sm:h-[40px]"/>
          </a >
          <a href='https://pe.linkedin.com/'>
            <img src="./svg/logo-in.svg" alt='Logo In'
              className="w-[11px] h-[11x]
              sm:w-[40px] sm:h-[40px]"/>
          </a>
        </div>
        <p 
          className='font-[Roboto] text-[10px] font-normal text-white
          lg:text-[16px] '>
          Copyright © 2021Academia Nacional de Ciencias - Lima - Perú
        </p>
      </div>
    </section>
  )
}

export default Footer
