import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function MainSidebar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/home">Home</Link>
            <br /> 
                        <Link href="/shop" className="navLink">shop</Link>
            {/* <Link href="#pricing">Pricing</Link> */}
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default MainSidebar;