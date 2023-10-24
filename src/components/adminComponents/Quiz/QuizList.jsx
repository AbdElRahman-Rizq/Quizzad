import React from 'react';
import '../../../assets/css/quiz.css';

export function QuizList() {
  return (
    <div className='background'>
      <section className="py-3">
        <div className="container p-0">
          <div className="row mb-4">
            <div className="col-md-8 col-xl-6 text-center m-auto">
              <h2 className="fw-bold ">Explore Quizzes</h2>
            </div>
          </div>
          <div className="quizlist">
            <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                {/* Card 1 */}
                <div className="col mb-4 p-2">
                <div className="bg-light border p-4 rounded-5">
                    <a href="#">
                    <img
                        className="rounded-5 img-fluid shadow"
                        src="https://images.pexels.com/photos/1928067/pexels-photo-1928067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Quiz Image"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    </a>
                    <div className="py-2">
                    <span className="badge bg-success mb-2 b-3 fs-5 rounded-5">Easy</span>
                    <h5 className="fw-bold text-truncate" style={{ maxWidth: '100%' }}>
                        Areodynamic simulator
                    </h5>
                    </div>
                    <div className="d-flex spec d-wrap">
                    <div className="d-flex p-2">
                        <div>
                        <i className="fa-solid p-1 fa-book text-align" style={{ color: '#591c50' }} />
                        </div>
                        <div>
                        <p className="text-truncate" style={{ maxWidth: '100%' }}>
                            CFD
                        </p>
                        </div>
                    </div>
                    <div className="d-flex p-2">
                        <div>
                        <i className="fa-solid p-1 fa-person" style={{ color: '#591c50' }} />
                        </div>
                        <div>
                        <p className="text-truncate" style={{ maxWidth: '100%' }}>
                            Grade 12
                        </p>
                        </div>
                    </div>
                    <div className="d-flex p-2">
                        <div>
                        <i className="fa-solid fa-layer-group p-1 fa-person" style={{ color: '#591c50' }} />
                        </div>
                        <div>
                        <p className="text-truncate" style={{ maxWidth: '100%' }}>
                            Private
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex">
                    <button className="p-2 border rounded-5 quizButton fs-3 fw-bold">Take Quiz</button>
                    </div>
                </div>
                </div>


                {/* Card 2 */}
                <div className="col mb-4 p-2">
                    <div className="bg-light border p-4 rounded-5">
                        <a href="#">
                        <img
                            className="rounded-5 img-fluid shadow"
                            src="https://images.pexels.com/photos/1928067/pexels-photo-1928067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Quiz Image"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                        </a>
                        <div className="py-2">
                        <span className="badge bg-warning mb-2 b-3 fs-5 rounded-5">Intermediate</span>
                        <h5 className="fw-bold text-truncate" style={{ maxWidth: '100%' }}>
                            Areodynamic simulator
                        </h5>
                        </div>
                        <div className="d-flex spec d-wrap">
                        <div className="d-flex p-2">
                            <div>
                            <i className="fa-solid p-1 fa-book text-align" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                CFD
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div>
                            <i className="fa-solid p-1 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                Grade 12
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div>
                            <i className="fa-solid fa-layer-group p-1 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                Private
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex">
                        <button className="p-2 border rounded-5 quizButton fs-3 fw-bold">Take Quiz</button>
                        </div>
                    </div>
                </div>


                {/* Card 3 */}
                <div className="col mb-4 p-2">
                    <div className="bg-light border p-4 rounded-5">
                        <a href="#">
                        <img
                            className="rounded-5 img-fluid shadow"
                            src="https://images.pexels.com/photos/1928067/pexels-photo-1928067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Quiz Image"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                        </a>
                        <div className="py-2">
                        <span className="badge bg-danger mb-2 b-3 fs-5 rounded-5">Hard</span>
                        <h5 className="fw-bold text-truncate" style={{ maxWidth: '100%' }}>
                            Areodynamic simulator
                        </h5>
                        </div>
                        <div className="d-flex spec d-wrap">
                        <div className="d-flex p-2">
                            <div>
                            <i className="fa-solid p-1 fa-book text-align" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                CFD
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div>
                            <i className="fa-solid p-1 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                Grade 12
                            </p>
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div>
                            <i className="fa-solid fa-layer-group p-1 fa-person" style={{ color: '#591c50' }} />
                            </div>
                            <div>
                            <p className="text-truncate" style={{ maxWidth: '100%' }}>
                                Private
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex">
                        <button className="p-2 border rounded-5 quizButton fs-3 fw-bold">Take Quiz</button>
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



 