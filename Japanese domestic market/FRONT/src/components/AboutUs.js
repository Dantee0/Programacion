import React from 'react';
import flag from '../img/japaneseflag.webp';

export const AboutUs = () => {
  return (
    <div className='p-5 text-center bg-white' id='about-us'>
        <img src={flag} style={{ height: '150px', float: 'left'}} alt='japanese flag with cars and cherry tree'/>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-dark align-left'>
                    <h2 className='mb-3 fb-bold'>Sobre Nosotros</h2>
                    <p className='mb-3'>
                        JDM Zone nace con el objetivo de crear una comunidad de entusiastas de automóviles japoneses. 
                        <br/>
                        Ofrecemos una amplia selección para que los compradores puedan encontrar el modelo, de la marca y el año que desean. 
                        <br/>
                        También proporcionamos a los vendedores una plataforma para publicar y vender a una audiencia global interesada.
                    </p>
                </div>
            </div>
    </div>
  )
}
