import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const { id } = useParams();
  const [myUser, setMyUser] = useState([]);

  async function fetchUserData() {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/users/${id}`, {
        withCredentials: true,
      });

      if (response.data.message === 'User data fetched successfully') {
        setMyUser(response.data.user);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const userData = { myUser };

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
}
