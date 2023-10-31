import React from 'react'
import '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function ForgetPassword() {
    let navigate =useNavigate()
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
    async function forgetPasswordApi(values){
        let {data} = await axios.post(`http://localhost:5000/api/v1/auth/forgotPassword`,values)
        console.log(data);
        if(date.stateMSg =="success"){
            navigate('/otp')
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
                            <input onBlur={Form.handleBlur} onChange={Form.handleChange} type="email" className="form-control rounded-5" id="email" placeholder=""/> 
                            {Form.errors.email && Form.touched.email && (<p className='mt-2 p-2 text-danger'>{Form.errors.email}</p>)}
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
