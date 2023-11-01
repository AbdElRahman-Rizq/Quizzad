import '../../../assets/css/quiz.css';
import vector from '../../../assets/images/teacher.png';
import logo from '../../../assets/images/logo.png';

function NavForResult() {
  return (
    <div>
        
        <nav className="navbar m-2 mx-4 px-4" id='navForResult'>
        <div className="d-flex justify-content-between w-100">
            <div className='d-flex w-100 py-1'>

            <img src={logo} alt="" width={"55rem"} height={"50rem"} className='pt-1'/>
          <h1 className="navbar-brand text-light fs-4 mt-2 px-4 fw-bold">Quiz Name</h1>            
            </div>
            <div className="student text-center mt-1">
              <img className='profileImage' src={vector} alt="student" />
            </div>
          </div>        
      </nav>
    </div>
  )
}

export default NavForResult