import React from 'react';

const CardCategoria = (props) => {
  return (
    <div 
      style={{backgroundImage: `url(${props.imgC})`}}
      className='w-[327px] h-[188px] mx-auto rounded-3xl  
      sm:w-[520px] sm:h-[309px]
      bg-center relative
      before:w-full before:h-full before:absolute before:bg-[#064e89] before:opacity-70 before:rounded-3xl '>
      <h3 className='grid categoria absolute left-[40px] top-[121px]
      sm:left-[40px] sm:top-[205px]'>
         {props.texto}  
      </h3>  
    </div>
  )
}

export default CardCategoria