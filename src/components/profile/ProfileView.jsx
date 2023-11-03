import React, { useContext, useEffect } from 'react'
import '../../assets/css/Profile.css'
import Profile from '../../assets/images/profile.png'
import { UserContext } from '../../Contex/UserContext'


export default function ProfileView() {

    const {myUser} = useContext(UserContext)
    useEffect(()=>{
        console.log("ahmed", myUser);
        
    }, [myUser])

    return (
        <div>
            <h1>{myUser.email}</h1>
            <section className='profile-view'>
                <div className="container">
                    <h1 className='text-center fw-bold h4'>View Profile</h1>
                    <div className="view-card bg-light rounded-5">
                        <div className="row">
                            <div className="col-md-5 py-5">
                                <div className='profile-img  d-flex justify-content-center align-items-center rounded-circle'>
                                    <img src={Profile} className='' alt=''/>  
                                </div>
                                <div className="profile-name my-4  text-center">
                                    <h2 className='h5'>Ahmed Mohamed</h2>
                                </div>
                                <div className="formBtn col-4 text-center m-auto rounded-5 w-50 profile-view-btn">
                                    <button type="submit" className='btn  w-100 py-2 text-white fs-bold'>Edit Profile</button>
                                </div>
                            </div>
                            <div className="col-md-7 p-5 ">
                                <p>Bio <br/>“ Passionate educator dedicated to inspiring lifelong<br/>learning. Creating dynamic classroom experiences for<br/>students' growth and success. “</p>
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
