import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const CarsList = () => {

    const { user } = useContext(UserContext); //usercontext contiene el rol, puedo acceder a todos los componentes que tiene user

    const [cars, setCars] = useState([]); //useState es un hook, cars es el estado, setCars es la funcion que modifica el estado

    const [editedCar, setEditedCar] = useState({id: 0, model: '', brand: '', description: '', price: 0, availability: true})

    const navigate = useNavigate();

    useEffect(() => { //este hook renderiza cosas, da vida al componente, useEffect sirve para conectarnos con el exterior, se activa cdo abrimos/se renderiza/se carga el componente
        fetchCar(); //este hook llama al fetch car
      }, []);

      
    const fetchCar = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cars'); //llamamos a la api para traer los datos
            console.log(response)
            setCars(response.data); //carga los datos en setcars
        } catch (error) {
            console.error(error);
        }
    };

    //Comprar auto
    const onAddCar = async (carId) => {
        
        const values = { //segun el modelo que tengo, necesito estos valores
            userId: user.id,
            carId: carId
        }

        try {
            const response = await axios.post('http://localhost:5000/shoppingcarts', values) //post envia la informacion de values(guarda en DB)
            console.log(response.data)
            Swal.fire({
                icon: 'success',
                title: 'Solicitud de compra realizada con éxito',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('/market')
        } catch (error) {
            console.log(error);
        }
    };
    
    // Eliminar auto
    const onDeleteCar = async (carId) => {
        try {
            await axios.delete(`http://localhost:5000/car/${carId}`);
            fetchCar();
        } catch (error) {
            console.error(error);
        }
    }


    // Editar auto

    //carga los valores del auto en el formulario modal
    const onEditCar = (car) => {
        setEditedCar(car);
    }

    //actualiza los valores modificados del auto
    const handleInputChange = (e) => {
        console.log('valor de e.target.name', e.target.name)
        console.log('valor de e.target.value', e.target.value)
        setEditedCar({ ...editedCar, [e.target.name]: e.target.value});
    };

    //envia al back los valores modificados del auto
    const handleUpdateCar = async () => {
        try {
            await axios.put(`http://localhost:5000/car/${editedCar.id}`, editedCar);
            fetchCar();
            setEditedCar({id: 0, model: '', brand: '', description: '', price: 0, availability: true});
            Swal.fire({
                icon: 'success',
                title: 'Editado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('/market')
        } catch (error) {
            console.error(error);
        }
    }

return (
    <div>
        <div className='row justify-content-center text-center'>
            <div className='col-md-6'>
                <table className="table table-secondary table-hover">
                        <thead>
                           <tr>
                               <th scope="col">Marca</th>
                               <th scope="col">Modelo</th>
                               <th scope="col">Descripción</th>
                               <th scope="col">Precio</th>
                               <th scope="col">Disponibilidad</th>
                               <th scope="col"></th>
                            </tr>
                        </thead>
                       <tbody>
                           {
                               cars.map(car => (
                                   <tr key={car.id}>
                                       <td>{car.brand}</td>
                                       <td>{car.model}</td>
                                       <td>{car.description}</td>
                                       <td>{car.price}</td>
                                       <td>{car.availability === true ? 'Disponible' : 'Vendido'}</td>
                                       {
                                           // usuario comun solo puede comprar?
                                           user.role === '2' ? ( //puedo acceder al rol ya que está aclarado en App.js los valores a los que pueden acceder todas las rutas(role,id, etc)
                                               <div>
                                                   <td> 
                                                       <button type="button" className="btn btn-success" onClick={() => onAddCar(car.id)}> Comprar </button>
                                                   </td>
                                               </div>
                                           // admin puede editar y eliminar
                                           ):(
                                               <div>
                                                   <td> 
                                                       <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editCarModal" onClick={() => onEditCar(car)}> Editar </button>
                                                   </td>
                                                   <td> 
                                                       <button type="button" className="btn btn-danger" onClick={() => onDeleteCar(car.id)}> Eliminar </button>
                                                   </td>  
                                               </div>
                                           )
                                       }
                                   </tr>
                               ))
                           }  
                        </tbody>
                </table>
                {/* <nav aria-label="Page-navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item"><a class="page-link" href="#">2</a></li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav> */}
                <div className='modal fade' id='editCarModal' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h1 className='modal-title fs-5' id='exampleModalLabel'>Editar auto</h1>
                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                            </div>
                            <div className='modal-body'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <label>Marca</label><br></br>
                                        <input 
                                            type='text' 
                                            name='brand' 
                                            className='form-control' 
                                            placeholder='Marca' 
                                            onChange={handleInputChange} 
                                            value={editedCar.brand}
                                        />
                                    </div>
                                    <div className='col-md-2'></div>
                                    <div className='col-md-4'>
                                        <label>Modelo</label><br></br>
                                        <input 
                                            type='text' 
                                            name='model' 
                                            className='form-control' 
                                            placeholder='Modelo' 
                                            onChange={handleInputChange} 
                                            value={editedCar.model}
                                        />
                                    </div>
                                    <div className='col-md-2'></div>
                                    <div className='col-md-4'>
                                        <label>Descripción</label><br></br>
                                        <input 
                                            type='text' 
                                            name='description' 
                                            className='form-control' 
                                            placeholder='Descripción' 
                                            onChange={handleInputChange} 
                                            value={editedCar.description}
                                        />
                                    </div>
                                    <div className='col-md-2'></div>
                                    <div className='col-md-4'>
                                        <label>Precio</label><br></br>
                                        <input 
                                            type='text' 
                                            name='price' 
                                            className='form-control' 
                                            placeholder='Precio (USD)' 
                                            onChange={handleInputChange} 
                                            value={editedCar.price}
                                        />
                                    </div>
                                    <div className='col-md-2'></div>
                                    <div className='col-md-4'>
                                        <label>Disponibilidad</label><br></br>
                                        <input 
                                            type='text' 
                                            name='availability' 
                                            className='form-control' 
                                            placeholder='Disponibilidad' 
                                            onChange={handleInputChange} 
                                            value={editedCar.availability}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cancelar</button>
                                <button type='button' className='btn btn-success' data-bs-dismiss='modal' onClick={handleUpdateCar}>Guardar</button>
                            </div>
                        </div>
                        </div>
                </div>
               </div>
           </div>
        </div>
   )
}



// export const CarsList = () => {
//   return (
//     <div className='mb-50'>
//         <div className='container text-center'>
//             <div className='row align-items-center'>
//                 <div className="Honda-list-group col">
//                     <h2 className='large-text mb-5'>
//                         <a href='/honda-for-sale'>
//                             <strong>Honda Cars For Sale</strong>
//                             </a>
//                     </h2>
//                     <a href='/honda-civic-for-sale' className="list-group-item list-group-item-action">Honda Civic</a>
//                     <a href='/honda-nsx-for-sale' className="list-group-item list-group-item-action">Honda NSX</a>
//                     <a href='/honda-cr-x-for-sale' className="list-group-item list-group-item-action">Honda CR-X</a>
//                 </div>

//                 <div className="Mazda-list-group col">
//                     <h2 className='large-text mb-5'>
//                         <a href='/mazda-for-sale'>
//                             <strong>Mazda Cars For Sale</strong>
//                         </a>
//                     </h2>
//                     <a href='/mazda-eunos-roadster-for-sale' className="list-group-item list-group-item-action">Mazda Eunos Roadster</a>
//                     <a href='/mazda-cosmo-for-sale' className="list-group-item list-group-item-action">Mazda Cosmo</a>
//                     <a href='/mazda-rx-7-for-sale' className="list-group-item list-group-item-action">Mazda RX-7</a>
//                 </div>

//                 <div className="Mitsubishi-list-group col">
//                     <h2 className='large-text mb-5'>
//                         <a href='/mitsubishi-for-sale'>
//                             <strong>Mitsubishi Cars For Sale</strong>
//                         </a>
//                     </h2>
//                     <a href='/mitsubishi-lancer-for-sale' className="list-group-item list-group-item-action">Mitsubishi Lancer</a>
//                     <a href='/mitsubishi-gto-for-sale' className="list-group-item list-group-item-action">Mitsubishi GTO</a>
//                     <a href='/mitsubishi-galant-for-sale' className="list-group-item list-group-item-action">Mitsubishi Galant</a>
//                 </div>

//                 <div className="Nissan-list-group col">
//                     <h2 className='large-text mb-5'>
//                         <a href='/nissan-for-sale'>
//                             <strong>Nissan Cars For Sale</strong>
//                         </a>
//                     </h2>
//                     <a href='/nissan-silvia-for-sale' className="list-group-item list-group-item-action">Nissan Silvia</a>
//                     <a href='/nissan-skyline-for-sale' className="list-group-item list-group-item-action">Nissan Skyline</a>
//                     <a href='/nissan-180SX-for-sale' className="list-group-item list-group-item-action">Nissan 180SX</a>
//                 </div>

//                 <div className="Toyota-list-group col">
//                     <h2 className='large-text mb-5'>
//                         <a href='/toyota-for-sale'>
//                             <strong>Toyota Cars For Sale</strong>
//                         </a>
//                     </h2>
//                     <a href='/toyota-supra-for-sale' className="list-group-item list-group-item-action">Toyota Supra</a>
//                     <a href='/toyota-sprinter-trueno-for-sale' className="list-group-item list-group-item-action">Toyota Sprinter Trueno</a>
//                     <a href='/toyota-cresta-for-sale' className="list-group-item list-group-item-action">Toyota Cresta</a>
//                 </div>

//                 <div className="Subharu-list-group col">
//                     <h2 className='large-text mb-5'>
//                         <a href='/subaru-for-sale'>
//                             <strong>Subaru Cars For Sale</strong>
//                         </a>
//                     </h2>
//                     <a href='/subaru-impreza-for-sale' className="list-group-item list-group-item-action">Subaru Impreza</a>
//                     <a href='/subaru-legacy-for-sale' className="list-group-item list-group-item-action">Subaru Legacy</a>
//                     <a href='/subaru-vivio-bistro-for-sale' className="list-group-item list-group-item-action">Subaru Vivio Bistro</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// mazda cosmo 1968