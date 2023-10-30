import React from 'react'
import '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'

export default function ForgetPassword() {
    return (
        <div className=''>
            <section className='forgetPassword'>
            <div className='exam'>
                <img src={Exam} className="" alt=''/>  
            </div>
            <div className="container">
                <form className="form bg-light rounded-5 px-5 py-4">
                    <div className='formLogo'>
                        <img src={Logo} className="w-100" alt=''/>  
                    </div>
                    <div className='formHeader text-center pt-3'>
                        <h1 className='h4'>Forget your password</h1>
                    </div>
                    <div className='row'>                        
                        <div className='email my-2'>
                            <label type="email" className="form-label">Email</label>
                            <input type="email" className="form-control rounded-5" id="email" placeholder=""/> 
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
