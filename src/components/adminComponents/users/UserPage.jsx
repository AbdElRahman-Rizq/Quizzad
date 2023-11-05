import React from "react";
import { Col } from "react-bootstrap";
import AdminTable from "./AdminTable";
import UserNav from "./userNav";
import TeacherTable from "./TeacherTable";
import StudentTable from "./StudentTable";
import { Route, Routes } from "react-router";
import { TeacherUsersContexProvider } from "../../../Contex/TeacherUsersContex";
import { StudentUsersContexProvider } from "../../../Contex/StudentUsersContex";






function UserPage() {
    return (
        <>
                <Col>
                    <UserNav/>                    
                    <Routes>
                    <TeacherUsersContexProvider>
      <StudentUsersContexProvider>
                        <Route path='/' element={<AdminTable/>}/>
                        <Route path='/teacher' element={<TeacherTable/>}/>                        
                        <Route path='/student' element={<StudentTable/>}/>
                        </StudentUsersContexProvider>
                        </TeacherUsersContexProvider>
                    </Routes>
                </Col>
            
        </>
    );
}

export default UserPage;
