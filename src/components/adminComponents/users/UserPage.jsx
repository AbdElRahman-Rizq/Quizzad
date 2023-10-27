import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SideBar } from "../../layout/SideBar";
import AdminTable from "./AdminTable";
import  UserNav  from "./userNav";




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
