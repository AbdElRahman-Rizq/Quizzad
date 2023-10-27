import React from 'react'
import { ClassNav } from './ClassNav'
import { Route, Routes } from 'react-router-dom'
import { AllClasses } from './AllClasses'
import { MyClasses } from './MyClasses'
import { NewClass } from './NewClass'
import { QuizView } from '../Quiz/QuizView'
import { ClassView } from './ClassView'

export  function ClassPage() {
  return (
    <div>
      <section className='QuizDash'>
        
            <ClassNav/>
            <Routes>
              <Route path='' element={<AllClasses/>}/>
              <Route path='myclasses' element={<MyClasses/>}/>
              <Route path='newclass' element={<NewClass/>}/>
              <Route path='classview' element={<ClassView/>}/>
            </Routes>
      </section>
    </div>
  )
}
