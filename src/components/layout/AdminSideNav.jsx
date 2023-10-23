import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/css/dashboard.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function AdminSideNav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        // Render a mobile navbar here
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand mx-3" href="#">
            <img className="ZADlogo" src={logo} alt="quizZAD" />
            <span className=' mx-2 align-iteams-center'>QuizZAD</span> 
          </a>
          <div className='dropdown'>
          <button className="navbar-toggler dropbtn mx-3  bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " />

          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          </div>

        </nav>
      ) : (
        // Render the sidebar for larger screens here
        <nav className="navbar align-items-start sidebar accordion sideBar p-0 border rounded-5">
          <div className="container-fluid d-flex flex-column p-0 py-5">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div className="sidebar-brand-icon">
              <img className='ZADlogo' src={logo} alt="quizZAD" />
            </div>
            <div className="sidebar-brand-text mx-4">
              <span className='text-light fw-bold fs-4'>QuizZAD</span>
            </div>
          </a>
          <hr className="sidebar-divider" />
          <ul className="navbar-nav text-light py-1" id="accordionSidebar">
            <li className="nav-item my-3 SBphase">
              <a className="nav-link p-3" href="profile.html">
                <i className="fa fa-light fa-house-user fs-4" style={{color: "#89288F",}}></i>
                <span className='fs-5 px-3 text-dark'>Dashboard</span>
              </a>
            </li>
            <li className="nav-item my-3 SBphase">
              <a className="nav-link p-3" href="table.html">
                <i className="fa fa-solid fa-landmark fs-4" style={{color: "#89288F",}} />
                <span className='fs-5 px-3 text-dark'>Class</span>
              </a>
            </li>
            <li className="nav-item my-3 SBphase">
              <a className="nav-link p-3" href="login.html">
                <i className="fa-solid fa-book fs-4 " style={{color: "#89288F",}} />
                <span className='fs-5 px-3 text-dark'>Quiz</span>
              </a>
            </li>
            <li className="nav-item my-3 SBphase">
              <a className="nav-link p-3" href="register.html">
                <i className="fa fa-solid fa-user fs-4 " style={{color: "#89288F",}} />
                <span className='fs-5 px-3 text-dark'>User</span>
              </a>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button className="btn rounded-circle border-0" id="sidebarToggle" type="button" />
          </div>
        </div>
          
        </nav>
      )}
    </div>
  );
}



