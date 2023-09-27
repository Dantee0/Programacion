import React from 'react'
import './login.css'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const { user,setUser } = useContext(UserContext); /*es la linea mas importante */
    
  const navigate = useNavigate();

  const initialValues = {
    fullname: '',
    email: '',
    username: '',
    password: ''
  }

  const handleForm = async(values) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', values)
      console.log(response.data)
      const { role } = response.data /* es para guardar el role */
      console.log('role', role) /* ve si vino el role o no */
      navigate('/home')
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
      onSubmit={handleForm}
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

                {/* <Field 
                placeholder="Confirm Password" 
                className="input" 
                type="password" 
                name="confirm_password"
                /> */}

                <button className="btn" type='submit' onClick={handleForm}>Sign Up</button>
            </div>
        </Form>
      </Formik>
    </div>
    </div>
  )
}