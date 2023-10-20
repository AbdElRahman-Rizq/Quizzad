import React from 'react'
import '../style/Forgetpassword.css'
import Logo from '../assets/images/logo.png'
import Exam from '../assets/images/Exams-bro.png'

export default function ForgetPassword() {
    return (
        <div>
            <section className='forgetPassword sec-gap'>
            <div className='exam'>
                <img src={Exam} className="w-25" alt=''/>  
            </div>
            <div className="container">
                <form className="form  w-50 bg-light rounded-5 px-5 py-3">
                    <div className='main-img'>
                        <img src={Logo} className="w-75" alt=''/>  
                    </div>
                    <div className='main-header text-center mb-3'>
                        <h1 className='h4'>Forget your password</h1>
                    </div>
                    <div className='row'>                        
                        <div className='email my-2'>
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control rounded-5" id="email" placeholder=""/> 
                        </div>
                    </div>
                    <div className='my-2'>
                        <span>You don't have an account? <a className='text-dark'>Sign up</a></span>
                    </div>
                    <div  className='signupBtn'>
                        <button className='btn rounded-5 col-12 text-white'>Submit</button>
                    </div>
                </form>           
            </div>
        </section>
        </div>
    )
}
