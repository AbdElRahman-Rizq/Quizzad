import vector from '../../../assets/images/admin.png';

export function QuizView() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg rounded-5">
        <div className="container my-2">
          <h1 className="navbar-brand text-light fs-4 px-2 fw-bold">QuizView</h1>
            
            <div className="admin text-center">
              <img src={vector} alt="Admin" />
          </div>
        </div>
      </nav> */}
      <div className='row '>
{/*----------------- quiz image and details --------------------*/}
      <div className='col-md-7 text-light pt-3 '>
        <div className="bg-light border p-2 rounded-5">
                        <div className="text-center">
                            <a href="#">
                            <img
                                className="rounded-5 img-fluid shadow mt-2"
                                src="https://images.pexels.com/photos/4117968/pexels-photo-4117968.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Quiz Image"
                                style={{ width:'95%', height: '250px', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="col-md-3 my-2">
                            <span className="badge bg-warning p-2 mx-3 b-3 fs-6 rounded-5 w-100">Intermediate</span>
                        </div>

                        <div className="p-2">
                        {/* <span className="badge bg-warning mb-2 b-3 fs-6 rounded-5">Intermediate</span> */}
                        <h4 className="mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                            Areodynamic simulator CFD Analysis quiz
                        </h4>
                        </div>

                        <div className='row'>
                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-dark" style={{ maxWidth: '100%' }}>
                                Teacher : MOhamed
                            </h6>
                        </div>

                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                Category : AeroDynamics
                            </h6>
                        </div>
                        </div>

                        <div className='row'>
                        <div className="col-md-6">
                            <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                Class Name : Engineering
                            </h6>
                        </div>

                        <div className="col-md-6">
                        <h6 className="p-2 mx-3 text-truncate text-dark" style={{ maxWidth: '100%' }}>
                                Grade Level : 10th
                        </h6>
                        </div>
                        </div>                    
                    
                    <div className="d-flex spec d-wrap mx-2 pb-2">
                        <div className="d-flex col-md-6">
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid fs-5 p-1 fa-book text-align px-2" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                Term : First 
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid fs-5 p-1 fa-person px-2" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                Unit : 4
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="d-flex col-md-6">
                        <div className="d-flex p-1">
                            <div>
                            <i className="fa-solid fs-5 fa-layer-group px-2 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-dark" style={{ maxWidth: '100%' }}>
                                Lesson : 1
                            </p>
                            </div>
                        </div>

                        <div className="d-flex p-1">
                            <div>
                                <i className="fa-solid fs-5 fa-layer-group px-2 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                                <p className="text-dark" style={{ maxWidth: '100%' }}>
                                    Chapter : 1
                                </p>
                            </div>
                        </div>
                        </div>
                        </div>
        </div>
      </div>
      
{/*----------------- quiz Specific and details --------------------*/}
      <div className='col-md-5 text-light pt-3'>
        <div className="bg-light border p-3 rounded-5">
                        
            <div className="p-1">
            {/* <span className="badge bg-warning mb-2 b-3 fs-6 rounded-5">Intermediate</span> */}
            <h4 className="mx-3 text-truncate text-dark" >
                Description :
            </h4>
            <p className="pt-2 mx-3 text-dark">
                this quiz measure the knowledge you have in thermodynamics as well as Heat transfer.
            </p>
            </div>

            <div className="ps-2">
            {/* <span className="badge bg-warning mb-2 b-3 fs-6 rounded-5">Intermediate</span> */}
            <h4 className="mx-1 text-truncate text-dark" >
                What you need to know ?!
            </h4>
            </div>

           <ol className="list-group list-group-numbered rounded-5">
                <li className="list-group-item">Quiz timer : 1 hour</li>
                <li className="list-group-item">Quiz Questions : 30 question</li>
                <li className="list-group-item">Passing Score : 70% </li>
                <li className="list-group-item">Allowed attempts : 3 times </li>
                <li className="list-group-item">Quiz deadline : 31-12-2023 </li>
                <li className="list-group-item">Privacy: Public </li>
            </ol>



            <div className="d-flex">
            <button className=" mt-3 p-2 border-0 rounded-5 quizButton fs-5 fw-bold">Take Quiz</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
