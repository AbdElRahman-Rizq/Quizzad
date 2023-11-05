import React from 'react'
import Navbar from '../components/homeComponents/Navbar'
import Hero from '../components/homeComponents/Hero'
import Quizzes from '../components/homeComponents/Quizzes'
import About from '../components/homeComponents/about'
import LeaveAMessage from '../components/homeComponents/LeaveAMessage'
import JoinUs from '../components/homeComponents/JoinUs'
import Footer from '../components/homeComponents/Footer'
import '../assets/css/Home.css'


function Home() {
  
  return (
    <div className='main-home' style={{background: "#E9E2EE"}}>
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