import React from "react";
import { Col } from "react-bootstrap";
import AdminTable from "./AdminTable";
import UserNav from "./UserNav";





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
