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
                        <MiniDash icon={"fa-solid fa-graduation-cap"} name={"Student"} number={19}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-person-chalkboard"} name={"Teacher"} number={22}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-vial-virus"} name={"Quiz"} number={5}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-school"}  name={"Classses"} number={9}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-calendar-check"} name={"New Submissions"} number={15}></MiniDash>
                        </div>                       
                    </div>                
            </section>
        </div>
    )
}
<i class="fa-solid fa-graduation-cap"></i>