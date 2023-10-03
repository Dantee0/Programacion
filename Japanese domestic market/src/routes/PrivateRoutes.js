import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { CarsForm } from '../components/CarsForm'
import { Market } from '../components/Market'
import { MyPosts } from '../components/MyPosts'

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/carsform' element={ <CarsForm />} />
        {/* crear ruta para inventario de autos con precios, otra para "mis autos publicados/mis publicaciones" */}
        {/* en las rutas privadas van los componentes */}
        <Route path='/market' element={ <Market />} />
        <Route path='/myPosts' element={ <MyPosts />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
