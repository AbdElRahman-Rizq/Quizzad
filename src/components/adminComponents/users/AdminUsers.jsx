import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SideBar } from "../../layout/SideBar";
import AdminTable from "./AdminTable";
import  UserNav  from "./userNav";




function AdminUsers() {
    return (
        <>
            <Row className="m-0">
                <Col lg={3}>
                    <SideBar/>
                </Col>
                <Col lg={9} className="col-md-8 pt-3 rightSideAdmin">
                    <UserNav/>                    
                    <AdminTable/>
                </Col>
            </Row>
        </>
    );
}

export default AdminUsers;
