import  { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import sideVector from '../../assets/images/settings-bro.svg';
import '../../assets/css/layout.css'; // Import your custom CSS

import { NavLink } from 'react-router-dom';

export function SideBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        
        <nav className="navbar navbar-expand-lg mainBar">
          <div className="container-fluid">
            <a className="navbar-brand mx-3" href="#">
              <img className="ZADlogo" src={logo} alt="quizZAD" />
              <span className="mx-3 align-items-center fw-bold fs-4 text-light">QuizZAD</span>
            </a> 
            <button className="navbar-toggler mx-3 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars-staggered fs-3"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto ">
              <li className="mx-2">
                <NavLink
                  className="nav-link rounded-5 QuizNavBtn fs-6 text-center "
                  to="/admin/" 
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link rounded-5 QuizNavBtn fs-6 text-center "
                  to="/admin/class"
                >
                  Class
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link rounded-5 QuizNavBtn fs-6 text-center "
                  to="/admin/quiz"
                >
                  Quiz
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link rounded-5 QuizNavBtn fs-6 text-center "
                  to="/admin/user"
                >
                  User
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
        </nav>


      ) : (

        // Render the sidebar for larger screens here
        <nav className="navbar align-items-start sidebar accordion my-3 ms-3">
          <div className="container-fluid d-flex flex-column pt-2">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div className="sidebar-brand-icon">
              <img className='ZADlogo' src={logo} alt="quizZAD" />
            </div>
            <div className="sidebar-brand-text mx-2">
              <span className='text-light fw-bold fs-4'>QuizZAD</span>
            </div>
          </a>
          <ul className="navbar-nav text-light pt-4 reverse-color-on-hover" id="accordionSidebar">
            <li className="nav-item my-1 SBphase">
              <NavLink className="nav-link rounded-5 p-2 px-4 " to="/admin/">
                <i className="fa fa-light fa-house-user fs-4 "/>
                <span className='fs-6 ps-4 textSB'>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item my-2 SBphase">
              <NavLink className="nav-link rounded-5 p-2 px-4 " to="/admin/class">
                <i className="fa fa-solid fa-landmark fs-4 " />
                <span className='fs-6 ps-4 textSB'>Class</span>
              </NavLink>
            </li>
            <li className="nav-item my-2 SBphase">
              <NavLink className="nav-link rounded-5 p-2 px-4 " to="/admin/quiz">
                <i className="fa-solid fa-book fs-4 " />
                <span className='fs-6 ps-4 textSB'>Quiz</span>
              </NavLink>
            </li>
            <li className="nav-item my-2 SBphase">
              <NavLink className="nav-link rounded-5 p-2 px-4 " to="/admin/user">
                <i className="fa fa-solid fa-user fs-4 "/>
                <span className='fs-6 ps-4 textSB'>User</span>
              </NavLink>
            </li>
              <div className="sidebar-brand-icon m-auto">
                <img className='barVector' src={sideVector} alt="quizZAD" />
              </div>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link rounded-5 p-2 px-4 " href="login.html">
                <i className="fa-solid fa-door-open fs-4 " />
                <span className='fs-6 ps-4 textSB'>Log out</span>
              </a>
            </li>
            
          </ul>
          
        </div>
        </nav>
      )}
    </div>
  );
}



