import React from 'react'
import '../../assets/bootstrap/css/bootstrap.min.css'
import logo from '../../assets/images/logo.svg'
import '../../assets/css/dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export function AdminSideNav() {
  return (
    <div>
        <nav className="navbar align-items-start sidebar sidebar-dark accordion sideBar navbar-dark">
            <div className="container-fluid d-flex flex-column p-0 ">
                <a className="navbar-brand d-flex justify-content-center py-5 align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><img className='ZADlogo' src={logo} alt="quizZAD" /></div>
                    <div className="sidebar-brand-text mx-3"><span >QuizZAD</span></div>
                </a>
            <hr className="sidebar-divider my-2" />
            <ul className="navbar-nav text-light w-" id="accordionSidebar">
                <li className="nav-item">
                    <div className='bg-light p-3 rounded-5 m-2 d-flex align-iteams-center justify-content-evenly'>
                        <div>
                            <i className="sideBarIcon fa fa-light fa-house-user fs-3" ></i>
                        </div>
                            <span className='text-dark fs-5'>Dashboard</span>
                    </div>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="table.html"><i className="fas fa-table" /><span>Class</span></a></li>
                <li className="nav-item">
                    <a className="nav-link" href="login.html"><i className="far fa-user-circle" /><span>Quiz</span></a></li>
                <li className="nav-item">
                    <a className="nav-link" href="register.html"><i className="fas fa-user-circle" /><span>User</span></a></li>
            </ul>
            <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button" /></div>
            </div>
        </nav>
    </div>
  )
}
