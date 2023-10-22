import React from 'react';  // Import React if not already imported
import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/admin.png';

export function QuizNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container mx-4 mt-2">
          <h1 className="navbar-brand p-2 text-light fs-4" href="#">Quizzes</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">All Quizzes</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">My Quizzes</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">New Quiz</a>
              </li>
            </ul>
            <div className="admin">
              <img src={vector} alt="Admin" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
