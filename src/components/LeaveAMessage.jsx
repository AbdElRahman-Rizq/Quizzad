import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ThemedButton from "./ThemedButton";

function LeaveAMessage() {
  return (
    <Container className="py-4" id="r"  id='contactUs'>
      <Row>
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
              marginBottom: "1%",
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
              marginBottom: "1%",
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
              marginBottom: "1%",
              width: "90%",
            }}
          />
        </Col>

        <Col>
          <textarea
            id="message"
            rows="7"
            placeholder="LEAVE A MESSAGE FOR US"
            style={{
              width: "80%",
              borderRadius: "10px",
              border: " 1px solid rgba(171, 152, 186, 0.50)",
              background: " #FFF",
              padding:"1%",
              marginLeft:"5%",
              marginTop:"4%"
            }}
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-end pt-2" style={{paddingRight:"8.5%"}}>
  <button  className='themedButton'
    style={{
        border:"none",
        borderRadius: "7px",
        width:"11%",
        padding:".7%",
    }}> SUBMIT</button>
</Row>
    </Container>
  );
}

export default LeaveAMessage;
