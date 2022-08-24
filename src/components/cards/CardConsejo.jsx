import React from 'react';

const CardConsejo = (props) => {
  return (
    <div
        className='
        w-[162px] h-[177px]
        sm:w-[288px] sm:h-[392px]'>
        <img className='mx-auto
            w-[120px] h-[120px]
            sm:w-[288px] sm:h-[288px]' 
            src={props.foto}
            alt=''
        />
        <div>
            <p
                className='font-[Poppins] font-semibold text-center text-white
                text-[14px] pt-[16px]
                sm:text-[24px] sm:pt-[24]'>
                {props.nombre}
            </p>
            <p
                className='font-[Roboto] text-white text-center
                text-[12px] font-light
                sm:text-[22px] sm:font-normal'>
                {props.cargo}
            </p>
        </div>
    </div>
  )
}

export default CardConsejo