import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/adminComponents/users/UserNav";
import NewRequest from "../components/adminComponents/users/NewRequest";
import "../assets/css/AdminDash.css";
import { SideBar } from "../components/layout/SideBar";
import WelcomeSide from "../components/layout/WelcomeSide";
import MiniDash from "../components/layout/MiniDash";

function AdminUsers() {
    return (
        <>
            <Row className="m-0">
                <Col lg={3} className="py-2">
                    <SideBar/>
                </Col>
                <Col lg={9} className="col-md-8 pt-4 rightSideAdmin">
                    <Navbar />                    
                    <NewRequest />
                </Col>
            </Row>
        </>
    );
}

export default AdminUsers;
