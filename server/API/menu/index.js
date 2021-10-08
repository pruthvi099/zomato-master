import express from "express";
import passport from "passport";

//Database Model
import { MenuModel, ImageModel } from "../../database/allModels";
const Router = express.Router();

/*
Route            /list
Des              Get all menu based on id
Params           _id
Access           Public
Method           GET
*/
Router.get("/r/:id", async(req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route            /image
Des              Get all images based on id
Params           _id
Access           Public
Method           GET
*/
Router.get("/image/:id", async(req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.find(_id);
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;