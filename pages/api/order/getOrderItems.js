import db from '../db'
import * as messages from '../const';

const getOrderItems = (req, res) => {
    db.query(
        "SELECT * FROM orders_items",
        (err, orderListItems) => {
            console.log("orderlist", orderListItems);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            else {
                res.send({
                    status: messages.SUCCESS,
                    data: orderListItems,
                });
            }
        });
};

export default getOrderItems;
