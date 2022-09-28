import React from 'react'
import { SideBar } from '../admin/AdminComponent/SideBar';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Header from '../admin/AdminComponent/Header';
import { ContentRoutes } from './Route/ContentRoutes';

export const Layout = () => {
  return (

    <Container fluid>

      <Header />
      <Row>
        <Col lg={3}>
          <SideBar />
        </Col>
        <Col lg={9} >
          <ContentRoutes />
        </Col>
      </Row>
      
    </Container >

  )

}

