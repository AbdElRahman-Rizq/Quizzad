import React from 'react'
import '../../../style/quizPage.css'

export function SearchBar() {
  return (
    <div className='background'>
    <section >
        <div className="container py-5 ">
      <div className="col mb-5 bg-light border rounded-5">
        <div className="col-md-8 col-xl-6 p-3 text-center mx-auto">
          <h2 className="fw-bold">Explore Quizzes</h2>
        </div>
                <form className="form-inline my-2 my-lg-0">
                <div className='d-flex w-100 col-xl-6 p-3 m-3'>
                    
                    <div className='d-flex w-75'>
                        <input className="form-control rounded-5 mr-sm-2 w-90" type="search" placeholder="Search Quizzes" aria-label="Search" />
                        <div className='d-flex m-2 align-items-center'>
                        <i className=" fa-solid fa-magnifying-glass" style={{color: '#800080'}} />
                        </div>
                    </div>
                    <div className='d-flex'>
                    <select name='gradeFilter' defaultValue={'grade'} className='bg-light text-dark border rounded-5 fs-6 p-2'>
                        <option value>hello</option>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                    </select>
                    <select name='gradeFilter' className='p-2'>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                    </select>
                    <select name='gradeFilter' className='p-2'>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                        <option value>hello from filter1</option>
                    </select>
                    </div>
                </div>        
            </form>
        </div>
      </div>      
      </section>
    </div>
  )
}
