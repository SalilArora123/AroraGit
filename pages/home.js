import axios from "axios";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Head from 'next/head'

export const getServerSideProps = async () => {

    let result;
    let result1;

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/category/getcategory',
        headers: { "Content-Type": "application/json" },

    }).then(res => {
        result = res.data.data;
    })
    console.log("result", result);

    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/product/randproduct',
        headers: { "Content-Type": "application/json" },

    }).then(res => {
        result1 = res.data.data;
        console.log("result1", result1);
    })
    return {
        props: {
            data: result,
            data1: result1
        }
    }

}

const Home = ({ data, data1 }) => {

    return (

        <div>

            <>
                <Head>
                    <title></title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <div className="login">
                                <Link href="/login">Login</Link>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </>
            {/* <h3>Category::</h3>? */}
            <>

                <Navbar bg="light" variant="dark">
                    <Container>
                        <div className="containers">
                            {
                                data.map(function (value, index) {
                                    return (
                                        <Link href={{ pathname: 'shop', query: { data: value.category_id } }}>
                                            {value.category_name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </Container>
                </Navbar>

            </>

            <h3 style={{ fontSize: "27px", color: "red", marginLeft: "39%" }}>Products ::</h3>
            {
                data1.map(function (value, index) {
                    return (

                        <Link href={`/productdetail/${value.product_id}`}>
                            <div key={index} style={{ padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px black", width: "20%", marginLeft: "442px", marginBottom: "20px" }}>
                                {value.product_name}
                            </div>
                        </Link>
                    )
                })
            }

        </div >

    )
}

export default Home