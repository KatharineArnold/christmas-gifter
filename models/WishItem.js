const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const WishItem = new Schema({
    item: String
});

module.exports = WishItem;
