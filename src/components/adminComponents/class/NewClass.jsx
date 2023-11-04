import Slider from "react-slick";
import { Accordion, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useClassLogic } from '../../../controls/ClassLogic'
export function NewClass() {
  const { sliderRef , next , previous  , settings} = useClassLogic();
  const [myClass, setMyClass ] = useState({})
  const navigate = useNavigate();

  let { id } = useParams()
  id = parseInt(id) || 0;

  {/*=============== Form Operation =================*/}

  const [formValue, setFormValue] = useState({
    className: '', 
    description: '', 
    gradeLevel: '', 
    quizImage: null
  });

  useEffect(() => {
    if(id != 0){
      let fetchData = async () => {
        try {
          const responce = await axios.get(`http://localhost:5000/api/v1/classes/${ id }`,{
            withCredentials: true,
          });
          setMyClass(responce.data)
          setFormValue(responce.data)
          console.log(myClass);
        } catch {
          console.log('error get Class by id');
        }
      }
      fetchData()
    }
  },[ id ]);

  const getInputValue = (e) => {
    if (e.target.name === 'coverImage') {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.files[0], // Update the file property
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };
  
  const formOperation = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append form values to the formData object
    formData.append('className', formValue.className);
    formData.append('description', formValue.description);
    formData.append('gradeLevel', formValue.gradeLevel);
    formData.append('coverImage', formValue.coverImage);

    if (id !== 0) {
      axios
        .put(`http://localhost:5000/api/v1/classes/${id}`, formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          navigate(`/admin/class/${id}`);
        })
        .catch((error) => {
          console.error('Error updating class:', error);
        });
    } else {
      axios
        .post('http://localhost:5000/api/v1/classes', formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          navigate('/admin/class/');
        })
        .catch((error) => {
          console.error('Error creating class:', error);
        });
    }
  };
  return (
    <div>
      <div className='bg-light rounded-4 mt-3 m-2'>
        <section className="container py-4 Scroller">
          <form onSubmit={formOperation} className='col-md-10 m-auto p-4 rounded-4 newForm' encType="multipart/form-data">
            <div className="row mb-3">
              <div className="col-md-4 col-xl-10 text-center m-auto p-2 mt-2 rounded-4">
                <h3 className="p-2">{ id !== 0 ? 'Edit Class': 'Create New Class'}</h3>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              <div key={1}>
                <div className='col-md-10 m-auto'>
                <div className="title mb-3">
                  <label htmlFor="className" className="form-label px-3">Class Name</label>
                  <input
                    type="text"
                    className="form-control rounded-4 p-3"
                    id="className" // Ensure that the "id" matches the "htmlFor" in the label
                    name="className"
                    onChange={getInputValue}
                    value={formValue.className}/>
                  </div>
                  
                  <div className="description mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label px-3">Description</label>
                    <input  type="text"
                            className="form-control rounded-4 p-3" 
                            id="exampleInputEmail1"
                            name='description' 
                            onChange={getInputValue}
                            value={formValue.description} />
                  </div>
                  <label htmlFor="exampleInputEmail1" className="form-label fs-6 px-3">Quiz Cover Image</label>
                  <div className="input-group mb-2">
                    <input  type="file"
                            className="form-control p-3 rounded-4"
                            name='coverImage'
                            accept="image/*"
                            onChange={getInputValue}
                             />
                  </div>
                  <div className="gradeLvl mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label px-3">Grade level</label>
                    <select className="form-select rounded-4 p-3" 
                            name='gradeLevel' 
                            onChange={getInputValue}
                            value={formValue.gradeLevel}>
                                <option value="">Select your gradeLevel</option>
                                <option value="PRIMARY_ONE">Grade 1</option>
                                <option value="PRIMARY_TWO">Grade 2</option>
                                <option value="PRIMARY_THREE">Grade 3</option>
                                <option value="PRIMARY_FOUR">Grade 4</option>
                                <option value="PRIMARY_FIVE">Grade 5</option>
                                <option value="PRIMARY_SIX">Grade 6</option>
                                <option value="PREP_ONE">Grade 7</option>
                                <option value="PREP_TWO">Grade 8</option>
                                <option value="PREP_THREE">Grade 9</option>
                                <option value="SECONDARY_ONE">Grade 10</option>
                                <option value="SECONDARY_TWO">Grade 11</option>
                                <option value="SECONDARY_THREE">Grade 12</option>
                    </select>
                  </div>
                </div>
                <div className='my-3 m-auto col-md-6'>
                  <button type="submit" className="quizButton rounded-4 p-3 w-100 fs-5" onClick={next}>
                    Members 
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
              {id == 0 ? 'Create New Class' : 'Save Changes'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
