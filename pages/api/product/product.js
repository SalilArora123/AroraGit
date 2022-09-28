import db from '../db'
import  * as messages from '../const';

const productData = (req, res) => {

    console.log("reqProducts", req.body);

    db.query("INSERT INTO `product` (`category_id`,`product_name`,`product_description`, `product_price`) VALUES (" +
        req.body.categoryName +
        ", '" +
        req.body.productName +
        "', '" +
        req.body.productDescription +
        "', " +
        req.body.productPrice +
        ")", (err, productData) => {
            console.log("category", productData);

            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            }
            else {
                res.send({
                    status: messages.SUCCESS,
                    data: "Data added successfully"
                });
            }
        }
    )
}

export default productData;

