import  '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import {useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios' 
import { useState } from 'react'



export default function Register() {
    let navigate =useNavigate()
    const [error] = useState(null)
    const [isloading, setisloading] = useState(false)

    async function registerSubmit(values){
        setisloading(true),
        console.log(values);
        let responde = await axios.post(`http://localhost:5000/api/v1/users/` , values)

        .catch((err)=>{
            setisloading(false),
            // seterror(err.response.data.message);
            console.log(err);
        })

        if(data.message === 'success'){
            setisloading(true),
            navigate('/login')
        }
        console.log(responde.data);
    }


    //yup
    let validateSchema = Yup.object({
        firstName: Yup.string()
        .required('First Name is required')
        .min(3, 'First Name must be at least 3 characters')
        .max(10, 'First Name must be at most 10 characters')
        ,

        lastName: Yup.string()
        .required('Last Name is required')
        .min(3, 'Last Name must be at least 3 characters')
        .max(10, 'Last Name must be at most 10 characters')
        ,
        gender : Yup.string()
        .required()
        .test('is-uppercase', 'First Name must be in uppercase', function(value) {
            if (value) {
            return value === value.toUpperCase();
            }
            return true; 
        }),
        
        birthdate : Yup.string().required(),

        grade : Yup.string().required()
        .test('is-uppercase', 'First Name must be in uppercase', function(value) {
            if (value) {
            return value === value.toUpperCase();
            }
            return true; 
        }),

        role : Yup.string()
        .required()
        .test('is-uppercase', 'First Name must be in uppercase', function(value) {
            if (value) {
            return value === value.toUpperCase();
            }
            return true; 
        }),

        Specialization : Yup.string()
        .required()
        .test('is-uppercase', 'First Name must be in uppercase', function(value) {
            if (value) {
            return value === value.toUpperCase();
            }
            return true; 
        }),


        phoneNumber : Yup.string()
        .required('Phone Number is required')
        .matches(/^(010|011|015|012)[0-9]{8}$/, 'Enter a valid Egyptian phone number'),

        email : Yup.string()
        .required('Email is required')
        .email('Enter a valid email address'),

        password: Yup.string()
        .required('Password is required')
        // .matches(/^[A-Z][a-z0-9]{5,20}$/, "Password is invalid")
        // .min(8, 'Password must be at least 8 characters')
        // .max(20, 'Password must be at most 20 characters'),


        // repassword : Yup.string().oneOf([Yup.ref("password")] , " password ande repassword donot match") .required("repassword is required"),
    })

    //Formik
    let formik = useFormik({
        initialValues:{
            firstName : "",
            lastName : "",
            gender:"",
            birthdate:"",
            role:"",
            Specialization:"",
            grade:"",
            phoneNumber :"",
            email:"",
            password:"",
        },
        onSubmit:registerSubmit ,
        validationSchema : validateSchema        
    });

    return (
        <div className=''>
            <section className='register'>
                <div className='exam '>
                    <img  src={Exam} className="" alt=''/>  
                </div>
                <div className="container">
                    <form onSubmit={formik.handleSubmit } className=" form bg-light rounded-5 px-5 py-4">
                        <div className='formLogo'>
                            <img src={Logo} width={"100%"} alt=''/>  
                        </div>
                        <div className='formHeader text-center pt-3'>

                            {error !== null ?<div className="alert alert-danger">{error}</div> : ""}
                            
                            <h1>Sign up Your Account</h1>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className='firstName py-2'>
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} type="text" className="form-control rounded-5 " id="firstName" name="firstName"/>
                                    {formik.errors.firstName && formik.touched.firstName && (<p className=' mt-2 p-2 text-danger'>{formik.errors.firstName}</p>)}               
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='lastName py-2'>
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} type="text" className="form-control rounded-5" id="lastName" name="lastName"/>
                                    {formik.errors.lastName && formik.touched.lastName &&(<p className=' mt-2 p-2 text-danger'>{formik.errors.lastName}</p>)}                        
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='gender py-2'>
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className="form-select rounded-5" name="gender" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.gender}>
                                        <option value="0">Select your gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                    {formik.errors.gender && formik.touched.gender &&(<p className=' mt-2 p-2 text-danger'>{formik.errors.gender}</p>)}                        

                                </div>    
                            </div>

                            <div className="col-md-6">
                                <div className='birthdate py-2'>
                                    <label htmlFor="birthdate" className="form-label">Birthdate</label>
                                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.birthdate} type="date" className="form-control rounded-5" id="birthdate" name="birthdate"/>
                                    {formik.errors.birthdate && formik.touched.birthdate &&(<p className=' mt-2 p-2 text-danger'>{formik.errors.birthdate}</p>)}                        
                                </div>
                            </div>

                            <div className="col-md-6">
                                    <div className="role py-2">
                                <label htmlFor="role" className="form-label"> Role </label>
                                <select onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.role}className="form-select rounded-5"name="role" >
                                    <option value="0">Select your role</option>
                                    <option value="1">Teacher</option>
                                    <option value="2">Student</option>
                                </select>
                                {formik.errors.role && formik.touched.role &&(<p className=' mt-2 p-2 text-danger'>{formik.errors.role}</p>)}                        
                            </div>
                        </div>

                        {formik.values.role === '1' ? ( 
                            <div className="col-md-6">
                                <div className="Specialization py-2">
                                    <label htmlFor="Specialization" className="form-label w-100">Specialization</label>
                                    <select className="form-select rounded-5" name="Specialization"onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.Specialization}>
                                        <option value="0">Select your Specialization</option>
                                        <option value="1">Science</option>
                                        <option value="2">Arabic</option>
                                        <option value="3">Math</option>
                                    </select>
                                    {formik.errors.Specialization && formik.touched.Specialization &&(<p className=' mt-2 p-2 text-danger'>{formik.errors.Specialization}</p>)}                        
                                </div>
                            </div>
                            ) : (
                            <div className="col-md-6">
                                <div className="grade py-2">
                                    <label htmlFor="grade" className="form-label w-100">Grade Level</label>
                                    <select className="form-select rounded-5" name="grade" onBlur={formik.handleBlur} onChange={formik.handleChange}value={formik.values.grade}>
                                        <option value="0">Select your grade</option>
                                        <option value="1">Grade 1</option>
                                        <option value="2">Grade 2</option>
                                        <option value="3">Grade 3</option>
                                        <option value="4">Grade 4</option>
                                        <option value="5">Grade 5</option>
                                        <option value="6">Grade 6</option>
                                        <option value="7">Grade 7</option>
                                        <option value="8">Grade 8</option>
                                        <option value="9">Grade 9</option>
                                        <option value="9">Grade 9</option>
                                        <option value="9">Grade 9</option>
                                    </select>
                                    {formik.errors.grade && formik.touched.grade &&(<p className=' mt-2 p-2 text-danger'>{formik.errors.grade}</p>)}                        
                                </div>
                            </div>
                        )}

                            <div className='phoneNumber py-2'>
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phoneNumber} type="tel" className="form-control rounded-5" id="phoneNumber" name="phoneNumber"/> 
                                {formik.errors.phoneNumber && formik.touched.phoneNumber && (<p className='mt-2 p-2 text-danger'>{formik.errors.phoneNumber}</p>)}
                            </div>
                            <div className='email py-2'>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control rounded-5" id="email" name="email" />
                                {formik.errors.email && formik.touched.email && (<p className='mt-2 p-2 text-danger'>{formik.errors.email}</p>)}
                            </div>
                            <div className='password py-2'>
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control rounded-5" id="password" name="password"/> 
                                {formik.errors.password && formik.touched.password && (<p className='mt-2 p-2 text-danger'>{formik.errors.password}</p>)}
                            </div>
                        </div>
                        <div className='py-2 haveAccount'>
                            <span>You have an account? <Link to={'/Login'} className='text-dark'>Sign in</Link></span>
                        </div>
                        <div  className='formBtn col-4 text-center m-auto mt-3 rounded-4 d-flex'>

                            {isloading
                            ?
                            <button type="button" className='btn  text-white'>  <i className='fas fa-spinner fa-spin'></i></button> 
                            :
                            <button disabled={!formik.isValid && formik.dirty} type="submit" className='btn w-100 py-2 text-white fs-bold'>Sign Up</button>
                            }
                            
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
