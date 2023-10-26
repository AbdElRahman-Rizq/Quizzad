import React from 'react'
import vector from '../../assets/images/profile.png'
import "../../assets/css/Topnav.css"


export default function Topnav() {
    return (
        <div>
            <div className='containe '>
                <div class="hstack gap-3 bg-lihgt mb-2">
                    <div class=" title">Administrator</div>
                    <div class="pe-4 ms-auto"><img className="adminVector" src={vector}></img></div>
                </div>
            </div>
        </div>
    )
}
