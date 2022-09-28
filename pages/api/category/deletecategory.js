import db from '../db'
import messages from '../const';

const deleteCategory = (req, res) => {

    console.log("req.body Category", req.body);
    console.log("req.method", req.method);


        db.query("DELETE FROM Category WHERE category_id=?",
            req.body,
            (err, deleteCategory) => {
                console.log("category", deleteCategory);

                if (err) {
                    res.send({
                        status: messages.ERROR,
                        error: err,
                    });
                }
                res.send({
                    status: messages.SUCCESS,
                    data: deleteCategory
                });

            }
        )
    }

export default deleteCategory;