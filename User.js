const mongoose = require("mongoose")

// this line of code will add id too with this
const addressSchema = new mongoose.Schema({
      street : String,
       city : String
})
const userSchema = new mongoose.Schema({
    name : String,
    age: Number,
    email: String,
    createdAt : Date,
    updatedAt: Date, 
    bestFrient : mongoose.SchemaTypes.ObjectId,
    hobbies : [String],
    // address : {
    //     street : String,
    //     city : String
    //     }
    address : addressSchema
})

module.exports = mongoose.model("User", userSchema)

