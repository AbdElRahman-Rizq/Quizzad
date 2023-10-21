import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

export default function NewRequest() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
        <div className="container m-0">
            <table className="table table-striped text-center table-hover table-sm my-4 shadow m-0 bg-info bg-opacity-10 border border-0 rounded">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Id</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">Grade</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2 ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td className="px-4 py-2">{request.id}</td>
                            <td className="px-4 py-2">{request.name}</td>
                            <td className="px-4 py-2">{request.address.suite}</td>
                            <td className="px-4 py-2">20</td>
                            <td className="px-4 py-2">{request.email}</td>
                            <td className="px-4 py-2">
                                <div className="cradIcon">
                                    <i className="fa-solid fa-circle-check mx-2 fs-5 text-success"></i>
                                    <i className="fa-solid fa-circle-xmark fs-5 text-danger"></i>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
