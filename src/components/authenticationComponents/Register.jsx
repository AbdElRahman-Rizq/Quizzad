import  '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import {useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
// import axios from 'axios'



export default function Register() {

    let validateSchema = Yup.object({
        firstName : Yup.string().required('First Name is required')
        .min(2, 'First Name must be at least 2 characters')
        .max(10, 'First Name must be at most 10 characters'),
        lastName : Yup.string()
        .required('Last Name is required')
        .min(3, 'Last Name must be at least 3 characters')
        .max(10, 'Last Name must be at most 10 characters'),
        gender : Yup.string().required('Gender is required'),
        type : Yup.string().required('Gender is required'),
        // grade : Yup.required(),
        // birthdata : Yup.required(),
        phoneNumber : Yup.string()
        .required('Phone Number is required')
        .matches(/^(010|011|015|012)[0-9]{8}$/, 'Enter a valid Egyptian phone number'),
        email : Yup.string()
        .required('Email is required')
        .email('Enter a valid email address'),
        password :Yup.string()
        .required('First Name is required')
        .min(2, 'First Name must be at least 2 characters')
        .max(10, 'First Name must be at most 10 characters'),
        // repassword : Yup.string().oneOf([Yup.ref("password")] , password and repassword don't matched).required(),
    })

    function registerSubmit(values){
        console.log(values);
    }

    //Formik
    let formik = useFormik({
        initialValues:{
            firstName : "",
            lastName : "",
            gender:"",
            type:"",
            grade:"",
            birthdata:"",
            phoneNumber :"",
            email:"",
            password:"",
        },
        onSubmit:registerSubmit ,
        validationSchema : validateSchema        
    });

    return (
        <div className='Form'>
            <section className='register'>
                <div className='exam '>
                    <img  src={Exam} className="w-25" alt=''/>  
                </div>
                <div className="container">
                    <form onSubmit={formik.handleSubmit } className=" form  bg-light rounded-5 px-5 py-4">
                        <div className='formLogo'>
                            <img src={Logo} width={"100%"} alt=''/>  
                        </div>
                        <div className='formHeader text-center py-3'>
                            <h1>Sign up Your Account</h1>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className='firstName py-2'>
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} type="text" className="form-control rounded-5 " id="firstName" name="firstName"/>
                                    {formik.errors.firstName && formik.touched.firstName && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.firstName}</div>)}               
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className='lastName py-2'>
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} type="text" className="form-control rounded-5" id="lastName" name="lastName"/>
                                    {formik.errors.lastName && formik.touched.lastName &&(<div className='alert mt-2 p-2 alert-danger'>{formik.errors.lastName}</div>)}                        
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
                                </div>    
                            </div>

                            <div className="col-md-6">
                                <div className='birthdata py-2'>
                                    <label htmlFor="birthdata" className="form-label">Birthdate</label>
                                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.birthdata} type="date" className="form-control rounded-5" id="birthdata" name="birthdata"/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                    <div className="type py-2">
                                <label htmlFor="type" className="form-label">Type</label>
                                <select onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.type}className="form-select rounded-5"name="type" >
                                    <option value="0">Select your type</option>
                                    <option value="1">Teacher</option>
                                    <option value="2">Student</option>
                                </select>
                            </div>
                        </div>

                        {formik.values.type === '1' ? ( 
                            <div className="col-md-6">
                                <div className="Specialization py-2">
                                    <label htmlFor="Specialization" className="form-label w-100">Specialization</label>
                                    <select className="form-select rounded-5" name="Specialization"onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.Specialization}>
                                        <option value="0">Select your Specialization</option>
                                        <option value="1">Science</option>
                                        <option value="2">Arabic</option>
                                        <option value="3">Math</option>
                                    </select>
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
                                    </select>
                                </div>
                            </div>
                        )}

                            <div className='phoneNumber py-2'>
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phoneNumber} type="tel" className="form-control rounded-5" id="phoneNumber" name="phoneNumber"/> 
                                {formik.errors.phoneNumber && formik.touched.phoneNumber && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.phoneNumber}</div>)}
                            </div>
                            <div className='email py-2'>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control rounded-5" id="email" name="email" />
                                {formik.errors.email && formik.touched.email && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.email}</div>)}
                            </div>
                            <div className='password py-2'>
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control rounded-5" id="password" name="password"/> 
                                {formik.errors.password && formik.touched.password && (<div className='alert mt-2 p-2 alert-danger'>{formik.errors.password}</div>)}
                            </div>
                        </div>
                        <div className='py-2 haveAccount'>
                            <span>You have an account? <Link to={'/Login'} className='text-dark'>Sign in</Link></span>
                        </div>
                        <div  className='formBtn col-4 text-center m-auto mt-3 rounded-5 '>
                            <button disabled={!formik.isValid && formik.dirty} type="submit" className='btn w-100 py-3 text-white fs-bold'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
