const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection was successful");
})

const app = express();

const PORT = process.env.PORT || 8070;
F
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})