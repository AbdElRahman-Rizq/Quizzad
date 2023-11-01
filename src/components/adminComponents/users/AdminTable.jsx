import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import "../../../assets/css/Users.css"
import { Container, NavLink, Table } from "react-bootstrap";

export default function AdminTable() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setRequests(data);
            })
            .catch((err) => {
            console.log("err:", err);
            });
    }, []);

    if (requests.length === 0) {
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
    <Container >
        <Table hover responsive className=" userTable">
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
            {requests.map((request) => ( request.id<8 ?<tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.name}</td>
                <td>{request.username}</td>
                <td>{request.phone}</td>
                <td>{request.email}</td>
                <td>
                    <div className="p-0">
                    <NavLink className="fa-solid fa-check mx-3 fs-3 text-success "/>
                    <NavLink className="fa-solid fa-xmark mx-3 fs-3 text-danger " />
                    </div>
                </td>
                </tr>
                : null

            ))}
            </tbody>
        </Table>
    </Container>
);
}
