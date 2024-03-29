import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/teacher.png';
import { NavLink } from 'react-router-dom';

export function ClassNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg rounded-4 m-2">
        <div className="container">
          <h1 className="navbar-brand text-light fs-4 px-4 fw-bold">My Class</h1>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars-staggered text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div className="teacher text-center px-4 ms-auto">
              <img className='profileImage' src={vector} alt="teacher" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
