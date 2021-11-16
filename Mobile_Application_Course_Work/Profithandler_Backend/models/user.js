const mongoose = require('mongoose');


const user = mongoose.Schema(
    {
    name:String,
    email:String,
    contact:String,
    password: String,
    },
{collection: "user"}
);

module.exports = mongoose.model("User", user)