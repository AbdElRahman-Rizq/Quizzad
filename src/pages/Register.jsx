import React, { useState } from 'react'
import  '../style/Register.css'
import Logo from '../assets/images/logo.png'
import Exam from '../assets/images/Exams-bro.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function Register() {
    let [errMsg, setErrMsg] = useState("")
    let [loading, setloading] = useState(false)
    let baseUrl = "https://route-ecommerce.onrender.com"
    let naviagate = useNavigate()


    
    let validationSchema = Yup.object(
        {
            firstName: Yup.string().required().min(2, "Char min 2").max(10, "max Char 10"),
            lastName : Yup.string().required().min(2, "Char min 2").max(10, "max Char 10"),
            email:Yup.string().required().email("Enter Valid Email"),
            phoneNumber:Yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$%^&*()_-]{3,16}$/, "enter valid password"),
            password:Yup.string().required().matches(/^(010|011|015|012)[0-9]{8}$/, "enter valid Phone"),
        }
    )

let formik =useFormik({
    initialValues: 
    {
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:"",
    },
    onSubmit: (data) => {
        sendDataRegister(data)
    },
})

async function sendDataRegister(objData) {

    setloading(true)
    let { data } = await axios.post(`${baseUrl}/api/v1/auth/signup`, objData).catch((errrr) => {
        console.log(errrr.response.data.errors.msg);
        setErrMsg(errrr.response.data.errors.msg)
        setloading(false)
    })
    console.log(data);
    setloading(false)
    if (data.message == "success") {
      // Login
        naviagate('/login')
    }
}



return (
    <div>
        <section className='register sec-gap'>
            <div className='exam '>
                <img src={Exam} className="w-25" alt=''/>  
            </div>
            <div className="container">

            <form onSubmit={formik.handleSubmit} className="form  w-50 bg-light rounded-5 px-5 py-3">
                <div className='main-img'>
                    <img src={Logo} className="w-75" alt=''/>  
                </div>
                <div className='main-header text-center pb-3'>
                    <h1>Sign up Your Account</h1>
                </div>
                <div className='row'>
                    <div className="col-md-6">
                        <div className='firstName py-2'>
                            <label for="firstName" class="form-label">First Name</label>
                            <input onChange={formik.handleChange} type="text" class="form-control rounded-5 " id="firstName" placeholder=""/>
                        </div>                          
                        <div className='grade py-2'>
                            <label for="gender" class="form-label">Gender</label>
                            <input type="text" class="form-control rounded-5" id="gender" placeholder=""/>
                        </div>                
                        <div className='grade py-2'>
                            <label for="grade" class="form-label">Grade Level | Specialization</label>
                            <select class="form-select rounded-5" aria-label="Default select example">
                                <option value="1">Select your grade</option>
                                <option value="1">Grade 1</option>
                                <option value="2">Grade 2</option>
                                <option value="2">Grade 3</option>
                                <option value="2">Grade 4</option>
                                <option value="2">Grade 5</option>
                                <option value="2">Grade 6</option>
                                <option value="2">Grade 7</option>
                                <option value="2">Grade 8</option>
                                <option value="2">Grade 9</option>
                            </select>
                        </div>                
                    </div>

                    <div className="col-md-6">
                        <div className='lastName py-2'>
                            <label for="lastName" class="form-label">Last Name</label>
                            <input onChange={formik.handleChange} type="text" class="form-control rounded-5" id="lastName" placeholder=""/>
                        </div>     
                        <div className='type py-2'>
                            <label for="type" class="form-label">Type</label>
                            <select class="form-select rounded-5" aria-label="Default select example">
                                <option value="1">Select you type</option>
                                <option value="1">Teacher</option>
                                <option value="2">Student</option>
                            </select>
                        </div>  
                        <div className='birthdata py-2'>
                            <label for="birthdata" class="form-label">Birthdate</label>
                            <input type="date" class="form-control rounded-5" id="birthdata" placeholder=""/>
                        </div>     
                    </div>

                    <div className='phoneNumber py-2'>
                        <label for="phoneNumber" class="form-label">Phone Number</label>
                        <input onChange={formik.handleChange} type="tel" class="form-control rounded-5" id="phoneNumber" placeholder=""/> 
                    </div>

                    <div className='email py-2'>
                        <label for="email" class="form-label">Email</label>
                        <input onChange={formik.handleChange} type="email" class="form-control rounded-5" id="email" placeholder=""/> 
                    </div>
                    <div className='password py-2'>
                        <label for="password" class="form-label">Password</label>
                        <input onChange={formik.handleChange} type="password" class="form-control rounded-5" id="password" placeholder=""/> 
                    </div>
                </div>
                <div className='py-2'>
                    <span>You have an account? <a className='text-dark'>Sign in</a></span>
                </div>
                <div  className='signupBtn'>
                    <button disabled={!formik.isValid} className='btn rounded-5 col-12 text-white'>Sign Up</button>
                </div>
                </form>
            </div>
        </section>
    </div>
)
}
