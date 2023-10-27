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
                    <div className="row me-0 ">
                        <div className="col-md-4">
                        <MiniDash></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash></MiniDash>
                        </div>
                        <div className="col-md-4">
                        <MiniDash></MiniDash>
                        </div>
                    </div>                
            </section>
        </div>
    )
}
