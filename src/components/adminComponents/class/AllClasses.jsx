import { NavLink } from 'react-router-dom';
import '../../../assets/css/class.css';
import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import axios from 'axios';

export function AllClasses() {
    const [myClass, setMyClass] = useState([]);
        const [loading, setLoading] = useState(true);
      
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/v1/classes/`, {
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
              <h3 className="py-2">Explore All Classes</h3>
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
            <div className="container ">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 ">
                {myClass.map((clx) => (
                    <div className="col-mb-4 p-2" key={clx.id}>
                    <div className="bg-light border p-4 rounded-5">
                        <div className="text-center">
                            <a href="#">
                            <img
                                className="rounded-5 img-fluid shadow"
                                src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Quiz Image"
                                style={{ width:'100%', height: '175px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="p-2 text-center">
                        <h4 className="fw-bold pt-2 text-truncate" style={{ maxWidth: '100%' }}>
                            {clx.className}
                        </h4>
                        </div>
                        <div className="d-flex spec d-wrap">
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid p-1 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                 teachers
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid p-1 fa-book text-align" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                {clx.gradeLevel}
                            </p>
                            </div>
                        </div>
                        
                        </div>
                        <div className="d-flex justify-content-center">
                            <NavLink className="fa fa-solid fa-eye mx-3 fs-2 text-warning " to={`/admin/class/${clx.id}`} />
                            <NavLink className=" fa-solid fa-pen-to-square mx-3 fs-2 text-info " to={`/admin/class/${clx.id}/edit`} />
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
  );
}



 