import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../style/AdminDash.css"
function ButtonForSide({content,icon}) {
  return (
    <div className='me-4 my-2 bg-light buttonForSidebar text-center w-100'>
        <Row className='ms-2 '>
            <Col className='my-2' lg={2}>
            <i class={icon}></i>
            </Col>
            <Col lg={6} className='ps-4 d-flex ms-4'>
            <h6>{content}</h6>
            </Col>
        </Row>
    </div>
  )
}

export default ButtonForSide