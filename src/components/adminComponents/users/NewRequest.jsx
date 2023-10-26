import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import "../../../assets/css/Table.css"
import { Container, Table } from "react-bootstrap";
export default function NewRequest() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setRequests(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (requests.length === 0) {
    return (
      <div className="table table-striped table-hover table-sm my-5 border rounded-5 shadow">
        <Circles
          height={500}
          width={50}
          color="#4fa94d"
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
      <Table striped hover responsive
      className="mt-4 userTable"
      >
        <thead className="custom-thead">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="userBodyTable">
          {requests.map((request) => (
            <tr key={request.id} style={{ borderRadius: '10px' }}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.username}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
