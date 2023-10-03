import React, { useContext } from 'react'
import './login.css'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../context/UserContext';

export const Register = () => {
  
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const initialValues = {
    fullname: '',
    email: '',
    username: '',
    password: ''
  }

  const handleRegister = async(values) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', values)
      console.log(response.data)
      const { role } = response.data
      console.log('role', role)
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1800
      })
      setUser({
        logged: true,
        role: role
      })
      navigate('/market')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="container">
        <input type="checkbox" id="signup_toggle"  />
      <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      >
        <Form className="form">
            <div className="form_front">
                <div className="form_details">Sign Up</div>
                <Field 
                placeholder="Fullname" 
                className="input" 
                type="text" 
                name="fullname"
                />

                <Field 
                placeholder="text@example.com" 
                className="input" 
                type="text" 
                name="email"
                />

                <Field 
                placeholder="Username" 
                className="input" 
                type="text" 
                name="username"
                />

                <Field 
                placeholder="Password" 
                className="input" 
                type="password" 
                name="password"
                />

                <button className="btn" type='submit' onClick={handleRegister}>Sign Up</button>
            </div>
        </Form>
      </Formik>
    </div>
    </div>
  )
}