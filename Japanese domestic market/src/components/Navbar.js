import React from "react";
import { Link } from 'react-router-dom';
import logo from '../img/whitelogo.png';

export const Navbar = () => {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light" data-bs-theme="dark">
              <a className="navbar-braknd" href="/home" > <img src={ logo }  alt="" width="70px" height="70px" /></a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
              
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item" href="#top">
                      <Link className="nav-link active" to="/home">Inicio</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link active" exact='true' to="/login">Iniciar sesion</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link active" exact='true' to="/register">Registrarse</Link>
                  </li>
                  <li className='nav-item'> <a href="#" className="nav-link active">Acerca de</a> </li>
                  <li className='nav-item'> <a href="#contact" className="nav-link active">Contacto</a> </li>
              </ul>
          </div>
          </nav>
      </div>
    )
  }
  