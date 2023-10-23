import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
function SmoothScrollLink({ targetId, children }) {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Link href={targetId} className="text-decoration-none text-dark" onClick={handleClick}>
      {children}
    </Link>
  );
}


function Navbar() {
  return (
    <div>
    <NavBar bg="light" expand="lg" >
        <Container > {/*Container */}
          <Row className='w-100'>
            <Col lg={2} className='d-flex justify-content-between'>  {/*Logo */}
            <NavBar.Brand >
              <div className='my-2'>
                <img src={logo} alt="logo" width={"60px"}/>
              </div>
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" style={{border:"none"}}/>
            </Col>
            <Col
            className='pt-4'
            style={{fontSize:"1.2rem" , textAlign:"center"}}>
            <NavBar.Collapse>
            <Col lg={8}>
            <Nav className="d-flex justify-content-between ps-5">           {/*Links */}
            <SmoothScrollLink className="navLink" targetId="#home">Home</SmoothScrollLink>
            <SmoothScrollLink className="navLink" targetId="#quizzes">Quizzes</SmoothScrollLink>
            <SmoothScrollLink className="navLink" targetId="#aboutUs">About Us</SmoothScrollLink>
            <SmoothScrollLink className="navLink" targetId="#contactUs">Contact Us</SmoothScrollLink>
            </Nav>
            </Col>
            <Col lg={4} style={{height:"40px"}}> {/*SignIn */}
              <Link to={"/login"} className='text-decoration-none text-dark' id='signinLink'>Sign in</Link>
            </Col>
          </NavBar.Collapse>
            </Col>
          </Row>
        </Container>
      </NavBar>
    </div>
  )
}

export default Navbar