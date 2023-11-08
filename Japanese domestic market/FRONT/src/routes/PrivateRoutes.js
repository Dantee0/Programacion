import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { Home } from '../components/Home'
// import { CarsForm } from '../components/CarsForm'
import { Market } from '../components/Market'
import { MyPosts } from '../components/MyPosts'
import { AddCar } from '../components/AddCar'
import { ShoppingCart } from '../components/ShoppingCart'

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path='/carsform' element={ <CarsForm />} /> */}
        {/* crear ruta para inventario de autos con precios, otra para "mis autos publicados/mis publicaciones" */}
        {/* en las rutas privadas van los componentes */}
        <Route path='/addCar' element={ <AddCar /> } />
        <Route path='/market' element={ <Market />} />
        <Route path='/myPosts' element={ <MyPosts />} />
        <Route path='/shoppingCart' element={ <ShoppingCart />} />
        <Route path='/*' element={<Navigate to='/' replace />} ></Route>
    </Routes>
  )
}
