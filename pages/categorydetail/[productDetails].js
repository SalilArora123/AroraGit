import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
    const id = context.params.productDetails
    console.log("iddddddd", id);

    let result;
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
        url: "http://localhost:3000/api/product/getproductser",
        data: {
            categoryId: id
        },
        headers: { "Content-Type": "application/json" },
    }).then(res => {
        result = res.data.data
    })

    return {
        props: {
            result: result,
            resultProduct: resultProduct
        }
    }
}

const productDetail = ({ result, resultProduct }) => {

    console.log("resulttttttttttttttttttt", result);
    console.log("resultProductssssssssssssssssss", resultProduct);

    return (
        <div>
            <>
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

            <>

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
            </>
            <h2 style={{ color: "blue", marginLeft: "550px" }}>Product Details :</h2>
            {result.map(function (value, index) {
                return (

                    <Link href={`/productdetail/${value.product_id}`}>
                        <div key={index} style={{ padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px black", width: "20%", marginLeft: "442px" }}>
                            <b>Description:</b>  <span>{value.product_description}</span> <br />
                            <b>Name:</b> <span>{value.product_name}</span> <br />
                            <b>Price:</b> <span>{value.product_price}</span>
                        </div>
                    </Link>

                )
            })}


        </div>
    )
}

export default productDetail;
