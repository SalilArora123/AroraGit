
import { ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from '../../css/css.module.css';

export const SideBar = () => {
    return (
        <div >

            <Container>
                <Row>
                    <Col sm={3} className={classes.cols} >
                        <ListGroup>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>  Category  </Accordion.Header>
                                    <Accordion.Body>

                                        <Link to='/dashboard/category'>
                                            <ListGroup.Item>Show Category</ListGroup.Item>
                                        </Link>
                                        
                                        <Link to='/dashboard/product'>
                                            <ListGroup.Item>Show Products</ListGroup.Item>
                                        </Link>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
