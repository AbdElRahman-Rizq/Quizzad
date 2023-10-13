import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import QuizCard from './QuizCard'

function Quizzes() {
  return (
    <>
    <Container className='d-flex flex-column justify-content-center align-items-center h-100 py-5'>
        <Row className='text-center pb-4    '>
            <h1> Explore Our Quizzes</h1>
            <p>Quizzes provide an opportunity for real-time engagement and interactive learning experiences for all grades</p> 
        </Row>
        <Row className='d-flex flex-column'>
          <Col className='d-flex justify-content-between align-items-center pb-5' >
          <QuizCard/>
          <QuizCard/>
          <QuizCard/>
          </Col>
          <Col className='d-flex justify-content-between align-items-center'>
          <QuizCard/>
          <QuizCard/>
          <QuizCard/>
          </Col>
        </Row>
        
    </Container>
    </>
  )
}

export default Quizzes