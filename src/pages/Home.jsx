import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Quizzes from '../components/Quizzes'
import About from '../components/about'
import LeaveAMessage from '../components/LeaveAMessage'

function Home() {
  return (
    <div style={{background: "#E9E2EE"}}>
    <Navbar/>
    <Hero/>
    <Quizzes/>
    <About/>
    <LeaveAMessage/>
    </div>
  )
}

export default Home