import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function JoinUs() {
  return (
    <div style={{
        background:"#872991",
        height:"350px",
        position:"relative",
    }}
   
    >
        <Container>
            <Row 
            style={{
                paddingTop:"4%",
                paddingLeft:"1%",
                color:"white"
            }}>
                <Col>
                <h1>Your pathway to smarter learning</h1>
                <h3>Engage, learn, and grow with our Quizzes platform</h3>
                <Col>
                <button style={{
                    borderRadius: "100px",
                    border:"none",
                    padding:"1.8% 4.5%",
                    marginRight:"3% ",
                    marginTop:"2%",
                    backgroundColor:"white",
                    
                }}>
                    Test yourself
                    </button>
                <button style={{
                    borderRadius: "100px",
                    border:"none",
                    padding:"1.8% 4.5%",
                    backgroundColor:"white",
                    
                }}>
                    Join Us Now
                    </button>
                </Col>
                </Col>
                <Col>
                <img src="../src/assets/lap.png" alt="img" style={{
                    position:"absolute",
                    bottom:"-70px",
                    right:"10px",
                    width:"48%"
                }}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default JoinUs