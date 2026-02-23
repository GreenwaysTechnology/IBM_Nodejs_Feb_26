const mongoose = require('mongoose')

//declare schema
const postSchema=mongoose.Schema({
    title:String,
    content:String
})

//create model(instance of schema)
module.exports = mongoose.model('Post',postSchema)