import '../../../assets/css/quiz.css'; // Create a CSS file for styling
import { PublicQuiz } from './PublicQuiz';
import { Route, Routes } from 'react-router-dom';
import { MyQuiz } from './MyQuiz';
import { QuizView } from './QuizView';
import { QuizNav } from './QuizNav';

export function QuizPage() {
  return (
    <div>
      <section className='QuizDash'>
            <QuizNav/>
            <Routes>
              <Route path='' element={<PublicQuiz/>}/>
              <Route path='myquiz' element={<MyQuiz/>}/>
              <Route path='quizview' element={<QuizView/>}/>
            </Routes>
      </section>
    </div>
  );
}

