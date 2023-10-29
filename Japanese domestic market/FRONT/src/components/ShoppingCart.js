import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios';
import Swal from 'sweetalert2';

export const ShoppingCart = () => {

    const {user} = useContext(UserContext);

    const userIdBuys = user.id; /* id del usuario que realiza la compra */

    const [shoppingCarts, setShoppingCarts] = useState([]);

    useEffect(() => { /* cdo le mostremos a la persona su carrito, traigo todos los autos q están añadidos a él */
        fetchMyShoppingCarts();
    }, []);

    const fetchMyShoppingCarts = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/shoppingcart/${userIdBuys}`);
            console.log('Info', response.data)
            setShoppingCarts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const onDeleteShoppingCart = async (shoppingcartId) => {
        console.log('shoppingcartId en ondelete', shoppingcartId)
        try {
            await axios.delete(`http://localhost:5000/shoppingcart/${shoppingcartId}`);
            Swal.fire({
                icon: 'success',
                title: 'Eliminado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            fetchMyShoppingCarts(); /* para que se actualice la lista de autos */
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='text-light'>
                <h2>Mi carrito</h2>
                <div className='row justify-content-center text-center'>
                        <div className='col-md-6'>
                                {shoppingCarts.length > 0 ? (
                                    <table className="table table-secondary table-hover">
                                            <thead>
                                                    <tr>
                                                            <th scope="col">Id auto</th>
                                                            <th scope="col">Marca</th>
                                                            <th scope="col">Modelo</th>
                                                            <th scope="col">Descripción</th>
                                                            <th scope="col">Precio</th>
                                                            <th></th>
                                                            {/* <th scope="col">Disponibilidad</th> */}
                                                    </tr>
                                            </thead>
                                                    <tbody>

                                                            {
                                                                    shoppingCarts.map(shoppingCart => (
                                                                            <tr key={shoppingCart.id}>
                                                                                    <td>{shoppingCart.id}</td>
                                                                                    <td>{shoppingCart.brand}</td>
                                                                                    <td>{shoppingCart.model}</td>
                                                                                    <td>{shoppingCart.description}</td>
                                                                                    <td>{shoppingCart.price}</td>
                                                                                    {/* <td>{shoppingCart.availability}</td> */}
                                                                                    <td> 
                                                                                            <button type="button" className="btn btn-danger"  onClick={() => onDeleteShoppingCart(shoppingCart.id)}>Quitar solicitud de compra</button>
                                                                                    </td>
                                                                            </tr>
                                                                    ))
                                                            }                                         
                                                    </tbody>
                                            </table>
                                ) : (
                                    <p>No hay autos en el carrito</p>
                                )}
                        </div>
                </div>
        </div>
    )
}
