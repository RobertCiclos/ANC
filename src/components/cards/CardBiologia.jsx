import React from 'react';

const CardBiologia = (props) => {
  return (
    <section>
        <div   
            className='grid grid-cols-[130px_180px] mx-auto border-b border-[#DDDDDD] pb-[16px]
            sm:grid-cols-[138px_302px] sm:gap-[32px] sm:w-[475px] sm:pb-[24px]'>
            <img src={props.imagen} 
                className="w-[136x] h-[117px]
                sm:w-[138px] sm:h-[146px]"/>
                    <div 
                        className='
                        sm:'>
                        <h3 
                            className='cardH3'>
                            Biología digital en pandemia
                        </h3>
                        <div 
                            className='grid grid-cols-2 mx-auto mt-[15px]
                            sm:gap-[16px] sm:ml-[1px] sm:mt-[22px]
                            sm:w-[226px]  '>
                            <p 
                                className='cardnombre'>
                                Irving Suarez
                            </p>
                            <p 
                                className='cardnumero pt-[1px]
                                sm:pt-[4px]'>
                                22/01/2022
                            </p>
                        </div>
                        <p 
                            className='cardtexto pt-[8px]
                            sm:pt-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vestibulum faucibus feugiat lorem...
                        </p>
                    </div>
        </div>
    </section>
  )
}

export default CardBiologia