import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/admin.png';
import { NavLink } from 'react-router-dom';

export default function UserNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg rounded-5">
        <div className="container">
          <h1 className="navbar-brand text-light fs-4 px-4 fw-bold">Quizzes</h1>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars-staggered text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto ">
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/quiz" 
                >
                  Public Quizzes
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/quiz/myquiz"
                >
                  My Quizzes
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink
                  className="nav-link QuizNavBtn fs-6 text-center "
                  to="/quiz/newquiz"
                >
                  New Quiz
                </NavLink>
              </li>
            </ul>
            <div className="admin text-center">
              <img src={vector} alt="Admin" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
