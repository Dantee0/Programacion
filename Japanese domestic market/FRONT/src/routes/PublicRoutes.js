import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { Home } from '../components/Home';

export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
