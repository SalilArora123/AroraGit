
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as ErrorPage from '../src/admin/AdminComponent/Constant/ErrorPage';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {

    }

    return (

        <div>
            <Container fluid>
                <Row>

                    <Col sm={4} style={{ marginTop: "25vh" }} >

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>  User Login Page </h2>
                            <div className="form-group">
                                <label>Email address: </label> <br></br>
                                <input {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                                {errors.email && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                                <br></br>
                            </div>
                            <br></br>

                            <div className="form-group">
                                <label>Password :</label> <br></br>
                                <input {...register("password", { required: true })} />
                                {errors.password && <div style={{ color: "red" }} className='error'>{ErrorPage.ERROR_REQUIRED}</div>}
                                <br></br>
                            </div>
                            <br></br>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Col>

                    <Col sm={8}>

                        <img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height="100%" width="100%" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Login;
