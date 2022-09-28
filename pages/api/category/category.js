import db from '../db'
import * as messages from '../const';


 const  categoryData=(req, res)=> {

    console.log("req", req.body);
    console.log("req.method",req.method);
    
        db.query("INSERT INTO `Category`(`category_name`) VALUES('" +
            req.body.categoryName +
            "')", (err, category) => {
                console.log("category", category);

                if (err) {
                    res.send({
                        status: messages.ERROR,
                        error: err,
                    });
                }
                res.send({
                    status: messages.SUCCESS,
                    data: "Data added successfully"
                });

            }
        )
    }

 export default categoryData;