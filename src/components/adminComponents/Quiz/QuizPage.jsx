import { SideNav } from '../../layout/SideNav';
import { QuizNav } from './QuizNav';
import '../../../assets/css/quiz.css'; // Create a CSS file for styling
import { QuizList } from './quizList';

export function QuizPage() {
  return (
    <div>
      <section className='QuizDash'>
        <div className="row m-0"> {/* Remove margin with 'm-0' class */}
          <div className="col-lg-3 g-0"> {/* Hide SideNav on small screens */}
            <SideNav/>
          </div>

          <div className="col-lg-9 py-3">
            <QuizNav/>
            <QuizList />
          </div>
        </div>
      </section>
    </div>
  );
}
