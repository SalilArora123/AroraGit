import db from '../db'
import * as messages from '../const';

const getCategory = (req,res) => {

        db.query(
            "SELECT * FROM Category",
            (err, categoryList) => {
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
    

export default getCategory;
