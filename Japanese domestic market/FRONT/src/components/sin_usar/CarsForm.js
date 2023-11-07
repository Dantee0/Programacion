import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CarsForm = () => {

    const navigate = useNavigate();

    const initialValues = {
        selectBrand: '', 
        selectModel: ''}
    
    const handleForm = async(values) => {
        try {
            const response = await axios.post('http://localhost:5000/carsform', values)
            console.log(response.data)
            navigate('/carsform')
          } catch (error) {
            console.log(error)
          }
    }
    
  return (
    <div>
        <div>
            <h1 className="text-dark">Seleccione el auto que desea</h1>
        </div>
        <Formik
        initialValues={initialValues}
        onSubmit={handleForm}
        >
            <Form >
                <Field name="selectBrand" as="select">
                    <option selected>Seleccione la marca...</option>
                    <option value="1">Nissan</option>
                    <option value="2">Toyota</option>
                    <option value="3">Mazda</option>
                    <option value="4">Mitsubishi</option>
                    <option value="5">Subaru</option>
                </Field>

                <Field name="selectModel" as="select">
                    <option selected>Seleccione el modelo...</option>
                    <option value="1">Nissan Skyline GT-R R34</option>
                    <option value="2">Toyota Supra</option>
                    <option value="3">Mazda RX-5</option>
                    <option value="4">Mitsubishi Lanver EVO</option>
                    <option value="5">Subaru Impreza WRX STI</option>
                </Field>
            </Form>
        </Formik>
        <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">

            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary" onSubmit={handleForm}>Enviar</button>
            </div>
        </form>
    </div>
  )
}