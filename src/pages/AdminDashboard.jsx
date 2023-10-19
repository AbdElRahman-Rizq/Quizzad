import React from 'react'
import AdminSidebar from '../components/adminComponents/adminSidebar'
import { Col, Container, Row } from 'react-bootstrap'


function AdminDashboard() {
  return (
    <>
        <Row>
            <Col lg={4}>
    <AdminSidebar/>  
            </Col>
        </Row>
    </>
  )
}

export default AdminDashboard