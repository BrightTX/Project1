const mongoose = require('mongoose')



// define the schema for the book entity
const booksSchema = new mongoose.Schema({
    title: {
        type: String,//Date type is string 
        required: true//title is required
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        min: 1000,    //Min publication year 
        max: new Date().getFullYear()//Max publication year
    }
})



//complie the schema 
const BooksModel = mongoose.model('books',booksSchema)

//Export so we can use in our index.js 
module.exports = BooksModel;