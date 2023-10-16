import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Quizzes from '../components/Quizzes'
import About from '../components/about'
import LeaveAMessage from '../components/LeaveAMessage'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div style={{background: "#E9E2EE", height:"100%"}}>
    <Navbar/>
    <Hero/>
    <Quizzes/>
    <About/>
    <LeaveAMessage/>
    <JoinUs/>
    <Footer/>
    </div>
  )
}

export default Home