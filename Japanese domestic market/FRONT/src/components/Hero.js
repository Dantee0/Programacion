import React from 'react';
import { transparentize } from 'polished';

function Hero() {
  return (
    <div className='p-5 text-center bg-image' 
         style={{ backgroundImage: 'url(../img/fondo1.webp)', 
         height: '90vh', 
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundRepeat: 'no-repeat', 
         backgroundPosition: 'center', 
         backgroundSize: 'cover' }}>
        <div className='mask' style={{ backgroundColor: transparentize(0.2, 'rgba(0, 0, 0, 0.8)'), height: '90%', width: '90%' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                    <h1 className='mb-3 fw-bold' style={{ fontSize: '50px' }}>JDM Zone</h1>
                    <h4 className='mb-3'>Marketplace especializado en automóviles de origen japonés.</h4>
                    <a className='btn btn-outline-light btn-lg m-2' href='/market' role='button'>Conocer más</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero