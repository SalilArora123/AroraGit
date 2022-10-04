import axios from "axios";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Head from 'next/head'
import { adminActions } from '../../src/store/AdminStates';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { Router, useRouter } from "next/router";


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

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    console.log("resultSortedddddddddd", resultSorted);
    let sortedData = resultSorted[0].product_name;
    let sortedProduct = resultProduct[0].category_name;
    const router = useRouter();


    const addcartHandler = (description, name, price, id) => {

        // let aaa = JSON.parse(localStorage.getItem("name"));
        // //  let aaa = JSON.parse(localStorage.getItem("name")) == undefined ? [] : JSON.parse(localStorage.getItem("name"));

        // // let aaa = [];

        dispatch(adminActions.cartData({
            description: description,
            name: name,
            price: price,
            quantity: quantity,
            id: id
        }))
        router.push('/addcart');
    }

    return (
        <div>


            <Head>
                <title>{sortedProduct}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Head>
                <title>{sortedData}</title>
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

            <h2 style={{ marginLeft: "38%", fontSize: "30px" }}>Product Details</h2>

            <div>

                {resultSorted.map(function (value, index) {

                    return (
                        <div key={index} style={{ padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px black", width: "20%", marginLeft: "442px" }}>
                            <b>Description:</b>  <span>{value.product_description}</span> <br />
                            <b>Name:</b> <span>{value.product_name}</span> <br />
                            <b>Price:</b> <span>{value.product_price}</span>
                            <br></br>

                            {/* Enter the Quantity:: */}
                            {/* <input style={{ width: "75%" }} type="number" placeholder="Enter the number" ref={quantity} /> */}
                            {/* <button onClick={subQuantity}>-</button>
                            &nbsp;
                            {quantity}
                            &nbsp;
                            <button onClick={addQuantity}>+</button>
                            <br></br>
                            <br></br> */}

                            <button onClick={() => addcartHandler(value.product_description, value.product_name, value.product_price, value.product_id)}>Add To Cart</button>
                        </div>

                    )

                })}

            </div>

        </div>
    )

}

export default Items;
