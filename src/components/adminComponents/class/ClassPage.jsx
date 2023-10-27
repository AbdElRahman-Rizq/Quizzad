import React from 'react'
import { ClassNav } from './ClassNav'
import { Route, Routes } from 'react-router-dom'
import { AllClasses } from './AllClasses'
import { MyClasses } from './MyClasses'
import { NewClass } from './NewClass'
import { QuizView } from '../Quiz/QuizView'

export  function ClassPage() {
  return (
    <div>
      <section className='QuizDash'>
        
            <ClassNav/>
            <Routes>
              <Route path='' element={<AllClasses/>}/>
              <Route path='myclasses' element={<MyClasses/>}/>
              <Route path='newclass' element={<NewClass/>}/>
              <Route path='quizview' element={<QuizView/>}/>
            </Routes>
      </section>
    </div>
  )
}
