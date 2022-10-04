import db from '../db'
import * as messages from '../const';


const getProductsSorted = (req, res) => {
    console.log("reqSorted", req.body);
    db.query(
        "SELECT * FROM product where product_id = " + req.body.productId + "",

        (err, productListing) => {
            console.log("RRRRRRRRRRRRRR", productListing);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            else {
                res.send({
                    status: messages.SUCCESS,
                    data: productListing,
                });
            }

        });
};

export default getProductsSorted;
