import Slider from "react-slick";
import { useSlider } from "../../../controls/ClassLogic"; // Import the useSlider function
import { Accordion, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function NewClass() {
  const { sliderRef, next, previous, settings } = useSlider();
  
  let { id } = useParams()
  {/*=============== Form Operation =================*/}
  const formOperation = () => {

  }

  const { formValue , setFormValue } = useState({
    name:'',
    description:'',
    grade:'',
    Category:'',
    coverImage:''
  })

  const getInputValue = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name] : e.target.value
    });
  }

  return (
    <div>
      <div className='bg-light rounded-4 mt-3 m-2'>
        <section className="container py-4 Scroller">
          <form onSubmit={formOperation} className='col-md-10 m-auto p-4 rounded-4 newForm'>
            <div className="row mb-3">
              <div className="col-md-4 col-xl-10 text-center m-auto p-2 mt-2 rounded-4">
                <h3 className="p-2">{ id !== 0 ? 'Edit Class': 'Create New Class'}</h3>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              <div key={1}>
                <div className='col-md-10 m-auto'>
                  <div className="title mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label px-3">Class Name</label>
                    <input  type="text" 
                            className="form-control rounded-4 p-3" 
                            id="exampleInputEmail1" 
                            aria-describedby="textHelp"
                            onChange={getInputValue} />
                  </div>
                  <div className='subject mb-3'>
                    <label htmlFor="Subject" className="form-label px-3">Subject</label>
                    <select className="form-select rounded-4 p-3 bg-light" name="Subject">
                      <option value="0">Select your Subject</option>
                      <option value="1">Mathematics</option>
                      <option value="2">Physics</option>
                    </select>
                  </div>
                  <div className="description mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label px-3">Description</label>
                    <input  type="text"
                            className="form-control rounded-4 p-3" 
                            id="exampleInputEmail1" 
                            aria-describedby="textHelp"
                            onChange={getInputValue}  />
                  </div>
                  <label htmlFor="exampleInputEmail1" className="form-label fs-6 px-3">Quiz Cover Image</label>
                  <div className="input-group mb-2">
                    <input  type="file"
                            className="form-control p-3 rounded-4"
                            id="inputGroupFile02"
                            onChange={getInputValue} />
                  </div>
                  <div className="gradeLvl mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label px-3">Grade level</label>
                    <select className="form-select rounded-4 p-3" 
                            name="grade"
                            
                            onChange={getInputValue}>
                      <option value="0">Select your Grade</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                    </select>
                  </div>
                </div>
                <div className='my-3 m-auto col-md-6'>
                  <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" onClick={next}>
                    Members Settings
                    <i className="fa-solid fa-arrow-right ms-3" />
                  </button>
                </div>
              </div>
              <div key={2}>
                <Accordion defaultActiveKey="null">
                  <Accordion.Item className='my-3 rounded' eventKey="0">
                    <Accordion.Header className="accordion-header text-light">Add Teacher</Accordion.Header>
                    <Accordion.Body>
                      <div className="teacher mb-3">
                        <div className="input-group mb-3 row">
                          <input type="search" className="form-control rounded-4 ms-2 p-3 col-md-8" placeholder="Insert a teacher name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                          <button className="quizButton rounded-4 ms-2 p-3 col-md-4" type="submit" id="button-addon2">Add teacher</button>
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
                              <td>Teacher</td>
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
                  <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" onClick={previous}>
                    <i className="fa-solid fa-arrow-left me-3" />
                    Class Settings
                  </button>
                </div>
              </div>
            </Slider>
            <div className=' m-auto col-md-6'>
              <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5">
                Create Class
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
