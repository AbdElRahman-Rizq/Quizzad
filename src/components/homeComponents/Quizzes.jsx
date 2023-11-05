import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import QuizCard from './QuizCard'
import '../../assets/css/Home.css'


function Quizzes() {
  return (
    <div id='quizzes' className="smooth-scroll">
    <Container className='d-flex flex-column justify-content-center align-items-center h-100 py-5' >
        <Row className='text-center pb-4    '>
            <h1> Explore Our Quizzes</h1>
            <p>Quizzes provide an opportunity for real-time engagement and interactive learning experiences for all grades</p> 
        </Row>
        <Row className='justify-content-center align-items-center'>
          
          <QuizCard imgSrc={"../src/assets/images/OnlineTest.svg"}/>
          <QuizCard imgSrc={"../src/assets/images/studentBar.svg"}/>
          <QuizCard imgSrc={"../src/assets/images/teacherBar.svg"}/>
          <QuizCard imgSrc={"../src/assets/images/Progress indicator-pana.svg"}/>
          <QuizCard imgSrc={"../src/assets/images/Exams-bro.svg"}/>
          <QuizCard imgSrc={"../src/assets/images/Business support-amico.svg"}/>
      
        </Row>
        
    </Container>
    </div>
  )
}

export default Quizzes