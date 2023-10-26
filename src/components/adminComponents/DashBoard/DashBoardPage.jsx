import React from 'react'
import WelcomeSide from '../../layout/WelcomeSide'
import { SideBar } from '../../layout/SideBar'
import MiniDash from '../../layout/MiniDash'
import Topnav from '../../layout/Topnav'

export default function DashBoardPage() {
    return (
        <div>
            <section className=''>
                <div className="container-fulid">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar/>
                    </div>
                    <div className="col-md-9">
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
                    </div>
                </div>
                </div>
                
            </section>
        </div>
    )
}
