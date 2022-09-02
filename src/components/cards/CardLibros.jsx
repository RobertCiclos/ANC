import React from 'react';

const CardLibros = (props) => {
  return (
    <div
      className='
      w-[327px] h-[241px] p-[16px]
      sm:w-[520px] sm:h-[302px] sm:p-[24px]'>
      <div
        className='grid
        grid-cols-[62px_217px] gap-[16px]
        sm:grid-cols-[103.8px_326px] sm:gap-[23.95px]
        border-b-[1px] border-b-[#DDDDDD]'>
        <img src='./imagenes/img-libros.png'/>
        <div>
          <h4
            className='font-medium font-[Poppins]
            text-[16px] sm:text-[20px]'>
            "Aguas y Arsénico Natural en Perú"
          </h4>
          <p
            className='font-[Poppins] font-light text-[#373737]
            text-[12px] py-[16px]
            sm:text-[16px] sm:py-[24px]'>
            Patricia Benavente, José Escaffi, José Távara y Alonso Segura
          </p>
          <p
            className='font-[Roboto] font-regular text-[#272727]
            text-[12px] pb-[16px]
            sm:text-[16px] sm:pb-[24px]'>
            Pontificia Universidad Católica del Perú, Escuela de Gobierno y Políticas Públicas Lima, Noviembre, 2017
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardLibros