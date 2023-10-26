import  { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import sideVector from '../../assets/images/settings-bro.png';
import '../../assets/css/layout.css'; // Import your custom CSS

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
        
        <nav className="navbar navbar-expand-lg navbar-dark mainBar">
          <div className="container-fluid">
            <a className="navbar-brand mx-3" href="#">
              <img className="ZADlogo" src={logo} alt="quizZAD" />
              <span className="mx-3 align-items-center fw-bold fs-4">QuizZAD</span>
            </a>
            <button className="navbar-toggler mx-3 text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav text-center">
                <li className="nav-item">
                  <a className="nav-link" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Class</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Quiz</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">User</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      ) : (
        // Render the sidebar for larger screens here
        <nav className="navbar align-items-start sidebar accordion m-3">
          <div className="container-fluid d-flex flex-column py-4">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div className="sidebar-brand-icon">
              <img className='ZADlogo' src={logo} alt="quizZAD" />
            </div>
            <div className="sidebar-brand-text mx-2">
              <span className='text-light fw-bold fs-4'>QuizZAD</span>
            </div>
          </a>
          <hr className="sidebar-divider" />
          <ul className="navbar-nav text-light py-1 reverse-color-on-hover" id="accordionSidebar">
            <li className="nav-item my-1 SBphase">
              <a className="nav-link p-2 px-4 " href="profile.html">
                <i className="fa fa-light fa-house-user fs-4 "/>
                <span className='fs-6 ps-4 textSB'>Dashboard</span>
              </a>
            </li>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-2 px-4 " href="table.html">
                <i className="fa fa-solid fa-landmark fs-4 " />
                <span className='fs-6 ps-4 textSB'>Class</span>
              </a>
            </li>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-2 px-4 " href="login.html">
                <i className="fa-solid fa-book fs-4 " />
                <span className='fs-6 ps-4 textSB'>Quiz</span>
              </a>
            </li>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-2 px-4 " href="register.html">
                <i className="fa fa-solid fa-user fs-4 "/>
                <span className='fs-6 ps-4 textSB'>User</span>
              </a>
            </li>
              <div className="sidebar-brand-icon m-auto">
                <img className='barVector' src={sideVector} alt="quizZAD" />
              </div>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-2 px-4 " href="login.html">
                <i className="fa-solid fa-book fs-4 " />
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



