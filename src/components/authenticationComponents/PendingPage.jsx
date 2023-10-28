import React from 'react'
import  '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'

export default function PendingPage() {
    return (
        <div>
        <section className='pending pt-5'>
            <div className='exam'>
                <img src={Exam} className="w-25" alt=''/>  
            </div>
            <div className="container">
                <div className="pending-view bg-light text-center rounded-5 py-4">
                    <div className='formLogo'>
                        <img src={Logo} className="w-100" alt=''/>  
                    </div>
                    <div className="pending-header my-5">
                        <h1 className='h4'>Successfully account registration </h1>
                    </div>
                    <div className="pending-description pb-2">
                        <p>your account is pending , Our admin will<br/>approve your account as soon as possible.<br/>thank you</p>
                    </div>
                    <div  className='formBtn col-4 text-center m-auto mt-3 rounded-4 '>
                            <button type="submit"  className='btn w-100 py-2 text-white fs-bold'>Logout</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
