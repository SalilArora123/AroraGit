import db from '../db'
import messages from '../const';


const editCategory = (req, res) => {
    console.log("reqbody", req.body);
    
        db.query(
            "UPDATE Category SET `category_name`= '" +
            req.body.categoryName +
            "' WHERE category_id =?",
            req.body.id,
            (err, updatedCategoryList) => {
                console.log("updatedCategoryList", updatedCategoryList);
                if (err) {
                    res.send({
                        status: messages.ERROR,
                        error: err,
                    });
                } else {
                    res.send({
                        status: messages.SUCCESS,
                        data: updatedCategoryList,
                    });
                }
            });
    };

export default editCategory;
