import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import "../../../assets/css/Users.css";
import { Container, NavLink, Table } from "react-bootstrap";

export default function AdminTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
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
      <Table hover responsive className=" userTable">
        <thead className="custom-thead">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="userBodyTable">
          {users.slice(0, 8).map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <div className="p-0">
                  <NavLink className="fa-solid fa-check mx-3 fs-3 text-success" />
                  <NavLink className="fa-solid fa-xmark mx-3 fs-3 text-danger" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
