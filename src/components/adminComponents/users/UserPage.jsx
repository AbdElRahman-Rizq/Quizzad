import React from "react";
import { Col } from "react-bootstrap";
import AdminTable from "./AdminTable";
import UserNav from "./userNav";
import TeacherTable from "./TeacherTable";
import StudentTable from "./StudentTable";






function UserPage() {
    return (
        <>
                <Col>
                    <UserNav/>                    
                    <Routes>
                        <Route path='myquiz' element={<AdminTable/>}/>
                        <Route path='newquiz' element={<TeacherTable/>}/>
                        <Route path='quizview' element={<StudentTable/>}/>
                    </Routes>
                </Col>
            
        </>
    );
}

export default UserPage;
