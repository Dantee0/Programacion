import React, { useState } from 'react'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';


import { PublicRoutes } from './routes/PublicRoutes';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { UserContext } from './context/UserContext';


function App () {
  
  const [user, setUser] = useState({  /*Hook*/
    role: '',
    logged: false
  })

  return (
    <div className='App'>
      <UserContext.Provider value={{user, setUser}} >
        <Navbar />
        <Routes>
          {
            user.logged ? (
              <Route path='/*' element={<PrivateRoutes />} />
            ):(
              <Route path='/*' element={<PublicRoutes />} />
            )
          }
        </Routes> 
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default App;