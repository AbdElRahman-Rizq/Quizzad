import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TeacherUsersContex = createContext();

export function TeacherUsersContexProvider (props) {

    const [TeacherUsers, setTeacherUsers] = useState([]);

    useEffect(() => {
      const fetchTeacherData = async () => {
        try {
          const response = await axios.get(
            'http://localhost:5000/api/v1/teachers/',{
              withCredentials: true,
            }
          );

          if (response.data) {
              setTeacherUsers(response.data);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        
        }
      };

      fetchTeacherData();
    }, []);
    
  const TeacherData = { TeacherUsers , setTeacherUsers};

  return (
    <TeacherUsersContex.Provider value={ TeacherData }>
      {props.children}
    </TeacherUsersContex.Provider>
  );
}