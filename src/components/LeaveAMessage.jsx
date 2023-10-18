import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function LeaveAMessage() {
  return (
    <Container className="p-5" id='contactUs'>
      <Row className="my-5 text-center">
        <h1>LET’S ANSWER YOUR QUERIES</h1>
      </Row>
      <Row>
        <Col lg={6} className="d-flex flex-column pe-4">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            style={{
              borderRadius: "15px",
              border: "1px solid rgba(171, 152, 186, 0.50)",
              background: "#FFF",
              padding: "1.5% 0",
              marginBottom: "3%",
              width: "90%",
            }}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            style={{
              borderRadius: "15px",
              border: "1px solid rgba(171, 152, 186, 0.50)",
              background: "#FFF",
              padding: "1.5% 0",
              marginBottom: "3%",
              width: "90%",
              
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            style={{
              borderRadius: "15px",
              border: "1px solid rgba(171, 152, 186, 0.50)",
              background: "#FFF",
              padding: "1.5% 0",
              marginBottom: "3%",
              width: "90%",
            }}
          />
        </Col>

        <Col>
          <textarea
            id="message"
            rows="8"
            placeholder="LEAVE A MESSAGE FOR US"
            style={{
              width: "80%",
              borderRadius: "20px",
              border: " 1px solid rgba(171, 152, 186, 0.50)",
              background: " #FFF",
              padding:"2.1%",
              marginLeft:"5%",
              marginTop:"4%"
            }}
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-end" style={{paddingRight:"8.5%"}}>
  <button  className='themedButton'
    style={{
        border:"none",
        borderRadius: "100px",
        width:"11%",
        padding:".7%",
    }}> SUBMIT</button>
</Row>
    </Container>
  );
}

export default LeaveAMessage;
