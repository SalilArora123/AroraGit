
import db from '../db'
import * as messages from '../const';

const InsertOrder = (req, res) => {
    console.log("req Insert Order", req.body);

    console.log("INSERT INTO `orders` (`order_item_id`,`order_item_name`, `order_item_description`, `order_item_price`,`order_item_quantity`) VALUES ('" +
        req.body[0].id +
        "', '" +
        req.body[0].name +
        "', '" +
        req.body[0].description +
        "', '" +
        req.body[0].price +
        "', '" +
        req.body[0].quantity +
        "')");

    for (let i = 0; i < req.body.length; i++) {
        db.query(
            "INSERT INTO `orders` (`order_item_id`,`order_item_name`, `order_item_description`, `order_item_price`,`order_item_quantity`) VALUES ('" +
            req.body[i].id +
            "', '" +
            req.body[i].name +
            "', '" +
            req.body[i].description +
            "', '" +
            req.body[i].price +
            "', '" +
            req.body[i].quantity +
            "')",

            (err, orderListing) => {

                console.log("orderListing", orderListing);
                if (err) {
                    res.send({
                        status: messages.ERROR,
                        error: err,
                    });
                } else {
                    res.send({
                        status: messages.SUCCESS,
                        data: orderListing,
                    });
                }
            });
    }

};


export default InsertOrder;
