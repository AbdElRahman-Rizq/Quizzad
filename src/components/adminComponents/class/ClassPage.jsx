import React from 'react'
import { ClassNav } from './ClassNav'
import { Route, Routes } from 'react-router-dom'
import { AllClasses } from './AllClasses'
import { NewClass } from './NewClass'
import { ClassView } from './ClassView'

export  function ClassPage() {
  return (
    <div>
      <section className='QuizDash'>
        
            <ClassNav/>
            <Routes>
              <Route path='' element={<AllClasses/>}/>
              <Route path=':id/edit' element={<NewClass/>}/>
              <Route path=':id' element={<ClassView/>}/>
            </Routes>
      </section>
    </div>
  )
}
