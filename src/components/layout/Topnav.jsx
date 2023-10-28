import React from 'react'
import vector from '../../assets/images/teacher.png'
import "../../assets/css/Topnav.css"


export default function Topnav() {
    return (
        <div>
            <div className='container '>
                <div className="hstack gap-3 bg-lihgt">
                <h1 className="navbar-brand text-light fs-4 px-4 fw-bold text-dark">Administrator</h1>
                    <div className="pe-2 ms-auto"><img className="adminVector" src={vector}></img></div>
                </div>
            </div>
        </div>
    )
}
