const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Feedback = new Schema({
    fName: {
        type: String,
        unique: true
    },
    fComment: {
        type: String,
        unique: true
    },
    fRating: {
        type: Number,
    },
});

const newFeedback = mongoose.model("feedback", Feedback); //create database collection

module.exports = newFeedback;