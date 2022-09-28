import db from '../db'
import * as messages from '../const';

const prefilledProduct = (req, res) => {

    console.log("prefill", req.body);

    db.query(
        "SELECT * FROM product WHERE product_id=" + req.body.id + "",
        (err, productList) => {
            console.log("productList", productList);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });

            } else {
                res.send({
                    status: messages.SUCCESS,
                    data: productList,
                });
            }
        });
};

export default prefilledProduct;
