import React from 'react';

const CardConsejo = (props) => {
  return (
    <div
        className='
        w-[162px] h-[177px]
        lg:w-[288px] lg:h-[392px]'>
        <img className='mx-auto
            w-[120px] h-[120px]
            lg:w-[288px] lg:h-[288px]' 
            src={props.foto}
        />
        <div>
            <p>
                {props.nombre}
            </p>
            <p>
                {props.cargo}
            </p>
        </div>
    </div>
  )
}

export default CardConsejo