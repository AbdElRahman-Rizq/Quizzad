import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StudentUsersContex = createContext();

export function StudentUsersContexProvider (props) {

    const [StudentUsers, setStudentUsers] = useState([]);

  useEffect(() => {
      const fetchStudentData = async () => {
        try {
          const response = await axios.get(
            'http://localhost:5000/api/v1/students/',{
              withCredentials: true,
            }
          );

          if (response.data) {
              setStudentUsers(response.data);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        
        }
      };

      fetchStudentData();
    }, []);
    
  const StudentData = { StudentUsers , setStudentUsers};

  return (
    <StudentUsersContex.Provider value={ StudentData }>
      {props.children}
    </StudentUsersContex.Provider>
  );
}