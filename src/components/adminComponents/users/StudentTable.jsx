import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner"
import '../../../assets/css/StudentTable.css'



export default function StudentTable() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setStudents(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    


    if (students.length === 0)
    return (
        <div className="table table-striped table-hover table-smmy-5 border rounded-5 shadow">
            <Circles
            height="800" 
            width="100"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
    );

    return (
        <div className="container">
        <table className="table table-striped table-hover table-smmy-5 border rounded-5 shadow m-5 ">
            <thead className="">
            <tr>
                <th className="ps-5">Id</th>
                <th className="ps-5">Name</th>
                <th>Role</th>
                <th>Grade</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                <tr key={student.id}>
                    <td className="ps-5">{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.address.suite}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                        <div className="cradIcon">
                        <i className="fa-solid fa-eye mx-2"></i>
                        <i className="fa-regular fa-pen-to-square fs-6 mx-2 text-success "></i>
                        <i className="fa-regular fa-trash-can fs-6 mx-2 text-danger"></i>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}
