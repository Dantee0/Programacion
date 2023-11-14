import React from 'react'
import { CarsList } from './CarsList'

export const Market = () => {

  return (
    <div style={{ padding: '100px 0px' }}>
        <h1 className='text-center text-light'>
        <strong>MARKET</strong>
        </h1>
        <h3 className='text-light text-center' style={{ padding: '10px' }}>Autos disponibles</h3>
        <CarsList />
    </div>
  )
}
