import React from 'react';
import contactImage from '../img/contact.png';

export const Contact = () => {
  return (
    <div className='p-5 text-center bg-image' id="contact" 
        style={{
        backgroundImage: `url(${contactImage})`,
        height: '800px',
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover' }}>
    <section className='w-100'>
        <div className='p-5 text-white' style={{ display: 'flex', justifyContent: 'flex-start', marginBlockStart: '20px', marginBlockEnd: '180px' }}>
            <h1 className='fw-bold'>CONTACT<br></br>DETAILS</h1>
        </div>
        <section style={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'center'}}>
            <div className='p-2 text-white'>
                <h5 className='fw-bold'>DIRECCIÓN</h5>
                <p className='mt-2'>P. Sherman, Calle Wallaby 42, Sídney</p>
            </div>
            <div className='p-2 text-white'>
                <h5 className='fw-bold'>E-MAIL</h5>
                <a href="mailto:JDMZone@gmail.com" className='p-2 text-white' style={{ textDecoration: 'none' }}>JDMZone@gmail.com</a>
            </div>
            <div className='p-2 text-white'>
                <h5 className='fw-bold'>TELÉFONO</h5>
                <p className='mt-2'>+54 9 11 1234-5678</p>
            </div>
        </section>
    </section>
    </div>
  )
}
