import React from 'react'
import '../../style/Checkcode.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'

export default function Checkcode() {
    return (
        <div>
            <section className='checkcode sec-gap'>
                <div className='exam'>
                    <img src={Exam} className="w-25" alt=''/>  
                </div>
                <div className="container d-flex">
                    <form className="form w-50 bg-light rounded-5 px-5 py-3">
                        <div className='main-img'>
                            <img src={Logo} className="w-75" alt=''/>  
                        </div>
                        <div className='main-header text-center mb-3'>
                            <h1 className='h4'>Check your OTP code via email</h1>
                        </div>
                        <div className='row  mx-auto text-center'>                        
                            <div className='checkbox my-4 d-flex col-md-12 mx-auto'>
                                <input className='form-control' type="text" id="otp-input" placeholder="" maxlength="1"/>
                                <input className='form-control' type="text" id="otp-input" placeholder="" maxlength="1"/>
                                <input className='form-control' type="text" id="otp-input" placeholder="" maxlength="1"/>
                                <input className='form-control' type="text" id="otp-input" placeholder="" maxlength="1"/>
                                <input className='form-control' type="text" id="otp-input" placeholder="" maxlength="1"/>
                                {/* <button className="btn btn-outline-dark" type="submit">Verify</button> */}
                            </div>
                            <div className='mt-1 mb-4'>
                                <span>Didn't receive OTP ? <a className='text-dark'>resend OTP again</a></span>
                            </div>
                        </div>
                        <div  className='signupBtn '>
                            <button className='btn rounded-5 col-12 text-white'>Sunbmit</button>
                        </div>
                    </form>           
                </div>
            </section>
        </div>
    )
}
