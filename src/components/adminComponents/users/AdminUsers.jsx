import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../assets/css/AdminDash.css";
import { SideBar } from "../../layout/SideBar";
import NewRequest from "./NewRequest";
import UserNav from "./UserNav";



function AdminUsers() {
    return (
        <>
            <Row className="m-0">
                <Col lg={3} className="py-2">
                    <SideBar/>
                </Col>
                <Col lg={9} className="col-md-8 pt-4 rightSideAdmin">
                    <UserNav/>                    
                    <NewRequest/>
                </Col>
            </Row>
        </>
    );
}

export default AdminUsers;
