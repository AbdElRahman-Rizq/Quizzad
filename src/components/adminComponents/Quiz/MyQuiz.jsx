import '../../../assets/css/quiz.css';
import '../../../assets/css/class.css';
import { NavLink } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import axios from 'axios';
import { useEffect, useState } from 'react';
export function MyQuiz  () {
        const [quiz, setQuiz] = useState([]);
        const [loading, setLoading] = useState(true);
      
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/v1/quizzes?filter=class`, {
              withCredentials: true,
            });
            console.log(response.data);
            setQuiz(response.data.quizzes);
            setLoading(false);
          } catch (error) {
            console.log("Error fetching data:", error);
            setLoading(false);
          }
        };
        
        useEffect(() => {
            fetchData();
        }, []);
        
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
            <div className='background rounded-4 m-2'>
              <section className="py-1 Scroller">
                <div className="container p-0">
                  <div className="row mb-2">
                    <div className="col-md-11 text-center m-auto bg-light px-3 rounded-4 mt-2">
                      <h3 className="py-2">Explore Public Quizzes</h3>
                      <nav className="navbar bg-light py-3 ">
                        <div className="container-fluid">
                            <div className="row w-100">
                            <div className="col-md-7">
                                <form className="d-flex">
                                <input className="form-control me-1 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                                <button className="rounded-5 p-2 searchBtn" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                <div className="col-md-4">
                                    <div className="dropdown">
                                    <button className="btn dropdown-toggle filterBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-graduation-cap px-1 fs-6" style={{ color: '#89288F' }} /> Grade
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" type="button">Action</button></li>
                                        <li><button className="dropdown-item" type="button">Another action</button></li>
                                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dropdown">
                                    <button className="btn dropdown-toggle filterBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-book px-1 fs-6" style={{ color: '#89288F' }} />
                                        Subject
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" type="button">Action</button></li>
                                        <li><button className="dropdown-item" type="button">Another action</button></li>
                                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dropdown">
                                    <button className="btn dropdown-toggle filterBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-arrow-up-right-dots px-1 fs-6" style={{ color: '#89288F' }}></i>
                                        Difficulty
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" type="button">Action</button></li>
                                        <li><button className="dropdown-item" type="button">Another action</button></li>
                                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </nav>
                    </div>
                  </div>
                  <div className="quizlist">
                    <div className="container" >
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 ">
                    {quiz.map((card) => (
                        <div className="col-mb-4 p-2" key={card.id}>
                            <div className="bg-light border p-4 rounded-5">
                                <div className="text-center">
                                    <a href="#">
                                        <img
                                            className="rounded-5 img-fluid shadow"
                                            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="card Image"
                                            style={{ width: '500px', height: '140px', objectFit: 'cover' }}
                                        />
                                    </a>
                                </div>
                                <div className="p-2">
                                    <span className="badge bg-warning fs-6 rounded-5">{card.difficultyLevel}</span>
                                    <h5 className=" pt-2 " style={{ maxWidth: '100%' }}>
                                        {card.title}
                                    </h5>
                                </div>
                                    <div className="d-flex ">
                                        <div>
                                            <i className="fa-solid p-1 fa-book text-align" style={{ color: '#591c50' }} />
                                        </div>
                                        <div>
                                            <p className="" style={{ maxWidth: '100%' }}>
                                                {card.subject}
                                            </p>
                                        </div>
                                    </div>
                                <div className="d-flex spec d-wrap">
                                    <div className="d-flex me-3">
                                        <div>
                                            <i className="fa-solid p-1 fa-person" style={{ color: '#591c50' }} />
                                        </div>
                                        <div>
                                            <p className="" style={{ maxWidth: '100%' }}>
                                                {card.gradeLevel}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex ">
                                        <div>
                                            <i className="fa-solid fa-layer-group p-1 fa-person" style={{ color: '#591c50' }} />
                                        </div>
                                        <div>
                                            <p className="" style={{ maxWidth: '100%' }}>
                                                {card.isPublic ? 'Public' : 'Private'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <NavLink className="fa fa-solid fa-eye mx-3 fs-2 text-warning" to={`/admin/quiz/${card.id}`} />
                                    <NavLink className="fa-solid fa-pen-to-square mx-3 fs-2 text-info" />
                                    <i className="fa-solid fa-trash-can mx-3 fs-2 text-danger" />
                                </div>
                            </div>
                        </div>
                    ))}
        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );}
