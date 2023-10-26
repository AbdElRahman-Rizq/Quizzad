import React from 'react'
import { SideBar } from '../../layout/SideBar'
import { ClassNav } from './ClassNav'
import { Route, Routes } from 'react-router-dom'
import { AllClasses } from './AllClasses'
import { MyClasses } from './MyClasses'
import { NewClass } from './NewQuiz'

export  function ClassPage() {
  return (
    <div>
      <section className='QuizDash'>
        <div className="row m-0"> {/* Remove margin with 'm-0' class */}
          <div className="col-lg-3 g-0"> {/* Hide SideNav on small screens */}
            <SideBar/>
          </div>

          <div className="col-lg-9 py-3">
            <ClassNav/>
            <Routes>
              <Route path='' element={<AllClasses/>}/>
              <Route path='myquiz' element={<MyClasses/>}/>
              <Route path='newquiz' element={<NewClass/>}/>
            </Routes>
          </div>
        </div>
      </section>
    </div>
  )
}
