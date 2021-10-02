import express from "express";
import passport from "passport";
import AWS from "aws-sdk"
//Database Model
import { ImageModel } from "../../database/allModels";
const Router = express.Router();

//AWS s3 bucket configurations
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKeyId: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
});
/*
Route            /image
Des              upload given image to s3 bucket and return save file link to mongoDB
Params           none
Access           Public
Method           GET
*/
Router.post("/", async(res, req) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;