import db from '../db'
import * as messages from '../const';


const prefilledCat = (req, res) => {

    console.log("prefill", req.body);

    db.query(
        "SELECT * FROM Category WHERE category_id=" + req.body.id + "",
        (err, categoryList) => {
            console.log("categoryList", categoryList);
            if (err) {
                res.send({
                    status: messages.ERROR,
                    error: err,
                });
            } else {
                res.send({
                    status: messages.SUCCESS,
                    data: categoryList,
                });
            }
        });
};

export default prefilledCat;
