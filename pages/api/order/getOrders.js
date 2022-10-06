import db from '../db'
import * as messages from '../const';

const getOrders = (req, res) => {

    db.query(
        "SELECT * FROM orders",
        (err, orderList) => {
            console.log("orderlist", orderList);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            else {
                res.send({
                    status: messages.SUCCESS,
                    data: orderList,
                });
            }
        });
};

export default getOrders;
