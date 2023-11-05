import React, { useContext } from 'react'
import { Accordion, Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { TeacherUsersContex } from '../../../Contex/TeacherUsersContex'
export function AddMembers() {
  const { TeacherUsers } = useContext(TeacherUsersContex);
  
  console.log(TeacherUsers);  
  return (
    <div>
                <Accordion defaultActiveKey="null">
                  <Accordion.Item className='my-3 rounded' eventKey="0">
                    <Accordion.Header className="accordion-header text-light">Add Teacher</Accordion.Header>
                    <Accordion.Body>
                      <div className="teacher">
                        <div className="input-group row">
                        <label htmlFor="className" className="form-label px-3 text-center fs-3">All teachers</label>
                      </div>
                      </div>
                      <div>
                        <Table hover responsive className="mt-2 userTable">
                          <thead className="custom-thead">
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Specialization</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody className="userBodyTable">
                          {TeacherUsers.map((teacher) => (
                          <tr key={teacher.id}>
                              <td>{teacher.id} </td>
                              <td>{teacher.profile.firstName} {teacher.profile.lastName}</td>
                              <td>{teacher.profile.specialization}</td>
                              <td>
                                  <div className="p-0 pt-1">
                                      <NavLink className="fa-solid fa-plus mx-3 fs-5 text-success"/>
                                  </div>
                              </td>
                          </tr>

                          ))}
                          </tbody>
                        </Table>
                      </div>
                      <div>
                      <div className="teacher">
                        <hr />
                        <div className="input-group row">
                        <label htmlFor="className" className="form-label px-3 text-center fs-3">Class teachers</label>
                      </div>
                      </div>
                        <Table hover responsive className="mt-2 userTable">
                            <thead className="custom-thead">
                              <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Specialization</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody className="userBodyTable">
                            {TeacherUsers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td>{teacher.id} </td>
                                <td>{teacher.profile.firstName} {teacher.profile.lastName}</td>
                                <td>{teacher.profile.specialization}</td>
                                <td>
                                    <div className="p-0 pt-1">
                                        <NavLink className="fa-solid fa-trash-can mx-3 fs-5 text-danger"/>
                                    </div>
                                </td>
                            </tr>

                            ))}
                            </tbody>
                        </Table>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className='my-3 rounded' eventKey="1">
                    <Accordion.Header>Add Student</Accordion.Header>
                    <Accordion.Body>
                      <div className="student mb-3">
                        <div className="input-group mb-3 row">
                          <input type="search" className="form-control rounded-4 ms-2 p-3 col-md-8" placeholder="Insert a student name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                          <button className="quizButton rounded-4 p-3 ms-2 col-md-4" type="submit" id="button-addon2">Add Student</button>
                        </div>
                      </div>
                      <div>
                        <Table hover responsive className="mt-2 userTable">
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className='my-3 m-auto col-md-6'>
                  <NavLink type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" to='..'>
                    <i className="fa-solid fa-arrow-left me-3" />
                    Save Changes
                  </NavLink>
                </div>
              </div>
  )
}
