import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <NavBar bg="light" expand="lg" style={{marginTop:"-10px"}}>
        <Container style={{paddingTop:"-10px"}}>
          <Row className='w-100'>
            <Col lg={4}>
              <div>
                <img src={logo} alt="logo" width={"90px"} height={"80px"} />
              </div>
            </Col>
            <Col lg={6} style={{paddingTop:"30px",fontSize:"1.2rem"}}>
              <Nav className=" d-flex justify-content-between w-50 ">
                <Link href="#" className='text-decoration-none text-dark'>Home</Link>
                <Link href="#" className='text-decoration-none text-dark'>Features</Link>
                <Link href="#" className='text-decoration-none text-dark'>Pricing</Link>
              </Nav>
            </Col>
            <Col lg={2} style={{paddingTop:"30px",fontSize:"1.2rem"}}>
              <Link href="#" className='text-decoration-none text-dark'>Sign in</Link>
            </Col>
          </Row>
        </Container>
      </NavBar>
    </>
  )
}

export default Navbar