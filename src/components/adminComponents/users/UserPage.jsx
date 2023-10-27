import React from "react";
import { Col } from "react-bootstrap";
import AdminTable from "./AdminTable";
import UserNav from "./userNav";





function UserPage() {
    return (
        <>
                <Col className="pt-3">
                    <UserNav/>                    
                    <AdminTable/>
                </Col>
            
        </>
    );
}

export default UserPage;
