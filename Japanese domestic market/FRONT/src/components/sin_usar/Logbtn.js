import React from 'react';
import  { Login } from '../Login';

function Logbtn() {
  return (
    <div>
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar Sesión</button>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Iniciar Sesión</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Login />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              {/* <button type="button" className="btn btn-primary">Enviar</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logbtn