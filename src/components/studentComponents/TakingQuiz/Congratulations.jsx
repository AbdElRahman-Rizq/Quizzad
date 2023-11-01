import React from 'react'
import NavForResult from './NavForResult'
import Result from '../../../assets/images/smart.png'
import '../../../assets/css/authentication.css'

function Congratulations() {
  return (
    <div>
        <NavForResult/>
        <section >
            <div className="container-fulid ">
                <div className="result text-center border rounded-4 mx-4 bg-light">
                    <div className="result-header mt-5 mb-4">
                        <h1 className=''>Congratilations</h1>
                    </div>
                    <div className="up bg-white mx-5 rounded-5">
                        <div className="result-img">
                            <img className='w-100' src={Result} />
                        </div>
                        <div className="result-degree">
                            <h2 className='h5' style={{color:"#7C2A90"}}>you get +90 of Quiz Degrees</h2>
                        </div>
                        <div className="result-btn my-5 pb-4 px-5">
                            <button type="submit"  className='btn text-white py-1 rounded-3 formBtn'>Check Correct Answers</button>
                        </div>
                    </div>
                    <div className="down px-3">
                        <div className="question-completion d-flex justify-content-around">
                            <div className="div">
                                <h6>Question</h6>
                                <h6 className='fw-bold'>30 Question</h6>
                            </div>
                            <div className="div">
                                <h6>Question</h6>
                                <h6 className='fw-bold'>30 Question</h6>
                            </div>
                        </div>
                        <div className="question-completion d-flex justify-content-around mt-4">
                            <div className="div">
                                <h6>Correct Answers</h6>
                                <h6 className='fw-bold'>28</h6>
                            </div>
                            <div className="div">
                                <h6>InCorrect Answers</h6>
                                <h6 className='fw-bold'>2</h6>
                            </div>
                        </div>
                        <div className="question-completion d-flex justify-content-around my-4">
                            <div className="div mx-1">
                                <button type="submit"  className='btn text-white py-1 rounded-3 formBtn'>See Your Rank</button>
                            </div>
                            <div className="div mx-1">
                                <button type="submit"  className='btn text-white py-1 rounded-3 formBtn'>Back to Dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Congratulations