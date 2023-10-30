import React, { Component } from "react";
import { Accordion, Table } from 'react-bootstrap';
import Slider from "react-slick";
import '../../../assets/css/class.css';
import '../../../assets/css/quiz.css';

export class NewClass extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    event.preventDefault();
    this.slider.slickNext();
  }

  previous() {
    event.preventDefault();
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className='rounded-4'>
        <div className='background'>
          <section className="container py-2 Scroller">
            <form className='col-md-10 m-auto p-4 rounded-4 newForm'>
              <div className="row mb-3">
                <div className="col-md-4 col-xl-10 text-center m-auto p-2 mt-2 rounded-4">
                  <h3 className="p-2">Create New Class</h3>
                </div>
              </div>
              <Slider ref={c => (this.slider = c)} {...settings}>
                <div key={1}>
                  <div className='col-md-10 m-auto'>
                    <div className="title mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label px-3">Class Name</label>
                      <input type="text" className="form-control rounded-4 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
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
                      <input type="text" className="form-control rounded-4 p-3" id="exampleInputEmail1" aria-describedby="textHelp" />
                    </div>
                    <div className="gradeLvl mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label px-3">Grade level</label>
                      <select className="form-select rounded-4 p-3" name="gender">
                        <option value="0">Select your Grade</option>
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                      </select>
                    </div>
                  </div>
                  <div className='my-3 m-auto col-md-6'>
                    <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" onClick={this.next}>
 
                      Members Settings
                      <i className="fa-solid fa-arrow-right ms-3" style={{color: "#6b1499;"}}/>
                      </button>
                  </div>
                </div>
                <div key={2}>
                  <Accordion className='' defaultActiveKey="0">
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
                    <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" onClick={this.previous}>
                    <i className="fa-solid fa-arrow-left me-3" style={{color: "#6b1499;"}} />
                      Class Settings</button>
                  </div>
                </div>
              </Slider>
              <div className='my-3 m-auto col-md-6'>
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
}
