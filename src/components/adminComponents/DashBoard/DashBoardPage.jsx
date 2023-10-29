import React from 'react'
import WelcomeSide from '../../layout/WelcomeSide'
import MiniDash from '../../layout/MiniDash'
import Topnav from '../../layout/Topnav'
import '../../../assets/css/Dashboard.css'
import backgroundImage from '../../../assets/images/college-students-bro.svg';

export default function DashBoardPage() {
    return (
        <div >
            <section >
                        <Topnav/>
                        <WelcomeSide/>
                    <div className="d-flex me-0 flex-wrap justify-content-around px-2">
                        <div className="col-md-4">
                        <MiniDash icon={"fa-solid fa-graduation-cap fs-3 ms-2"} name={"Student"} number={19}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-person-chalkboard fs-3 ms-2"} name={"Teacher"} number={22}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-vial-virus fs-3 ms-2"} name={"Quizzes"} number={5}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-school fs-3 ms-2"}  name={"Classses"} number={9}></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash  icon={"fa-solid fa-calendar-check fs-3 ms-2"} name={"New Requests"} number={15}></MiniDash>
                        </div>    
                        <div className='col-md-10 text-center'>
                            <img className='ImageBack' src={backgroundImage} alt="name" />
                        </div>              
                    </div>               
            </section>
        </div>
    )
}
