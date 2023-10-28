import React from "react";
import { Col } from "react-bootstrap";
import AdminTable from "./AdminTable";
import UserNav from "./userNav";






function UserPage() {
    return (
        <>
                <Col>
                    <UserNav/>                    
                    <AdminTable/>
                </Col>
            
        </>
    );
}

export default UserPage;
