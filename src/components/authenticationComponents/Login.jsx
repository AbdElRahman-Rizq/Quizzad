import  '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import { Link,useNavigate } from 'react-router-dom'
import {  useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie';


export default function Login() {
    const navigate = useNavigate();
    const [error , seterror]=useState(null)   
    // Token
// Validation
    let validationLoginSchema=Yup.object({
        email : Yup.string()
        .required('Email is required')
        .email('Enter a valid email address'),
        // password :Yup.string()
        // .required('Password is required')
        // .min(8, 'Password must be at least 2 characters')
        // .max(15, 'Password must be at most 8 characters'),
    })

//     async function loginSubmit(values) {      
//         // axios.defaults.withCredentials = true; 
//         const response = await axios.post('http://localhost:5000/api/v1/auth/login', values)
//         .catch((err) => {
//             seterror(err.response.data.message);
//         console.log(err.response.data.message);
//         });
//         if (response.data.message === 'Login done successfully') {
//             console.log(response.data);
//             console.log('Successful');
//             const token = Cookies.get('token');
// console.log(token);
//             navigate('/admin');
//         } else {
//             console.log('Not successfull');
//         }
//         console.log(data); 
//     }
async function loginSubmit(values) {      
    try {
        const response = await axios.post('http://localhost:5000/api/v1/auth/login', values);
    
        if (response.data.message === 'Login done successfully') {
            console.log(response.data);

            const jwtToken = response.data.user.token; // Assuming the token is returned in the response
            Cookies.set('jwt', jwtToken, { expires: 7 }); // Set the actual token from the response

            navigate('/admin');
        } else {
            console.log('Not successful');
            seterror('Login failed. Please check your credentials.');
        }
        } catch (error) {
        console.error('Error during login:', error);
        seterror('An unexpected error occurred during login.');
    }   
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
                <img src={Exam} className="" alt=''/>  
            </div>
            <div className="container">
                <form onSubmit={formik.handleSubmit } className="form bg-light rounded-5 px-5 py-4">
                    <div className='formLogo'>
                        <img src={Logo} className="w-100" alt=''/>  
                    </div>
                    <div className='formHeader text-center  pt-3'>
                    {error && <div className="alert alert-danger">
                        {error}
                    </div>}
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
                        <span>You do not have an account? <Link className='text-dark' to={"/register"}>Sign up</Link></span>
                        <span><Link className='text-dark' to={"/forgetpassword"}>Forget your password </Link></span>
                    </div>
                    <div  className='formBtn col-4 text-center m-auto mt-3 rounded-4 '>
                            <button type="submit"  className='btn w-100 py-2 text-white fs-bold'>Login</button>
                    </div>
                </form>           
            </div>
        </section>
    </div>
    )
}
