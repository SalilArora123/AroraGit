
import db from '../db'
import * as messages from '../const';

const EditProduct = (req, res) => {
    console.log("reqbodyEditProduct", req.body);

    db.query(
        "UPDATE product SET `product_name`= '" +
        req.body.productName +
        "' ,`product_description` ='" +
        req.body.productdescription +
        "' ,`product_price` ='" +
        req.body.productprice +
        "' WHERE product_id =?",
        req.body.id,
        (err, updatedProductList) => {
            console.log("updatedCategoryList", updatedProductList);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            } else {
                res.send({
                    status: messages.SUCCESS,
                    data: updatedProductList,
                });
            }
        });
};

export default EditProduct;
