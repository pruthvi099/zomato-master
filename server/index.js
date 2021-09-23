// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";


// Database connection
import ConnectDB from "./database/connection";

const zomato = express();


// application middleware
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());


zomato.get("/", (req, res) => res.json({ message: "Setup success" }));


zomato.listen(4000, () =>
    ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() =>
        console.log("Server is running, but database connection failed... ")
    )
);