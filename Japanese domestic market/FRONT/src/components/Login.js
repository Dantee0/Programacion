import React, { useContext } from 'react'
import './login.css'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../context/UserContext';


export const Login = () => {

  const navigate = useNavigate();

  const initialValues = {
    username:'',
    password:''
  }

  const { setUser } = useContext(UserContext);

  const handleLogin = async(values) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values)
      console.log(response.data)
      const { role, idUser } = response.data /* recibo valores role y id del back */
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesion correcto',
        showConfirmButton: false,
        timer: 1800
      })
      setUser({
        logged: true,
        role: role,
        id: idUser
      })
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="container">
        <input type="checkbox" id="signup_toggle" />
      <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      >
        <Form className="form">
            <div className="form_front">
                <div className="form_details">Sign In</div>
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
                  <button className="btn" type='submit' onClick={handleLogin}>Sign In</button>
                  <span className="switch"> 
                  <Link className="nav-link active" exact='true' to="/register">Registrarse</Link>
                  </span>
            </div>
        </Form>
      </Formik>
    </div>
    </div>
  )
}
