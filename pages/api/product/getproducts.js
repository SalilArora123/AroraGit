import db from '../db'
import * as messages from '../const';

const getProducts = (req, res) => {

    db.query(
        "SELECT * FROM product",
        (err, productList) => {
            console.log("productList", productList);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            else {
                res.send({
                    status: messages.SUCCESS,
                    data: productList,
                });
            }
        });
};

export default getProducts;
