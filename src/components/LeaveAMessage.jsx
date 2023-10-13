import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function LeaveAMessage() {
  return (
   <Container>
    <Row>
        <h1>LET’S ANSWER YOUR QUERIES</h1>
    </Row>
    <Row>
      <Col lg={6} className='d-flex flex-column'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' />

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
      </Col>

      <Col>
        <label htmlFor='message'>LEAVE A MESSAGE FOR US</label>
        <textarea id='message' rows='5' />
      </Col>
    </Row>
   </Container>
  )
}

export default LeaveAMessage