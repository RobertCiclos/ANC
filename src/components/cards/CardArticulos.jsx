import React from 'react';
import BtnBlue_leer from '../buttons/BtnBlue_leer';

const CardArticulos = (props) => {
  return (
    <div
    className='
    w-[327px] h-[326px] p-[16px]
    sm:w-[520px] sm:h-[447px] sm:p-[24px]'>
    <div
      className='grid
      grid-cols-[62px_217px] gap-[16px]
      sm:grid-cols-[103.8px_326px] sm:gap-[23.95px]'>
      <img src='./imagenes/img-articulos.png'/>
      <div>
        <h4
          className='font-medium font-[Poppins] text-[#001E53]
          text-[16px] pb-[8px]
          sm:text-[20px] sm:pb-[16px]'>
          Determinantes del gasto de bolsillo en salud en el Perú
        </h4>
        <p
          className='font-[Poppins] font-medium text-[#373737]
          text-[12px] py-[16px]
          sm:text-[16px] sm:py-[24px]
          border-y-[1px] border-b-[#DDDDDD]'>
          Luis García, Crissy Rojas Julio, 2021  Idioma original: Español
        </p>
        <p
          className='font-[Roboto] font-regular text-[#272727]
          text-[12px] py-[16px]
          sm:text-[16px] sm:py-[24px]'>
          Es conocido que el gasto de bolsillo en salud es una de los factores que afectan a los hogares del Perú y América Latina, y que los llevan a caer en pobreza. Este trabajo tiene como objetivo ....
        </p>
      </div>
    </div>
    <div
      className='grid justify-items-center'>
      <BtnBlue_leer/>
    </div>
  </div>
  )
}

export default CardArticulos