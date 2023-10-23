import React from 'react'
import AdminSidebar from '../components/layout/AdminSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../components/adminComponents/users/UserNav'
import NewRequest from '../components/adminComponents/users/NewRequest'
import "../style/Dashboard.css"


function AdminDashboard() {
  return (
    <>
        <Row className="m-0">
            <Col lg={3}>
    <AdminSidebar/>  
            </Col>
            <Col lg={9} className="col-md-8 pt-4 rightSideAdmin">
    <Navbar/>  
    <NewRequest/>
            </Col>
        </Row>
    </>
  )
}

export default AdminDashboard