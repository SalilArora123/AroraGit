import axios from "axios";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Head from 'next/head'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { adminActions } from "../src/store/AdminStates";

export const getServerSideProps = async () => {

    return {
        props: {
        }
    }


}

const AddCart = () => {
    const dispatch = useDispatch();
    const cartAllData = useSelector(state => state.admin.cart);
    console.log("cartAllData", cartAllData);

    const addQuantity = (index, addQuant) => {
        console.log("iiiiiiiiiiii", index);

        console.log("qunatit", addQuant);

        dispatch(adminActions.quant({
            index: index,
            quantity: addQuant + 1
        }))
    }

    const subQuantity = (subQuant, index) => {


        console.log("eeeeeeeeeeee", index);

        console.log("quantityyy", subQuant);

        if (subQuant > 1) {

            dispatch(adminActions.quant({

                index: index,
                quantity: subQuant - 1
            }))

        }
    }

    const deleteHandler = (index) => {

        dispatch(adminActions.deleteData({
            index: index
        }))
    }

    const totalPrice = (price, quant) => {

        return price * quant

    }

    const orderHandler = () => {
console.log("hello order");
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/order/insertOrder',
            data: cartAllData,
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log("response", response);
        })

    }


    const totalSum = () => {
        let sum = 0;
        for (let i = 0; i < cartAllData.length; i++) {
            sum = sum + cartAllData[i].price * cartAllData[i].quantity
        }
        return sum;

    }

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


            <h2 style={{ marginLeft: "38%", fontSize: "30px" }}>Cart All Data</h2>

            <div>
                {cartAllData.map(function (value, index) {

                    return (

                        <div key={index} style={{ padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px black", width: "28%", marginLeft: "442px", marginBottom: "20px" }}>
                            <b>Name:</b>{value.name}
                            <b> Description:</b>{value.description}
                            <b>Price:</b>{value.price}
                            Enter the Quantity::
                            <button style={{ borderRadius: "10px", color: "white", backgroundColor: "red", border: "2px solid #cc2020" }} onClick={() => subQuantity(value.quantity, index)}>-</button>
                            &nbsp;
                            {value.quantity}
                            &nbsp;
                            <button style={{ borderRadius: "10px", color: "white", backgroundColor: "green", border: "2px solid green" }} onClick={() => addQuantity(index, value.quantity)}>+</button>
                            <br></br>
                            <br></br>
                            <b style={{ backgroundColor: "#ffce1e" }}>Total Price:{totalPrice(value.price, value.quantity)}</b>
                            <br></br>
                            <button style={{ backgroundColor: "rgb(231 0 0)", color: "white", border: "4px solid rgb(255 11 45)" }} onClick={() => deleteHandler(index)}>Remove</button>
                        </div>
                    )

                })}

                <b style={{ backgroundColor: "#468028", color: "white", marginLeft: "31%", fontSize: "23px" }}>Total Price of cart in an Array is  {totalSum()}</b>
                <button style={{ marginLeft: "43%", border: "5px solid #e21010", backgroundColor: "red", color: "white" }} onClick={orderHandler}>Order Placed</button>
            </div>
        </div >
    )

}

export default AddCart;
