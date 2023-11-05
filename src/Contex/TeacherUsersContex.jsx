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

    // assign teacher to class 
    // const teacherClass = async (teacherId) => {
    //   try {
    //     const response = await axios.put(
    //       `http://localhost:5000/api/v1/classes/3/${teacherId}`,
    //       { "status": 'ACTIVE' },
    //       {
    //         withCredentials: true,
    //       }
    //     );
    //     // Navigate to the same path
    //     Navigate('./');
    //     // Fetch updated data after navigation
    //     teacherClass();
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error("Error approving user:", error);
    //     // Handle error
    //   }
    // };
    
  const TeacherData = { TeacherUsers , setTeacherUsers};

  return (
    <TeacherUsersContex.Provider value={ TeacherData }>
      {props.children}
    </TeacherUsersContex.Provider>
  );
}