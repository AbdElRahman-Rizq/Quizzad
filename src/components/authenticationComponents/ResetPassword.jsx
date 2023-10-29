import React from 'react'
import  '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import { Link,useNavigate } from 'react-router-dom'
import {  useFormik } from 'formik'
import * as Yup from 'yup'


export default function ResetPassword() {
    const navigate = useNavigate();
    let validationLoginSchema=Yup.object({
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
        <section className='reset-password'>
            <div className='exam'>
                <img src={Exam} className="" alt=''/>  
            </div>
            <div className="container">
                <form onSubmit={formik.handleSubmit } className="form bg-light rounded-5 px-5 py-4">
                    <div className='formLogo'>
                        <img src={Logo} className="w-100" alt=''/>  
                    </div>
                    <div className='formHeader text-center pt-3 mb-3'>
                        <h1>Reset Password</h1>
                    </div>
                    <div className='row'>                        
                        <div className='password my-2'>
                            <label htmlFor="password" className="form-label">New password</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control rounded-5" id="password" placeholder=""/> 
                            {formik.errors.password && formik.touched.password && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>)}
                        </div>
                        <div className='Repassword my-2'>
                            <label htmlFor="Repassword" className="form-label">Confirm Password</label>
                            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Repassword} type="password" className="form-control rounded-5" id="Repassword" placeholder=""/> 
                            {formik.errors.password && formik.touched.password && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>)}
                        </div>
                    </div>
                    <div className='my-2 haventAccount'>
                        <span>you don't receive password.! <Link className='text-dark' to={'/dd'}>send again.</Link></span>
                    </div>
                    <div  className='formBtn col-4 text-center m-auto mt-3 rounded-4 '>
                            <button type="submit"  className='btn w-100 py-2 text-white fs-bold'>Reset Password </button>
                    </div>
                </form>           
            </div>
        </section>
    </div>
    )
}
