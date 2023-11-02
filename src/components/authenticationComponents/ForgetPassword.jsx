import React, { useState } from 'react'
import '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';





export default function ForgetPassword() {
    let navigate =useNavigate()
    let [successMsg , setsuccessMsg]=useState("")

    //yup Validation
    let validateSChema = Yup.object({
        email:Yup.string().required().email("Enter Valid Email")
    })

    //formik
    let Form= useFormik({
        initialValues:{
            email:""
        },
        onSubmit:(values)=>{
            forgetPasswordApi(values)
            console.log(values);
        },
        validationSchema:validateSChema
    })

    //submit function
    async function forgetPasswordApi(values) {
        try {
            const { data } = await axios.post('http://localhost:5000/api/v1/auth/forgotPassword', values);
            // console.log(data.message);

        
            if (data.message === 'Password reset instructions sent to your email') {

                setsuccessMsg(data.message);
                console.log(data.message);
                Cookies.set('jwt-reset', data.token, { expires: 70 });
                console.log(data.token);
        
                // const jwtToken = getCookie('jwt');
                // if (jwtToken) {
                // console.log('Token retrieved:', jwtToken);
        
                // // Now you can use jwtToken for authentication or any other purpose
                // } else {
                // console.log('Token not found');
                // }
            }
            } catch (error) {
            console.error('Error:', error);
            }
        }


    //Form
    return (
        <div className=''>
            <section className='forgetPassword'>
            <div className='exam'>
                <img src={Exam} className="" alt=''/>  
            </div>
            <div className="container">
                <form onSubmit={Form.handleSubmit} className="form bg-light rounded-5 px-5 py-4">
                    <div className='formLogo'>
                        <img src={Logo} className="w-100" alt=''/>  
                    </div>
                    <div className='formHeader text-center pt-3'>
                        <h1 className='h4'>Forget your password</h1>
                    </div>
                    <div className='row'>                        
                        <div className='email my-2'>
                            <label type="email" className="form-label">Email</label>
                            <input  onBlur={Form.handleBlur} onChange={Form.handleChange} type="email" className="form-control rounded-5" id="email" placeholder=""/> 
                            {Form.errors.email && Form.touched.email && (<p className='mt-2 p-2 text-danger'>{Form.errors.email}</p>)}
                            <div className="success-alert mt-2 ">
                                {successMsg?(<div className='alert alert-success rounded-5 text-center'>Check You Email</div>):""}
                            </div>
                        </div>
                    </div>
                    <div  className='formBtn col-4 text-center m-auto mt-3 rounded-4 '>
                        <button type="submit"  className='btn w-100 py-2 text-white fs-bold'>Submit</button>
                    </div>
                </form>           
            </div>
        </section>
        </div>
    )
}
