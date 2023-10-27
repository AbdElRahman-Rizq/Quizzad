import React from 'react'
import { SideBar } from '../components/layout/SideBar'
import { Route, Routes } from 'react-router-dom'
import { ClassPage } from '../components/adminComponents/class/ClassPage'
import { QuizPage } from '../components/adminComponents/Quiz/QuizPage'
import DashBoardPage from '../components/adminComponents/dashboard/DashBoardPage'

export function AdminView() {
  return (
    <div>
      <section className='QuizDash'>
        <div className="row m-0"> {/* Remove margin with 'm-0' class */}
          <div className="col-lg-3 g-0"> {/* Hide SideNav on small screens */}
            <SideBar/>
          </div>

          <div className="col-lg-9 pt-2">
            <Routes>            
              <Route path='' element={<DashBoardPage/>}/>
              <Route path='class/*' element={<ClassPage/>}/>
              <Route path='quiz/*' element={<QuizPage/>}/>
            </Routes>
          </div>
        </div>
      </section>
    </div>
  )
}
