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
      <Table hover responsive
      className="mt-4 userTable"
      >
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
                                    <i className="fa-solid fa-eye mx-2"></i>
                                    <i className="fa-regular fa-pen-to-square fs-6 mx-2 text-success"></i>
                                    <i className="fa-regular fa-trash-can fs-6 mx-2 text-danger"></i>
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
