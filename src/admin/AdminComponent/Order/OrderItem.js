import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderItem = () => {

    console.log("hello OrderItems")
    const [orderListItem, setOrderListItem] = useState([]);
    const params = useParams();
    console.log("paramssssss", params.id);

    useEffect(() => {

        axios({
            method: 'get',
            url: '/api/order/getOrderItems',
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            console.log("resOrdersItem", res.data.data);
            setOrderListItem(res.data.data);

        })

    }, []);

    return (

        <div>

            <h3 style={{ position: "absolute", left: "42%", fontSize: "24px", fontStyle: "oblique", top: "92px" }}>::OrderListing::</h3>

            <table style={{ backgroundColor: "yellowgreen", position: "absolute", top: "36%", height: "36%" }}>

                <thead >
                    <tr style={{ border: "1px solid black" }}>
                        <th>order_id</th>
                        <th>order_item_name</th>
                        <th>order_item_description</th>
                        <th>order_item_price</th>
                        <th>order_item_quantity</th>

                    </tr>
                </thead>
                <tbody>

                    {orderListItem.map(function (value, index) {

                        if (params.id == value.order_id) {
                            console.log("value", value);
                            return (
                                <tr key={index} style={{ border: "1px solid black" }}>

                                    <td style={{ border: "1px solid black" }}>{value.order_id}</td>
                                    <td style={{ border: "1px solid black" }}>{value.order_item_name}</td>
                                    <td style={{ border: "1px solid black" }}>{value.order_item_description}</td>
                                    <td style={{ border: "1px solid black" }}>{value.order_item_price}</td>
                                    <td style={{ border: "1px solid black" }}>{value.order_item_quantity}</td>

                                </tr>
                            )
                        }
                    })}

                </tbody>
            </table>

        </div >
    )
}

export default OrderItem;


