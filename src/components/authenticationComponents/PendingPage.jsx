import React from 'react'
import  '../../assets/css/authentication.css'
import Logo from '../../assets/images/logo.png'
import Exam from '../../assets/images/Exams-bro.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PendingPage() {
    const navigate = useNavigate();
    const logout = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/v1/auth/logout', {
            withCredentials: true,
        });
        
        if (response.status === 200) {
              navigate("/");
            // Successful logout
            console.log('User logged out successfully');
            // You can also redirect to a different page or perform other actions as needed.
          }
        } catch (error) {
          console.error('Logout failed:', error);
          // Handle the error, such as displaying an error message to the user.
        }
      };
    return (
        <div>
        <section className='pending'>
            <div className='exam'>
                <img src={Exam} className="" alt=''/>  
            </div>
            <div className="container">
                <div className="form bg-light text-center rounded-5 py-4">
                    <div className='formLogo'>
                        <img src={Logo} className="w-100" alt=''/>  
                    </div>
                    <div className="pending-header my-5">
                        <h1 className='h4'>Successfull account registration </h1>
                    </div>
                    <div className="pending-description pb-2">
                        <p>your account is pending , Our admin will<br/>approve your account as soon as possible.<br/>thank you</p>
                    </div>
                    <div  className='formBtn col-4 text-center m-auto mt-3 rounded-4 '>
                            <button type="submit"  className='btn w-100 py-2 text-white fs-bold' onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
