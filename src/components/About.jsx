import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function About() {
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, .76) 0%, rgba(0, 0, 0, 0.10) 100%),url('../src/assets/about.jpg')",
        color: 'white',
        height: '370px',
      }}
      id='aboutUs'
    >
      <Container className='h-100 pt-5'>
        <Row className='h-100 w-100 flex-column text-center align-items-center '>
          <Col
            lg={8}
            md={12}
            className='d-flex flex-column justify-content-center align-items-center h-100' // Added align-items-center class
          >
            <h1 className='pb-4' style={{ fontSize: '2.9rem' }}>
            About Us
            </h1>
            <p className='pb-4' style={{ fontSize: '1.25rem', width: '85%' }}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi dolor libero ratione qui quasi repellendus tempore maxime quis amet iusto in ut itaque consequatur aspernatur eligendi rem ipsa illum.
            </p>
          </Col>
          <Col lg={4} md={0}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;