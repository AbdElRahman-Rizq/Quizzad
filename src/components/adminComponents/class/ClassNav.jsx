import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/admin.png';
import { NavLink } from 'react-router-dom';

export function ClassNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg rounded-4 m-2">
        <div className="container">
          <h1 className="navbar-brand text-light fs-4 px-4 fw-bold">Class</h1>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars-staggered text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto ">
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/admin/class/" 
                >
                  All Classes
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/admin/class/myclasses"
                >
                  My Classes
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/admin/class/0/edit"
                >
                  New Class
                </NavLink>
              </li>
            </ul>
            <div className="admin text-center">
              <img className='profileImage' src={vector} alt="Admin" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
