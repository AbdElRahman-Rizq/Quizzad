import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../assets/logo.png";
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
    <div className="fixed-top">
    <NavBar bg="light" expand="lg" style={{marginTop:"-10px"}}>
        <Container style={{paddingTop:"-10px"}}> {/*Container */}
          <Row className='w-100'>
            <Col lg={2}>
              <div>
                <img src={logo} alt="logo" width={"90px"} height={"80px"} /> {/*Logo */}
              </div>
            </Col>
            <Col lg={8} style={{paddingTop:"30px",fontSize:"1.2rem" ,  paddingLeft:"6%"}}>
            <Nav className="d-flex justify-content-between w-75 ps-5">           {/*Links */}
            <SmoothScrollLink className="navLink" targetId="#home">Home</SmoothScrollLink>
            <SmoothScrollLink className="navLink" targetId="#quizzes">Quizzes</SmoothScrollLink>
            <SmoothScrollLink className="navLink" targetId="#aboutUs">About Us</SmoothScrollLink>
            <SmoothScrollLink className="navLink" targetId="#contactUs">Contact Us</SmoothScrollLink>
          </Nav>
            </Col>
            <Col lg={2} style={{paddingTop:"30px",fontSize:"1.2rem", paddingLeft:"8%"}}> {/*SignIn */}
              <Link href="#" className='text-decoration-none text-dark'>Sign in</Link>
            </Col>
          </Row>
        </Container>
      </NavBar>
    </div>
  )
}

export default Navbar