import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { Container, NavLink, Table } from "react-bootstrap";
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from "react-router";

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/users/", {
        withCredentials: true,
      });
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const handleApproveUser = async (userId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/users/${userId}`,
        { "status": 'ACTIVE' },
        {
          withCredentials: true,
        }
      );
      // Navigate to the same path
      navigate('./');
      // Fetch updated data after navigation
      fetchData();
      console.log(response.data);
    } catch (error) {
      console.error("Error approving user:", error);
      // Handle error
    }
  };
//  Delet user
const cancleUser = async (userId) => {
    try {
     
      const response = await axios.delete(
        `http://localhost:5000/api/v1/users/${userId}`,
        {
          withCredentials: true,
        }
      );
      fetchData();
      console.log(response.data);
    } catch (error) {
      console.error("Error approving user:", error);
    }
  };

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
      <Table hover responsive className="userTable">
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
                  <NavLink
                    className="fa-solid fa-check mx-3 fs-3 text-success"
                    onClick={() => handleApproveUser(user.id)}
                    />
                  <NavLink
                    className="fa-solid fa-xmark mx-3 fs-3 text-danger"
                    onClick={() => cancleUser(user.id)}
                    // Add an onClick handler for the reject action if needed
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminTable;
