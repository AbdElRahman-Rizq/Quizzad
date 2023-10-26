import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import "../../assets/css/landingPage.css"
function JoinUs() {
  return (
    <div style={{
        background:"#872991",
        height:"390px",
        position:"relative",
    }}
   
    >
        <Container>
            <Row 
            style={{
                paddingTop:"5%",                
                paddingLeft:"1%",
                color:"white"
            }}>
                <Col lg={6} sm={12} id='JoinUsMain'>
                <h1 style={{paddingBottom:"3%",}}>Your pathway to smarter learning</h1>
                <h3 style={{paddingBottom:"3%",}}>Engage, learn, and grow with our Quizzes platform</h3>
                <Col>
                <button 
                className='btnJoinUS'
                style={{
                    borderRadius: "100px",
                    border:"none",
                    padding:"1.8% 4.5%",
                    marginRight:"3% ",
                    marginTop:"2%",
                    backgroundColor:"white",
                    
                }}>
                    Test yourself
                    </button>
                <button 
                className='btnJoinUS'
                style={{
                    borderRadius: "100px",
                    border:"none",
                    padding:"1.8% 4.5%",
                    backgroundColor:"white",
                    
                }}>
                    Join Us Now
                    </button>
                </Col>
                </Col>
                <Col lg={6} id='joinUsImg'>
                <img src="../src/assets/images/lap.png" alt="img" style={{
                    position:"absolute",
                    bottom:"-4.2rem",
                    right:"1rem",
                    width:"43rem"
                }}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default JoinUs