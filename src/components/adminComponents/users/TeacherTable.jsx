import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

export default function TeacherTable() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setTeachers(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    if (teachers.length === 0)
        return (
            <div className="d-flex justify-content-center align-items-center mt-5">
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
        <div className="container tableContainer">
            <table className="table table-striped table-hover table-sm my-5 border rounded-5 shadow ms-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Role</th>
                        <th>Specialization</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher.id}>
                            <td className="pb-2">{teacher.id}</td>
                            <td className="pb-2">{teacher.name}</td>
                            <td className="pb-2">{teacher.email}</td>
                            <td className="pb-2">{teacher.phone}</td>
                            <td className="pb-2">
                                <div className="cradIcon">
                                    <i className="fa-solid fa-eye mx-2"></i>
                                    <i className="fa-regular fa-pen-to-square fs-6 mx-2 text-success"></i>
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
