import React from 'react'
import { ClassNav } from './ClassNav'
import { Route, Routes } from 'react-router-dom'
import { MyClasses } from './MyClasses'
import { ClassView } from './ClassView'

export  function ClassPage() {
  return (
    <div>
      <section className='QuizDash'>
        
            <ClassNav/>
            <Routes>
              <Route path='' element={<MyClasses/>}/>
              <Route path='classview' element={<ClassView/>}/>
            </Routes>
      </section>
    </div>
  )
}
