import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export const CarsList = () => {

    const { user } = useContext(UserContext);

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCar();
      }, []);

      
    const fetchCar = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cars');
            console.log(response)
            setCars(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

return (
    <div>
        <div className='row justify-content-center text-center'>
            <div className='col-md-6'>
                <table className="table table-info table-hover">
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
                                       <td>{car.availability}</td>
                                       {
                                           // usuario comun solo puede comprar?
                                           user.role === '2' ? (
                                               <div>
                                                   <td> 
                                                       <button type="button" className="btn btn-success" > Comprar </button>
                                                   </td>
                                               </div>
                                           // admin puede editar y eliminar
                                           ):(
                                               <div>
                                                   <td> 
                                                       <button type="button" className="btn btn-warning"> Editar </button>
                                                   </td>
                                                   <td> 
                                                       <button type="button" className="btn btn-danger"> Eliminar </button>
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