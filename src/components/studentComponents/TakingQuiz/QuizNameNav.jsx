import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/teacher.png';

function QuizNameNav() {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg rounded-5 m-2 mx-4 px-4">
        <div className="d-flex justify-content-between w-100">
          <h1 className="navbar-brand text-light fs-4 mt-2 px-4 fw-bold">Quiz Name</h1>            
            <div className="student text-center">
              <img className='profileImage' src={vector} alt="student" />
            </div>
          </div>        
      </nav>
    </div>
  )
}

export default QuizNameNav