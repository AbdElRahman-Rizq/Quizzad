import { SideNav } from '../../layout/SideNav'
import { QuizNav } from './QuizNav'
import { QuizList } from './quizList'

export function QuizPage() {
  return (
    <div>
      <section className='QuizDash'>
                    <div className="row ps-2">
                        <div className="col-md-3">
                          <div className='d-md-block p-3'>
                            <SideNav/>
                          </div>
                        </div>

                        <div className="col-md-9 pt-4 rightSideDashboard ps-2">
                            <QuizNav />
                            <QuizList />
                        </div>
                    </div>
            </section>
    </div>
  )
}
