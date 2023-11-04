import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Table } from 'react-bootstrap';
import { Circles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import '../../../assets/css/class.css';
import { gradeLevelMap } from '../../../controls/gradeLevel';


export function ClassView() {
    const { id } = useParams();
    const [myClass, setMyClass] = useState({});
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/classes/${id}`, {
          withCredentials: true,
        });
        console.log(response.data);
        setMyClass(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [id]);
      
      if (loading) {
        return (
          <div id="loading">
            <Circles
              height={500}
              width={60}
              color="#89288F"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        );
      }

      
    return (
     
    <div className='row '>
{/*----------------- class image and details --------------------*/}
        <div className='col-md-6 text-light pt-3 '>
                <div className="bg-light border p-2 rounded-5">
                                <div className="text-center">
                                    <a href="#">
                                    <img
                                        className="rounded-5 img-fluid shadow mt-2"
                                        src="https://images.pexels.com/photos/4117968/pexels-photo-4117968.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="myClass Image"
                                        style={{ width:'95%', height: '250px', objectFit: 'cover' }}
                                        />
                                    </a>
                                </div>
                                <div className="col-md-3 my-2">
                                    <span className="badge bg-warning p-2 mx-3 b-3 fs-6 rounded-5 w-100">{myClass.difficultyLevel}</span>
                                </div>

                                <div className="p-2">
                                <h4 className="mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                <i className="fa fa-solid fa-landmark fs-3 me-3" style={{color: "#89288F"}}/>
                                {myClass.className}
                                </h4>
                                </div>
                                
                                <div className="p-2">
                                {/* <span className="badge bg-warning mb-2 b-3 fs-6 rounded-5">Intermediate</span> */}
                                <h6 className="mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                Description :  {myClass.description}
                                </h6>
                                </div>
                                <div className='row'>
                                <div className="col-md-6">
                                    <h6 className="p-2 mx-3 text-dark" style={{ maxWidth: '100%' }}>
                                    <i className="fa fa-solid fa-user-graduate fs-5 me-3" style={{color: "#89288F"}}/>
                                     {gradeLevelMap[myClass.gradeLevel]}
                                    </h6>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="p-2 mx-3 text-dark" style={{ maxWidth: '100%' }}>
                                    <i className="fa fa-brands fa-artstation fs-5 me-3" style={{color: "#89288F"}}/>
                                    No. Quizzes : {myClass.classQuizzes.length}
                                    </h6>
                                </div>
                                </div>    
                                <div className='row'>
                                <div className="col-md-6">
                                    <h6 className="p-2 mx-3 text-dark" style={{ maxWidth: '100%' }}>
                                    <i className="fa fa-light fa-chalkboard-user fs-6 me-3" style={{color: "#89288F"}}/>
                                        No. teachers : {myClass.teachers.length}
                                    </h6>
                                </div>

                                <div className="col-md-6">
                                    <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                    <i className="fa fa-light fa-graduation-cap fs-6 me-3" style={{color: "#89288F"}}/>
                                        No. students : {myClass.students.length}
                                    </h6>
                                </div>
                                </div>

                                                
                </div>
        </div>
                
{/*----------------- class Specific and details --------------------*/}
        <div className='col-md-6 text-light pt-3'>
            <div className="bg-light border p-3 rounded-5">
                <div className="ps-2">
                <h4 className="mx-1 text-truncate text-dark text-center" >
                    Class Members
                </h4>
                </div>
                {/*-------- table ------*/}
                <div >

                    <Table  hover responsive
                    className="mt-2 userTable">
                        <thead className="custom-thead">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody className="userBodyTable">
                        <tr>
                            <td>1</td>
                            <td>mohamed basyoni</td>
                            <td>student</td>
                            <td>
                                <div className="p-0">
                                <i className="fa-solid fa-trash-can mx-3 fs-4 text-danger" />
                                </div>
                            </td>
                        </tr>   
                        <tr>
                            <td>2</td>
                            <td>mohamed basyoni</td>
                            <td>student</td>
                            <td>
                                <div className="p-0">
                                <i className="fa-solid fa-trash-can mx-3 fs-4 text-danger" />
                                </div>
                            </td>
                            </tr> 
                <tr>
                            <td>3</td>
                            <td>mohamed basyoni</td>
                            <td>student</td>
                            <td>
                                <div className="p-0">
                                <i className="fa-solid fa-trash-can mx-3 fs-4 text-danger" />
                                </div>
                            </td>
                            </tr>        
                        </tbody>
                    </Table>
                </div>
                <div className="d-flex">
                <button className=" m-3 p-2  rounded-5 quizButton fs-5 ">Add members</button>
                <button className=" m-3 p-2  rounded-5 quizButton fs-5 ">View Quizzes</button>
                </div>
            </div>
            </div>
</div>
  )
}
