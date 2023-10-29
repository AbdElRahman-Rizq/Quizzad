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
        .min(8, 'Password must be at least 2 characters')
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
        <section className='login pt-5'>
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
                            <label htmlFor="email" className="form-label">Email</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control rounded-5" id="email" placeholder=""/>
                            {formik.errors.email && formik.touched.email && (<p className=' mt-2 p-2 text-danger'>{formik.errors.email}</p>)}
                        </div>
                        <div className='password my-2'>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control rounded-5" id="password" placeholder=""/> 
                            {formik.errors.password && formik.touched.password && (<p className=' mt-2 p-2 text-danger'>{formik.errors.password}</p>)}
                        </div>
                    </div>
                    <div className='my-2 haventAccount d-flex justify-content-between'>
                        <span>You don't have an account? <Link className='text-dark' to={"/register"}>Sign up</Link></span>
                        <span><Link className='text-dark' to={"/forgetpassword"}>Forget your password </Link></span>
                    </div>
                    <div  className='formBtn col-4 text-center m-auto mt-3 rounded-4 '>
                            <button type="submit"  className='btn w-100 py-2 text-white fs-bold'>Sunbmit</button>
                    </div>
                </form>           
            </div>
        </section>
    </div>
    )
}
