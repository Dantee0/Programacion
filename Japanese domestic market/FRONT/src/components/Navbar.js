import React from "react";
import { Link } from 'react-router-dom';
import logo from '../img/whitelogo.png';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {

    const { user,setUser } = useContext(UserContext);

    const handleLogOut = () => {
        setUser({
            logged: false,
            role: ''
        })
        console.log('salir')
    }

    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light" data-bs-theme="dark">
              <Link className="navbar-braknd" to="/home" > <img src={ logo }  alt="" width="70px" height="70px" /></Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
              
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
                // administrador
                user.role === '1' ? (
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <Link className="nav-item" exact='true' to="/myPosts">Publicaciones</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active" exact='true' to="/addCar">Añadir Auto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" exact='true' to="/market">Mercado</Link>
                        </li>
                        <li className="nav-item" href="#top">
                            <Link className="nav-link active" to="/" onClick={handleLogOut}>Salir</Link>
                        </li>
                    </ul>
                    // usuario
                ) : user.role === '2' ? (
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" exact='true' to="/publications">Mis publicaciones</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active" exact='true' to="/market">Mercado</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" exact='true' to="/addCar">Añadir Auto</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active" exact='true' to="/myPosts">Mis publicaciones</Link>
                        </li>
                        <li className="nav-item" href="#top">
                            <Link className="nav-link active" to="/" onClick={handleLogOut}>Salir</Link>
                        </li>
                    </ul>
                    // visitante
                ) : (
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item" href="#top">
                        <Link className="nav-link active" to="/home">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" exact='true' to="/login">Iniciar Sesión</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" exact='true' to="/register">Registrarse</Link>
                    </li>
                    <li className='nav-item'> <a href="#" className="nav-link active">Acerca de</a> </li>
                    <li className='nav-item'> <a href="#contact" className="nav-link active">Contacto</a> </li>
                </ul>
                )
            }
          </div>
          </nav>
      </div>
    )
  }
  