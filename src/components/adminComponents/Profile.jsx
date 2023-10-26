import React from 'react'
import Profile from '../../../../assets/images/profile.png'
import '../../../../assets/css/Proo.css'


export default function Profile() {
    return (
        <div className='Form'>
        <section className='profile'>
            <div className="container">
                <form  className="form  rounded-3 px-5 py-4">
                    <div className='profile-header text-center'>
                        <h1 className='fs-5'>Edit Profile</h1>
                    </div>
                    <div className='profile-img  d-flex justify-content-center align-items-center rounded-circle'>
                        <img src={Profile} className='' alt=''/>  
                    </div>
                    <div className='row'>
                        
                        <div className='firstName py-2'>
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input   type="text" className="form-control rounded-5 " id="firstName" name="firstName"/>
                        </div>
    
                        <div className='lastName py-2'>
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control rounded-5" id="lastName" name="lastName"/>
                        </div>

                        <div className='Bio py-2'>
                                <label htmlFor="Bio" className="form-label">Bio</label>
                                <input type="text" className="form-control rounded-5" id="Bio" name="lastName"/>
                        </div>

                        <div className='birthdata py-2'>
                            <label htmlFor="birthdata" className="form-label">Birthdate</label>
                            <input type="date" className="form-control rounded-5" id="birthdata" name="birthdata"/>
                        </div>

                        <div className='Specialization py-2'>
                                <label htmlFor="Specialization" className="form-label">Specialization (Teacher)</label>
                                <select className="form-select rounded-5" name="Specialization" >
                                    <option value="0">Select your Specialize</option>
                                    <option value="1">Specialize One</option>
                                    <option value="2">Specialize Two</option>
                                </select>
                        </div>   

                        <div className='phoneNumber py-2'>
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input  type="tel" className="form-control rounded-5" id="phoneNumber" name="phoneNumber"/> 
                        </div>
                    
                        <div className='email py-2'>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input  type="email" className="form-control rounded-5" id="email" name="email" />
                        </div>

                        <div className='password py-2'>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input  type="password" className="form-control rounded-5" id="password" name="password"/> 
                        </div>
                    </div>
                    <div  className='formBtn col-4 text-center m-auto mt-3 rounded-5 '>
                        <button type="submit" className='btn w-100 py-3 text-white fs-bold'>Save Change</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
    )
}
