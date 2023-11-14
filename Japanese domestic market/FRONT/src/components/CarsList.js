import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const CarsList = () => {

    const { user } = useContext(UserContext); //usercontext contiene el rol, puedo acceder a todos los componentes que tiene user

    const [cars, setCars] = useState([]); //useState es un hook, cars es el estado, setCars es la funcion que modifica el estado

    const [editedCar, setEditedCar] = useState({id: 0, model: '', brand: '', description: '', price: 0, availability: ''})

    const navigate = useNavigate();

    useEffect(() => { //este hook renderiza cosas, su funcionalidad es dar vida al componente, useEffect sirve para conectarnos con el exterior, se activa cdo abrimos/se renderiza/se carga el componente
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
    const onDeleteCar = async (carId) => { /* necesita recibir el id pq no trabaja con hook */
        try {
            await axios.delete(`http://localhost:5000/car/${carId}`);
            fetchCar(); /* refresca */
        } catch (error) {
            console.error(error);
        }
    }


    // Editar auto

    //carga los valores del auto en el formulario modal
    const onEditCar = (car) => {
        setEditedCar(car);
    }

    //actualiza los valores modificados del auto, el parametro e es del evento
    const handleInputChange = (e) => {
        const { name, value } = e.target; /* 'name' y 'value' son las propiedades del objeto 'e.target' que nos interesan */
        const isTrueSet = value === 'true'; /* 'isTrueSet' y 'isFalseSet' son variables que nos ayudarán a determinar si el nuevo valor es una cadena de texto que representa un booleano */
        const isFalseSet = value === 'false';
    
        setEditedCar((prevState) => ({ /* toma el estado anterior y devuelve un estado nuevo */
          ...prevState, /* el nuevo estado se crea haciendo una copia del estado anterior */
          
            // A continuación, actualizamos la propiedad 'name' con el nuevo valor. 
            // Si 'isTrueSet' o 'isFalseSet' son verdaderos, significa que el nuevo valor es una cadena de texto que representa un booleano, 
            // por lo que lo convertimos en un booleano real usando 'value === 'true''

          [name]: isTrueSet || isFalseSet ? value === 'true' : value, 
        }));
    };

    //envia al back los valores modificados del auto
    const handleUpdateCar = async () => {
        // console.log('values',editedCar)
        try {
            await axios.put(`http://localhost:5000/car/${editedCar.id}`, editedCar); /* pasa por parametro el id del auto q se editó, la variable se está llenando a través del hook, guarda todos los atributos apesar de q se haya editado uno solo */
            fetchCar(); /* refresca y vuelve a listar, se pide q vuelva a listar pq se cambiaron valores */
            setEditedCar({id: 0, model: '', brand: '', description: '', price: 0, availability: ''}); /* "limpia" la lista para ir almacenando los nuevos cambios, si no pongo un valor del modelo trae el valor viejo */
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
                           // la funcion map trae los valores de la base de datos
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
                                           // admin puede editar(cambia los valores con el hook al hacer click en el boton editar) y eliminar
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
                                            onChange={handleInputChange} /* es evento de edicion de js, onChange llama a la funcion handle input change */
                                            value={editedCar.brand} /* es el valor q estaba en la tabla */
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
                                        <select defaultValue={true}
                                            // type='text' 
                                            name='availability' 
                                            className='form-control' 
                                            // placeholder='Disponibilidad' 
                                            onChange={handleInputChange} 
                                            value={editedCar.availability.toString()} /* es una cadena de texto que representa un booleano*/
                                            >
                                                <option value={true}>Disponible</option>
                                                <option value={false}>Vendido</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* al seleccionar el boton, se envian los datos al endpoint a través de la funcion de handleUpdateCar */}
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
