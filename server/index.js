//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restuarant";


//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());


//passport configurations
googleAuthConfig(passport);
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
zomato.use("/restaurant", Restaurant)

zomato.get("/", (req, res) => res.json({ message: "SetUp Success ✅" }));

zomato.listen(4000, () =>
    ConnectDB().then(() => console.log("Server is running 🚀"))
    .catch(() => console.log("DB connection failed")));