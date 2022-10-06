
import db from '../db'
import * as messages from '../const';

const InsertOrder = (req, res) => {
    console.log("req Insert Order", req.body);
    let orderInsertedId;
    let cartDataAll;

    const orderResult = db.query(
        "INSERT INTO `orders`(`total_price`,`order_date`) VALUES ('" +
        req.body.total +
        "', '" +
        req.body.date +
        "')",
        (err, orderListing) => {
            console.log("orderListing", orderListing);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            else {
                console.log("orderrrrrr", orderInsertedId);
                orderInsertedId = orderListing.insertId;
                cartDataAll = req.body.cartData;
                for (let i = 0; i < cartDataAll.length; i++) {
                    const orderItemResult = db.query("INSERT INTO `orders_items`(`order_id`,`order_item_name`,`order_item_description`,`order_item_price`,`order_item_quantity`) VALUES (" +
                        orderInsertedId +
                        ", '" +
                        cartDataAll[i].name +
                        "', '" +
                        cartDataAll[i].description +
                        "', " +
                        cartDataAll[i].price +
                        ", '" +
                        cartDataAll[i].quantity +
                        "')", (err, orderListingItems) => {
                            console.log("orderListingItems", orderListingItems);
                            if (err) {
                                res.send({
                                    status: messages.ERROR,
                                    error: err,
                                });
                            }
                            else {

                                res.send({
                                    status: messages.SUCCESS,
                                    data: { orderResult: orderResult, orderItemResult: orderItemResult }
                                });

                            }
                        });


                }
            }

        })

}

export default InsertOrder;
