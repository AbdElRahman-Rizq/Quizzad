import React from 'react'
import AdminSidebar from '../components/layout/AdminSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../components/layout/Navbar'
import NewRequest from '../components/layout/NewRequest'


function AdminDashboard() {
  return (
    <>
        <Row className="ps-2">
            <Col lg={4}>
    <AdminSidebar/>  
            </Col>
            <Col lg={8} className="col-md-8 pt-4 rightSideDashboard ps-2">
    <Navbar/>  
    <NewRequest/>
            </Col>
        </Row>
    </>
  )
}

export default AdminDashboard