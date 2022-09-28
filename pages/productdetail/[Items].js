import axios from "axios";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const getServerSideProps = async (context) => {
    const id = context.params.Items

    console.log("Items", id);

    let resultSorted;
    let resultProduct;


    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/category/getcategory',
        headers: { "Content-Type": "application/json" },

    }).then(res => {
        resultProduct = res.data.data;
    })


    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/product/getproductsorted',
        data: {
            productId: id
        },
        headers: { "Content-Type": "application/json" },

    }).then(res => {
        console.log("ressssssssssssssssssss", res.data.data);
        resultSorted = res.data.data
    })

    return {
        props: {
            resultSorted: resultSorted,
            resultProduct: resultProduct
        }
    }
}

const Items = ({ resultSorted, resultProduct }) => {

    return (
        <div>
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
            
            <Navbar bg="light" variant="dark">
                <Container>
                    <div className="containers">
                        {
                            resultProduct.map(function (value, index) {
                                return (
                                    <Link href={`/shop/${value.category_id}`}>
                                        {value.category_name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Container>
            </Navbar>

            <div>
                {resultSorted.map(function (value, index) {
                    return (

                        <div key={index} style={{ padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px black", width: "20%", marginLeft: "442px" }}>
                            <b>Description:</b>  <span>{value.product_description}</span> <br />
                            <b>Name:</b> <span>{value.product_name}</span> <br />
                            <b>Price:</b> <span>{value.product_price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Items;
