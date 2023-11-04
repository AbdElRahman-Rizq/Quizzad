// UserContext.js
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [myUser, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/v1/users/profile',
          {
            withCredentials: true,
          }
        );

        if (response.data.message === 'User profile retrieved successfully') {
          setUser(response.data.user);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      
      }
    };

    fetchUserProfile();
  }, []);

  const userData = { myUser };

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
}
