import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import "../../../assets/css/Users.css"
import { Container, NavLink, Table } from "react-bootstrap";

export default function TeacherTable() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setTeachers(data);
            })
            .catch((err) => {
                console.log("err:", err);
            });
    }, []);

    if (teachers.length === 0) {
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

    return (
        <Container>
            <Table hover responsive className="userTable">
                <thead className="custom-thead">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Specific</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="userBodyTable">
                    {teachers.map((teacher) => (
                        teacher.id < 8 ? (
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.username}</td>
                                <td>{teacher.phone}</td>
                                <td>{teacher.email}</td>
                                <td>
                                    <div className="p-0">
                                        <NavLink className="fa fa-solid fa-eye mx-3 fs-5 text-warning"/>
                                        <NavLink className="fa-solid fa-pen-to-square mx-3 fs-5 text-info"/>
                                        <NavLink className="fa-solid fa-trash-can mx-3 fs-5 text-danger"/>
                                    </div>
                                </td>
                            </tr>
                        ) : null
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
