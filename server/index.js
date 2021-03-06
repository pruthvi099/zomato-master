//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Images";
import Order from "./API/orders";
import Reviews from "./API/reviews"
import User from "./API/User";
import Menu from "./API/menu";
import MailService from "./API/Mail";
import Payments from "./API/Payments";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());


//passport configurations
googleAuthConfig(passport);
routeConfig(passport);
const session = require("express-session");

// application middlewares
zomato.use(session({
    secret: 'anything',
    resave: true,
    saveUninitialized: true
}));
zomato.use(passport.initialize());
zomato.use(passport.session());

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/mail", MailService);
zomato.use("/payments", Payments);

zomato.get("/", (req, res) => res.json({ message: "SetUp Success ✅" }));

zomato.listen(4000, () =>
    ConnectDB().then(() => console.log("Server is running 🚀"))
    .catch(() => console.log("DB connection failed")));