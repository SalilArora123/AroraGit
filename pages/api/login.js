import db from '../../pages/api/db'


const loginUserData = async (req, res) => {

    console.log("req.body", req.body);
    await db.query(
        "SELECT * FROM `user` where email='" + req.body.email + "' AND password='" + req.body.password + "'",
        (err, loginUser) => {
            console.log("loginUser", loginUser);
            if (loginUser != 0) {
                res.send({
                    status:'user exists',
                    data: loginUser
                })
            }
            else if (loginUser == 0) (
                res.send({
                    status:"user does not exist",
                    data: loginUser
                })
            )
        }
    )
}

export default loginUserData;