import React from "react";
import AdminSidebar from "../components/layout/AdminSidebar";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/adminComponents/users/UserNav";
import NewRequest from "../components/adminComponents/users/NewRequest";
import "../assets/css/dashboard.css";
import { SideBar } from "../components/layout/SideBar";
import WelcomeSide from "../components/layout/WelcomeSide";
import MiniDash from "../components/layout/MiniDash";

function AdminDashboard() {
    return (
        <>
            <Row className="m-0">
                <Col lg={3}>
                    <SideBar/>
                </Col>
                <Col lg={9} className="col-md-8 pt-4 rightSideAdmin">
                    <Navbar />
                    <WelcomeSide></WelcomeSide>
                    <div className="row">
                        <div className="col-md-4">
                            <MiniDash/>
                        </div>
                        <div className="col-md-4">
                            <MiniDash/>
                        </div>
                        <div className="col-md-4">
                            <MiniDash/>
                        </div>
                    </div>
                    {/* <NewRequest /> */}
                </Col>
            </Row>
        </>
    );
}

export default AdminDashboard;
