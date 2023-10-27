import React from 'react'
import '../../assets/css/Dashboard.css'
import vector from '../../assets/images/vector.png'


export default function WelcomeSide() {
    return (
        <div>
            <div id='welcome' className='text-white mt-1 '>
            <div className="container">
                <div className="d-flex weclome rounded-5">
                    <div className="col-md-6 ">
                        <div className="py-4 ps-4">
                            <p>September 4 , 2023</p>
                            <h2 className='mt-5'>Welcome back , Mohamed</h2>
                            <p>Always stay update in your student portal</p>
                        </div>
                    </div>

                    <div className=" py-3 pe-5">
                        <div className="vector ">
                            <img src={vector}></img>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>   
        </div>
    )
}
