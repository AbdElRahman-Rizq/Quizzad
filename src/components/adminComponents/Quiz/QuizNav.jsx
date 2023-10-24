import React from 'react';  // Import React if not already imported
import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/admin.png';

export function QuizNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg rounded-5 ">
        <div className="container my-2">
          <h1 className="navbar-brand text-light fs-4 px-2 fw-bold" href="#">Quizzes</h1>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className=" fa fa-solid fa-bars-staggered text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-lg-0 ">
              <li className="nav-item mx-2 ">
                <a className="nav-link fs-6 text-center" href="#">All Quizzes</a>
              </li>
              <li className="nav-item mx-2 ">
                <a className="nav-link fs-6 text-center" href="#">My Quizzes</a>
              </li>
              <li className="nav-item mx-2 ">
                <a className="nav-link fs-6 text-center" href="#">New Quiz</a>
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
