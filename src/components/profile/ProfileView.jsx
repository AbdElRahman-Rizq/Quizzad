import React from 'react'
import '../../assets/css/Profile.css'
import Profile from '../../assets/images/profile.png'


export default function ProfileView() {
    return (
        <div>
            <section className='profile-view'>
                <div className="container">
                    <h1 className='text-center'>View Profile</h1>
                    <div className="view-card bg-light rounded-2">
                        <div className="row">
                            <div className="col-md-3">
                                <div className='profile-img  d-flex justify-content-center align-items-center rounded-circle'>
                                    <img src={Profile} className='' alt=''/>  
                                </div>
                                <div className="profile-name">
                                    <h2 className='h5=4'>Ahmed Mohamed</h2>
                                </div>
                                <div className="formBtn col-4 text-center m-auto mt-3 rounded-5  profile-view-btn">
                                    <button type="submit" className='btn  w-100 py-3 text-white fs-bold'>Edit Profile</button>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <p>Bio <br/>“ Passionate educator dedicated to inspiring lifelong learning. <br/>Creating dynamic classroom experiences for students' growth and success. “</p>
                                <p>BirthDate : 8th Jan 1999</p>
                                <p>Specialization (Teacher) : MAthematics</p>
                                <p>Phone Number : 020 100 123 4567</p>
                                <p>Email : Absc@Example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
