import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../../style/AdminDash.css"
function ButtonForSide({content,icon}) {
  return (
    <div className='me-4 my-2 bg-light buttonForSidebar text-center'>
        <Row>
            <Col className='ms-2 my-2'>
            <i class={icon}></i>
            </Col>
            <Col lg={10} className='ps-4 d-flex'>
            <h6>{content}</h6>
            </Col>
        </Row>
    </div>
  )
}

export default ButtonForSide