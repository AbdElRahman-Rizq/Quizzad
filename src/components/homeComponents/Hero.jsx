import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemedButton from '../layout/ThemedButton';
function Hero() {
  return (
    <>
    <div style={{
        backgroundRepeat:" no-repeat",
        backgroundSize: "100% 100%",
        backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, .66) 0%, rgba(0, 0, 0, 0.00) 100%),url('../src/assets/images/background.jpg')",
        height:'calc(100vh - 10px)',
        color:"white"
    }}
    id='home'
    >
        <Container className='h-100'>
            <Row className='h-100'>
                <Col lg={8} md={12} className='d-flex flex-column justify-content-center pt-5'>
                    <h1 className='pb-4 mt-5' style={{fontSize:"2.7rem"}}>
                    Unlock your learning potential 
                    </h1>
                    <p className=' pb-4' style={{fontSize:"1.25 rem",width:"85%"}}>
                    Choose from thousands of Quizzes and a vast collection of study materials to fuel your educational journey
                    </p>
                    <Col >
                   <ThemedButton content={'Explore Our Quizzes'} propWidth={"16rem"} propPadding={"1.8% 0"}/>
                    </Col>
                </Col>
                <Col lg={4} md={0}></Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Hero