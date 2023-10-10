import React from 'react'
import Cards from './Cards'
import Hero from './Hero'
// import { CarsList } from './CarsList'

export const Home = () => {
  return (
    <div>
        <Hero />
        <Cards />
      {/* <div>
        <h1>Recomendados para vos</h1>
        <CarsList />
      </div> */}
    </div>
  )
}
