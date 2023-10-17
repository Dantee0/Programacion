import React from 'react';
import Logbtn from './Logbtn';

function Navbar2() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#!">JDM Zone</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenidos a JDM Zone</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#!">Inicio</a>
                </li>
                <li className="nav-item">
                    <Logbtn />
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Acerca de
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#!">Acerca de nosotros</a></li>
                    <li><a className="dropdown-item" href="#!">Acerca del proyecto</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    {/* <li><a className="dropdown-item" href="#!">Something else here</a></li> */}
                    </ul>
                </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar2;