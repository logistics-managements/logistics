const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Feedback = new Schema({
    fName: {
        type: String,
    },
    fComment: {
        type: String,
    },
    fRating: {
        type: Number,
    },
});

const newFeedback = mongoose.model("feedback", Feedback); //create database collection

module.exports = newFeedback;