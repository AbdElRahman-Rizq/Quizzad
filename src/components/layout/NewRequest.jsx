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
        <div className="container">
            <table className="table table-striped table-hover table-sm my-5   shadow m-5 p-3 bg-info bg-opacity-10 border border-info border-0 rounded">
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
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td className="ps-5">{request.id}</td>
                            <td>{request.name}</td>
                            <td>{request.address.suite}</td>
                            <td>{request.email}</td>
                            <td>{request.phone}</td>
                            <td>
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
