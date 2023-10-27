import React from 'react'
import WelcomeSide from '../../layout/WelcomeSide'
import { SideBar } from '../../layout/SideBar'
import MiniDash from '../../layout/MiniDash'
import Topnav from '../../layout/Topnav'

export default function DashBoardPage() {
    return (
        <div>
            <section className=''>
                
                        <Topnav/>
                        <WelcomeSide/>
                    <div className="d-flex me-0 flex-wrap justify-content-around px-2">
                        <div className="col-md-4">
                        <MiniDash icon={"fa-solid fa-person-chalkboard"} name={"Teacher"}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash icon={"fa-solid fa-person-chalkboard"} name={"Teacher"}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash icon={"fa-solid fa-person-chalkboard"} name={"Teacher"}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash icon={"fa-solid fa-person-chalkboard"} name={"Teacher"}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash icon={"fa-solid fa-person-chalkboard"} name={"Teacher"}></MiniDash>
                        </div>                       
                    </div>                
            </section>
        </div>
    )
}
