import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const index = () => {


  return (

    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/home">Home</Link>
            <Link href="/shop">Shop</Link>
            <div className="login">
              <Link href="/login">Login</Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )

}

export default index