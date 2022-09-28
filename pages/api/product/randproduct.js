import db from '../db'
import * as messages from '../const';

const randproduct = (req, res) => {

    db.query(
        "SELECT * FROM `product` ORDER BY RAND()",
        (err, productListrand) => {
            console.log("productList", productListrand);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            else {
                res.send({
                    status: messages.SUCCESS,
                    data: productListrand,
                });
            }
        });
};

export default randproduct;
