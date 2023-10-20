import React from 'react'
import Navbar from '../Navbar'
import TeacherTable from '../TeacherTable'

export default function TecherDashBoard() {
    return (
        <div>
            <section className='TecherDash'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <Navbar/>
                            <TeacherTable/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
