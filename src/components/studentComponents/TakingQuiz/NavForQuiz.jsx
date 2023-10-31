
function NavForQuiz({questionNubmer}) {
    const  totalQuestions=9;

  return (
    <div>
        
        <nav className="navbar navbar-expand-lg rounded-5 m-2 mx-4 px-4 py-2 text-light d-flex ">
        
            {/* Numper of question */}
            <div className='col-md-5'>
             <h3>{questionNubmer}/{totalQuestions}</h3>
            </div>
          <h1 className="navbar-brand text-light col-md-6 fs-4 mt-2 px-4 fw-bold">Quiz Name</h1>            
            <div className="text-center pt-1">
             <h4>45:59</h4>
            </div>
              
      </nav>
    </div>
  )
}

export default NavForQuiz