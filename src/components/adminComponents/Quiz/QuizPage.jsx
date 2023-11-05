import { QuizNav } from './QuizNav';
import '../../../assets/css/quiz.css'; // Create a CSS file for styling
import { PublicQuiz } from './PublicQuiz';
import { Route, Routes } from 'react-router-dom';
import { MyQuiz } from './MyQuiz';
import { NewQuiz } from './NewQuiz';
import { QuizView } from './QuizView';
import { AssignedQuestion } from './AssignedQuestion';

export function QuizPage() {
  return (
    <div>
      <section className='QuizDash'>
            <QuizNav/>
            <Routes>
              <Route path='' element={<PublicQuiz/>}/>
              <Route path='myquiz' element={<MyQuiz/>}/>
              <Route path=':id/edit' element={<NewQuiz/>}/>
              <Route path='/:id' element={<QuizView/>}/>
              <Route path='/:id/questions' element={<AssignedQuestion/>}/>
            </Routes>
      </section>
    </div>
  );
}

