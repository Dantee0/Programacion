import React from 'react'
import './login.css'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const initialValues = {
    email:'',
    password:''
  }

  const handleForm = async(values) => {
    // console.log('values:', values)
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values)
      console.log(response.data)
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
      onSubmit={handleForm}
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
                  <button className="btn" type='submit' onClick={handleForm}>Sign In</button>
                  <span className="switch">
                  <Link className="nav-link active" exact='true' to="/register">Registrarse</Link>
                  </span>
                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            </div>
            {/* <div className="form_back">
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

                <Field 
                placeholder="Confirm Password" 
                className="input" 
                type="password" 
                name="confirm_password"
                />

                <button className="btn" type='submit' onClick={handleForm}>Sign Up</button>
                <span className="switch">Already have an account? 
                    <label className="signup_tog" for="signup_toggle">
                        Sign In
                    </label>
                </span>
            </div> */}
        </Form>
      </Formik>
    </div>
    </div>
  )
}


// import { Field, Form, Formik } from 'formik';
// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   return (
//     <div>
//        <section className="vh-100" style={{backgroundColor: "#508bfc"}}>
//         <div className="container py-5 h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//                 <div className="card shadow-2-strong" style= {{borderRadius: "1rem"}}>
//                 <div className="card-body p-5 text-center">

//                     <h3 className="mb-5">Sign in</h3>

//                     <div className="form-outline mb-4">
//                     <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
//                     <label className="form-label" for="typeEmailX-2">Email</label>
//                     </div>

//                     <div className="form-outline mb-4">
//                     <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
//                     <label className="form-label" for="typePasswordX-2">Password</label>
//                     </div>

//                     <div className="form-check d-flex justify-content-start mb-4">
//                     <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
//                     <label className="form-check-label" for="form1Example3"> Remember password </label>
//                     </div>

//                     <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

//                     <hr className="my-4" />

//                     <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}}
//                     type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
//                     <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}}
//                     type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//     </div>
//   )
// }

// function Login() {

//   const navigate = useNavigate();

//   const initialValues = {
//     email: "",
//     password: ""
//   }

//   const handleForm = async(values) => {
//     // console.log("values:", values)
//     try { 
//       const response = await axios.post('http://127.0.0.1:5000/login', values) 
//       console.log(response.data) 
//       navigate('/login')
//     } catch (error) { 
//       console.log(error)
//     }
//   }

//   return (
//     <div>
//       <h1 className="text-dark">Iniciar sesión</h1>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleForm}
//       >
//         <Form>
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
//             <Field 
//               type="email" 
//               className="form-control" 
//               id="exampleInputEmail1" 
//               aria-describedby="emailHelp" 
//               placeholder='Correo electrónico'
//               name="email"
//             />
//             {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">Contraseña</label>
//             <Field 
//               type="password" 
//               className="form-control" 
//               id="exampleInputPassword1" 
//               placeholder='Contraseña' 
//               name="password"
//             />
//           </div>
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//             <label className="form-check-label" for="exampleCheck1">Recordarme</label>
//           </div>
//           <button type="submit" className="btn btn-primary" onClick={handleForm}>Enviar</button>
//         </Form>
//       </Formik>
//       </div>
//   )
// }

// export default Login;

// import { Field, Form, Formik } from 'formik'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';

// export const Login = () => {

//   const navigate = useNavigate();


//   const initialValues = {
//     email:'',
//     password:''
//   }

//   const handleForm = async(values) => {
//     // console.log('values:', values)
//     try {
//       const response = await axios.post('http://localhost:5000/login', values)
//       console.log(response.data)
//       navigate('/')
//     } catch (error) {
//       console.log(error)
//     }
//   }
  

//   return (
//     <div>
//       <div className='row justify-content-center'> 
//         <div className='col-md-6'>
//         {/* <h1>Inicio de sesion</h1> */}
//         <Formik
//           initialValues={initialValues}
//           onSubmit={handleForm}
//         >
//           <Form> 
//                 <div className="form-floating">
//                   <Field 
//                     type="email" 
//                     className="form-control" 
//                     id="floatingInput" 
//                     placeholder="name@example.com"
//                     name='email'
//                   />
//                   <label htmlFor="floatingInput">Email address</label>
//                 </div>
//                 <div className="form-floating">
//                   <Field 
//                     type="password" 
//                     className="form-control" 
//                     id="floatingPassword" 
//                     placeholder="Password" 
//                     name='password'
//                   />
//                   <label htmlFor="floatingPassword">Password</label>
//                 </div>

//                 <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleForm}>Sign in</button>
//           </Form>
//         </Formik>
//       </div>
//     </div> 
//     </div>
//   )
// }
