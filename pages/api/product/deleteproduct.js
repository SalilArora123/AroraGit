import db from '../db'
import * as  messages from '../const';

const deleteProduct = (req, res) => {

    console.log("req.body Product", req.body);

    db.query("DELETE FROM product WHERE product_id=?",
        req.body,
        (err, deleteProduct) => {
            console.log("category", deleteProduct);

            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            res.send({
                status: messages.SUCCESS,
                data: "Data deleted Successfully"
            });
        }
    )
}

export default deleteProduct;