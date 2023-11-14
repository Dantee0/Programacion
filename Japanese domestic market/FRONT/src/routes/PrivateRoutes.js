import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { Home } from '../components/Home'
import { Market } from '../components/Market'
import { AddCar } from '../components/AddCar'
import { ShoppingCart } from '../components/ShoppingCart'

/* en las rutas privadas van los componentes */

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/addCar' element={ <AddCar /> } />
        <Route path='/market' element={ <Market />} />
        <Route path='/shoppingCart' element={ <ShoppingCart />} />
        <Route path='/*' element={<Navigate to='/' replace />} ></Route>
    </Routes>
  )
}
