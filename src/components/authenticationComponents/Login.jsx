import React from 'react'
import  '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import { Link,useNavigate } from 'react-router-dom'
import {  useFormik } from 'formik'
import * as Yup from 'yup'


export default function Login() {
    const navigate = useNavigate();
    let validationLoginSchema=Yup.object({
        email : Yup.string()
        .required('Email is required')
        .email('Enter a valid email address'),
        password :Yup.string()
        .required('Password is required')
        .min(2, 'Password must be at least 2 characters')
        .max(15, 'Password must be at most 8 characters'),
    })
    
    function loginSubmit(values) {
        fetch('http://localhost:5000/api/v1/users/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then(response => response.json())
          .then(() => {
            // Handle the API response data
                    
              console.log('Login successful');
              navigate('/');
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
          });
      }

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationLoginSchema,
        onSubmit: loginSubmit,
      });

    return (
        <div>
        <section className='login'>
            <div className='exam'>
                <img src={Exam} className="w-25" alt=''/>  
            </div>
            <div className="container">
                <form onSubmit={formik.handleSubmit } className="form bg-light rounded-5 px-5 py-4">
                    <div className='formLogo'>
                        <img src={Logo} className="w-100" alt=''/>  
                    </div>
                    <div className='formHeader text-center mb-3'>
                        <h1>Login</h1>
                    </div>
                    <div className='row'>                        
                        <div className='email my-2'>
                            <label htmlFor="email" class="form-label">Email</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" class="form-control rounded-5" id="email" placeholder=""/>
                            {formik.errors.email && formik.touched.email && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div>)}
                        </div>
                        <div className='password my-2'>
                            <label htmlFor="password" class="form-label">Password</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" class="form-control rounded-5" id="password" placeholder=""/> 
                            {formik.errors.password && formik.touched.password && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>)}
                        </div>
                    </div>
                    <div className='my-2 haventAccount'>
                        <span>You don't have an account? <Link className='text-dark' to={"/register"}>Sign up</Link></span>
                    </div>
                    <div  className='formBtn'>
                        <button  disabled={!(formik.isValid && formik.dirty)} type="submit" className='btn rounded-5 col-12 text-white'>Login</button>
                    </div>
                </form>           
            </div>
        </section>
    </div>
    )
}
