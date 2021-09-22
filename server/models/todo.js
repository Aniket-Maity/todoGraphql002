const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    todoString:{
        type: String,
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model("Todo", todoSchema)