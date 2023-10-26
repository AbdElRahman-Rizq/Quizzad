import { NavLink } from 'react-router-dom';
import '../../../assets/css/quiz.css';

export function AllClasses() {
  return (
    <div className='background'>
      <section className="py-3">
        <div className="container p-0">
          <div className="row mb-4">
            <div className="col-md-10 col-xl-11 text-center m-auto bg-light p-2 rounded-5 mt-3">
              <h3 className="fw-bold py-2">Explore All Classes</h3>
            <nav className="navbar bg-light p-3">
                <div className="container-fluid">
                    <div className="row w-100">
                    <div className="col-md-7">
                        <form className="d-flex">
                        <input className="form-control me-1 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                        <button className="rounded-5 p-2 searchBtn" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </div>
          <div className="quizlist m-auto  mt-4 p-2">
          <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Class name</th>
                    <th scope="col">Grade level</th>
                    <th scope="col">No. of students</th>
                    <th scope="col">No. of Quizzes</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>MOhamed basyoni</td>
                    <td>4</td>
                    <td>26</td>
                    <td>12</td>
                    <td>
                    <div className="d-flex justify-content-center">
                            <NavLink className="fa fa-solid fa-eye mx-3 fs-2 text-warning "/>
                            <NavLink className=" fa-solid fa-pen-to-square mx-3 fs-2 text-info " />
                            <i className="fa-solid fa-trash-can mx-3 fs-2 text-danger" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
            </div>
            </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



 