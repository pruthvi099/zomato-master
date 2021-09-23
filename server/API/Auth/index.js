import express from "express";
//Models
import { UserModel } from "../../database/user";
import bcrypt from "bcryptjs"

const Router = express.Router()
    /*
    Route /signup
    Des Signup with email and password
    Params none
    Access Public
    Method POST
    */
Router.post("/signup", (req, res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credentials;

        // check whether email exist
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });
        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "User already Exists" })
        }
        //hash password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //save to DB
        await.UserModel.create({...req.body.credentials, password: hashedPassword })

        //generate JWT auth token
        const token = jwt.sign({ user: { fullname, email } }, "ZomatoAPP")
            //return

        return res.status(200).json({ token, status: "Success" })
    } catch (error) {
        return req.statusCode(500).json({ error: error.message });
    }

})



export default Router;