import React from 'react'
import Navbar from '../components/layout/Navbar'
import TeacherTable from '../components/TeacherDashBoard/TeacherTable'
import AdminSidebar from '../components/layout/AdminSidebar'
import "../style/Dashboard.css"

export default function TecherDashBoard() {
    return (
        <div>
            <section className='TecherDash'>
               
                    <div className="row ps-2">
                        <div className="col-md-4">
                        <AdminSidebar/>
                        </div>
                        <div className="col-md-8 pt-4 rightSideDashboard ps-2">
                            <Navbar/>
                            <TeacherTable/>
                        </div>
                    </div>

            </section>
        </div>
    )
}
