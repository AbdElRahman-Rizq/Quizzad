import { NavLink, Table } from 'react-bootstrap';
import vector from '../../../assets/images/admin.png';

export function ClassView() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg rounded-5">
        <div className="container my-2">
          <h1 className="navbar-brand text-light fs-4 px-2 fw-bold">classView</h1>
            
            <div className="admin text-center">
              <img src={vector} alt="Admin" />
          </div>
        </div>
      </nav> */}
      <div className='row '>
{/*----------------- class image and details --------------------*/}
      <div className='col-md-6 text-light pt-3 '>
        <div className="bg-light border p-2 rounded-5">
                        <div className="text-center">
                            <a href="#">
                            <img
                                className="rounded-5 img-fluid shadow mt-2"
                                src="https://images.pexels.com/photos/5212336/pexels-photo-5212336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="class Image"
                                style={{ width:'95%', height: '250px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="p-2 mx-3">

                        <span className="badge my-2 p-3 bg-dark fs-5 rounded-4">Grade 10</span>
                        <h3 className=" text-dark" style={{ maxWidth: '100%' }}>
                            Areodynamic class
                        </h3>
                        </div>

                        <div >
                            <h5 className="px-2 mx-3 text-dark" style={{ maxWidth: '100%' }}>
                                Mr. MOhamed basyoni 
                            </h5>
                            
                        </div>

                        <div >
                            <h5 className="p-2 mx-3 text-truncate text-dark w-100" style={{ maxWidth: '100%' }}>
                                Specialization : AeroDynamics
                            </h5>
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
                className="mt-2 userTable"
                >
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
            <button className=" mt-3 p-2 border-0 rounded-5 quizButton fs-5 fw-bold">Take class</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
