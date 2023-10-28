import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/teacher.png';
import { NavLink } from 'react-router-dom';

export function QuizNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg rounded-4 m-2">
        <div className="container">
          <h1 className="navbar-brand text-light fs-4 px-4 fw-bold">Quiz</h1>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars-staggered text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto ">
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/student/quiz" 
                >
                  Public Quizzes
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/student/quiz/myquiz"
                >
                  My Quizzes
                </NavLink>
              </li>
              
            </ul>
            <div className="student text-center">
              <img className='profileImage' src={vector} alt="student" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
