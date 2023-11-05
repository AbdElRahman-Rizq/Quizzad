import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemedButton from '../layout/ThemedButton';
import '../../assets/css/Home.css'
function Hero() {
  return (
    <>
        <section className='hero'>
        <Container className='h-100 text-center'>
            <Row className='h-100 pt-5'>
                <Col lg={8} md={12} className='d-flex flex-column justify-content-center pt-5'>
                    <h1 className='pb-4 mt-5 text-white' style={{fontSize:"2.7rem"}}>
                    Unlock your learning potential 
                    </h1>
                    <p className=' pb-4 text-light' style={{fontSize:"1.25rem",}}>
                    Choose from thousands of Quizzes and a vast collection of study materials to fuel your educational journey
                    </p>
                    <Col >
                   <ThemedButton content={'Explore Our Quizzes'} propWidth={"16rem"} propPadding={"1.8% 0"}/>
                    </Col>
                </Col>
                <Col lg={4} md={0}></Col>
            </Row>
        </Container>
        </section>
       
    </>
  )
}

export default Hero