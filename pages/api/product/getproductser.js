import db from '../db'
import * as messages from '../const';

const getProductsSer = (req, res) => {

    const categoryId = req.body.categoryId;
    console.log("categoryId", categoryId);
    let whereClause = "";

    if (categoryId != "" && categoryId != "undefined" && categoryId != "all") {
        whereClause = whereClause + "where category_id = " + categoryId + " "
    }
    
    console.log("SELECT * FROM product " + whereClause + " ");
    db.query(
        "SELECT * FROM product " + whereClause + " ",

        (err, productListing) => {
            console.log("LLLLLLLLLLLL", productListing);
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

export default getProductsSer;
