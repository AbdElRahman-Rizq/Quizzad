import { QuizNav } from './QuizNav';
import '../../../assets/css/quiz.css'; // Create a CSS file for styling
import { SideBar } from '../../layout/SideBar';
import { PublicQuiz } from './PublicQuiz';
import { Route, Routes } from 'react-router-dom';
import { MyQuiz } from './MyQuiz';
import { NewQuiz } from './NewQuiz';

export function QuizPage() {
  return (
    <div>
      <section className='QuizDash'>
        <div className="row m-0"> {/* Remove margin with 'm-0' class */}
          <div className="col-lg-3 g-0"> {/* Hide SideNav on small screens */}
            <SideBar/>
          </div>

          <div className="col-lg-9 py-3">
            <QuizNav/>
            <Routes>
              <Route path='/' element={<PublicQuiz/>}/>
              <Route path='myquiz' element={<MyQuiz/>}/>
              <Route path='newquiz' element={<NewQuiz/>}/>
            </Routes>
          </div>
        </div>
      </section>
    </div>
  );
}

