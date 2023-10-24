import  { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
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
        
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
        <a className="navbar-brand mx-3" href="#">
        <img className="ZADlogo" src={logo} alt="quizZAD" />
        <span className=' mx-2 align-iteams-center '>QuizZAD</span> 
        </a>
          <button className="navbar-toggler mx-3 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className=" fa fa-solid fa-bars-staggered text-light"></i>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link " href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Class</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Quiz</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">User</a>
            </li><li className="nav-item">
              <a className="nav-link " href="#">Log out</a>
            </li>
          </ul>
        </div>
      </div>        
        </nav>

      ) : (
        // Render the sidebar for larger screens here
        <nav className="navbar align-items-start sidebar accordion m-3">
          <div className="container-fluid d-flex flex-column py-5">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div className="sidebar-brand-icon">
              <img className='ZADlogo' src={logo} alt="quizZAD" />
            </div>
            <div className="sidebar-brand-text mx-4">
              <span className='text-light fw-bold fs-4'>QuizZAD</span>
            </div>
          </a>
          <hr className="sidebar-divider" />
          <ul className="navbar-nav text-light py-1 reverse-color-on-hover" id="accordionSidebar">
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-3" href="profile.html">
                <i className="fa fa-light fa-house-user fs-4"></i>
                <span className='fs-6 px-3 textSB'>Dashboard</span>
              </a>
            </li>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-3" href="table.html">
                <i className="fa fa-solid fa-landmark fs-4" />
                <span className='fs-6 px-3 textSB'>Class</span>
              </a>
            </li>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-3" href="login.html">
                <i className="fa-solid fa-book fs-4" />
                <span className='fs-6 px-3 textSB'>Quiz</span>
              </a>
            </li>
            <li className="nav-item my-2 SBphase">
              <a className="nav-link p-3" href="register.html">
                <i className="fa fa-solid fa-user fs-4"/>
                <span className='fs-6 px-3 textSB'>User</span>
              </a>
            </li>
            <li className="nav-item my-3 SBphase">
              <a className="nav-link p-3" href="register.html">
              <i className="fa-solid fa-door-open fs-4"></i>
                <span className='fs-6 px-3 textSB'>Log out</span>
              </a>
            </li>
          </ul>
        </div>
        </nav>
      )}
    </div>
  );
}



