import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Order = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {

        axios({
            method: 'get',
            url: '/api/order/getOrders',
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            console.log("resOrders", res.data.data);
            setOrderList(res.data.data);

        })

    }, []);




    return (

        <div>


            <h3 style={{ position: "absolute", left: "42%", fontSize: "24px", fontStyle: "oblique", top: "92px" }}>::OrderListing::</h3>

            <table style={{ backgroundColor: "yellowgreen", position: "absolute", top: "36%", height: "36%" }}>

                <thead >
                    <tr style={{ border: "1px solid black" }}>
                        <th>Order_id</th>
                        <th>Total Price</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>


                    {orderList.map(function (value, index) {

                        console.log("value", value);
                        return (

                            <tr key={index} style={{ border: "1px solid black" }}>

                                <td style={{ border: "1px solid black" }}>{value.order_id}</td>
                                <td style={{ border: "1px solid black" }}>{value.total_price}</td>
                                <td style={{ border: "1px solid black" }}>{value.order_date}</td>
                                <NavLink to={"/dashboard/orders/orderitems/"+value.order_id}><button style={{ width: "85px", height: "24px", color: "white", border: "2px solid white", backgroundColor: "#61b461" }}> OrderItems</button></NavLink>

                            </tr>
                        )
                    })}


                </tbody>
            </table>

        </div >
    )
}

export default Order;