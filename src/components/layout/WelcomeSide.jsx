import React from 'react'
import vector from '../../assets/images/vector.png'


export default function WelcomeSide() {
    return (
        <div>
            <div id='welcome' className='text-white mt-1 '>
            <div className="container">
                <div className="row weclome rounded-5">
                    <div className="col-md-6 ">
                        <div className="p-5">
                            <p>September 4 , 2023</p>
                            <h2 className='mt-5'>Welcome back , Mohamed</h2>
                            <p>Always stay update in your student portal</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="vector">
                            <img src={vector} className=''></img>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>   
        </div>
    )
}
