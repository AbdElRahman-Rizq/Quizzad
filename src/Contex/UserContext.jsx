import axios from "axios";
import {useEffect, useState } from "react";
import { UserContext } from "./UserContext";
// import { useParams } from "react-router-dom";


export function UserContextProvider(props) {

  // const { id } = useParams();

  async function fetchUserData() {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/auth/login`,{
        withCredentials: true,
      });

      if (response.data.message === 'Login done successfully') {
        setMyUser(response.data.user);
        console.log("myUser");
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }


  return (
    <UserContext.Provider value={{myUser , setMyUser}}>
      {props.children}
    </UserContext.Provider>
  );
}
