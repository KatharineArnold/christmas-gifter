const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const GifterSchema = new Schema({
    name: String,
    match: String,
    matched: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var Gifter = mongoose.model("Gifter", GifterSchema);

// Export the Gifter model
module.exports = Gifter;
