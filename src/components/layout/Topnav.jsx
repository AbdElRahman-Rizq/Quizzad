import React from 'react'
import vector from '../../assets/images/teacher.png'
// import "../../assets/css/Topnav.css"


export default function Topnav() {
    return (
        <div>
            <div className='container '>
                <div class="hstack gap-3 bg-lihgt">
                    <div className="ps-5 title">Administrator</div>
                    <div className="pe-5 ms-auto"><img className="adminVector" src={vector}></img></div>
                </div>
            </div>
        </div>
    )
}
