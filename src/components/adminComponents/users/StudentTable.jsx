import React, { useContext,  } from "react";
import { Circles } from "react-loader-spinner";
import "../../../assets/css/Users.css"
import { Container, NavLink, Table } from "react-bootstrap";
import { StudentUsersContex } from "../../../Contex/StudentUsersContex";
import { gradeLevelMap } from "../../../controls/gradeLevel";
import '../../../assets/css/class.css'


export default function TeacherTable() {
    const { StudentUsers } = useContext( StudentUsersContex )
  
    if (StudentUsers.length === 0) {
        return (
            <div id="loading">
                <Circles
                    height={500}
                    width={60}
                    color="#89288F"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }
    console.log(StudentUsers);
    return (
        <Container >
            <Table hover responsive className="userTable">
                <thead className="custom-thead">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>grade</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="userBodyTable Scroller">
                    {StudentUsers.map((student) => (

                            <tr key={student.id}>
                                <td>{student.id} </td>
                                <td>{student.profile.firstName} {student.profile.lastName}</td>
                                <td>student</td>
                                <td>{gradeLevelMap[student.profile.gradeLevel]}</td>
                                <td>{student.profile.email}</td>
                                <td>
                                    <div className="p-0">
                                        <NavLink className="fa fa-solid fa-eye mx-3 fs-5 text-warning"/>
                                        <NavLink className="fa-solid fa-pen-to-square mx-3 fs-5 text-info"/>
                                        <NavLink className="fa-solid fa-trash-can mx-3 fs-5 text-danger"/>
                                    </div>
                                </td>
                            </tr>

                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
