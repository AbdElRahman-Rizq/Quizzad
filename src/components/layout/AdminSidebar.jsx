import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/images/logo.png";
import "../../style/AdminDash.css"
import ButtonForSide from './ButtonForSide';
 {/* logo */}
function AdminSidebar() {
  return (
    <div className='m-4 bg-warning' style={{
        height:"90vh",
        width:"60%",
        borderRadius: "40px",
        background: "linear-gradient(180deg, #B08EC9 0%, #EADFF2 100%)",
        padding:"4%",
        color:"white",
    }}>
        <Container className='d-flex flex-column'>
            <Row className='d-flex flex-row pe-4 mb-4'>
                <Col lg={5} className='mt-2 ms-0'>
        <img src={logo} alt="" width={"150%"}/>
                </Col>
                <Col lg={6} className='d-flex justify-content-start'>
        <p id='quizZad'>QuizZAD</p>
                </Col>
            </Row>
            <Row>
                <ButtonForSide content={"Dashboard"} icon={"fa fa-house"}/>
                <ButtonForSide content={"Classes"} icon={"fa fa-chalkboard-user"}/>
                <ButtonForSide content={"Quizzes"} icon={"fa fa-book-open"}/>
                <ButtonForSide content={"Users"} icon={"fa fa-list-check"}/>
            </Row>
            <Row style={{marginTop:"45%"}}>
            <ButtonForSide content={"Classes"} icon={"fa fa-gear"}/>
            </Row>
        </Container>
    </div>
  )
}

export default AdminSidebar