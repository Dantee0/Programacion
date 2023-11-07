import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export const AddCar = () => {

    const navigate = useNavigate();

    const initialValues = {
        brand: '',
        model: '',
        description: '',
        price:'',
        availability: true,
    }

    const handleSubmit = async( values) => {
        
        try {
            const response = await axios.post('http://localhost:5000/cars', values)
            console.log(response.data)
            Swal.fire({
                icon: 'success',
                title: 'Agregado correctamente',
                showConfirmButton: false,
                timer: 1800
            })
            navigate('/market')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{ padding: '100px 0px' }}>
            <div className='row justify-content-center'> 
            <div className='col-md-6'>
            <h1 className='text-center text-light'>Añadir auto</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form> 
                    <div className="form-floating m-2">
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingName" 
                        placeholder="Toyota" 
                        name='brand'
                        />
                        <label htmlFor="floatingName">Marca del auto</label>
                    </div>
                    <div className="form-floating m-2">
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingName" 
                        placeholder="Toyota Supra" 
                        name='model'
                        />
                        <label htmlFor="floatingName">Modelo del auto</label>
                    </div>
                    <div className="form-floating m-2">
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="MK4 Rojo"
                        name='description'
                        />
                        <label htmlFor="floatingInput">Descripción del auto</label>
                    </div>
                    <div className="form-floating m-2">
                        <Field 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="USD 160.000"
                        name='price'
                        />
                        <label htmlFor="floatingInput">Precio del auto</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Añadir auto</button>
                </Form>
            </Formik>
            </div>
        </div> 
    </div>
  )
}
