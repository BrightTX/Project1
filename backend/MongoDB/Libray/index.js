require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000;
//FOUNDATION

// console.log(process.env)

const connectionString = process.env.MONGODB_URI

//Establish a connection to mongodb
mongoose.connect(connectionString)
    .then(() => console.log(`Success: Connecting to MongoDB`))
    .catch((error) => console.log(`Error: Issue connection to MongoDB`, error))

//import my model
const BooksModel = require('./models/books');
// need to export 

//Middleware
app.use(morgan('dev')) //route logger
app.use(express.urlencoded({ extended: false })) //Tries to parse data sent from form first
app.use(express.json()) // Then tries to parse data sent in json format

//ROUTES
app.get('/', (req, res) => {
    res.send("ROOT ROUTE")
})

//creating 
app.post('/books', (req, res) => {
    const { title, author, category, year } = req.body
    if (title && author) {
        const newBook = {
            title: title,
            author: author,
            category: category ? category : '',
            year: year
        }
        //call and save our new book
        BooksModel.create(newBook)
            .then((createdBook) => {
                res.status(201).json({ message: 'success', createdBook })
            })
            .catch(error => {
                res.status(500).json({ message: 'Error: Failed to create  new Book', error })
            })
    } else {
        res.status(400).json({ error: 'Failed to create book' })
    }
})

//reade
app.get('./books', (req, res) => {
    BooksModel.find({})
        .then(books => {
            res.json({ message: 'Success', books })
        })
        .catch(error => {
            res.status(500).json({ message: 'Error:uneble to retrive' })
        })

})
// update
app.put('/books/:id', (req, res) => {
    // Get the Id of the book 
    const bookId = req.params.id;
    const updatedFields = req.body;
    BooksModel.findById(bookId)
        // if the request book not found respond 
        .then(book => {
            if (!book) { return res.status(404).json({ message: "Error: Book not found" }) }
            Object.keys(updatedFields).forEach(key => {
                if (updatedFields[key] !== undefined) {
                    book[key] = updatedFields[key];
                }
                // call off to our db and save the modified document 
            })
            return book.save();
        })
        .then(updated => {
            res.status(200).json({
                message: "Success updating", updated: updated
            })
        })
        .catch(error => {
            res.status(500).json({ error: "Server Error. Failed to update book." })
        })
})


// Delete
app.delete('/books/:id', (req, res) => {
    BookModel.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            if (!deletedBook) {
                return res.status(404).json({ message: 'Failure: Book not found' });
            }
            res.json({ message: "Success: Book deleted" });
        })
        .catch(error => {
            res.status(500).json({
                message: "Failure: Error deleting book", error:
                    error.message
            });
        })
})

// red - Get book by category
app.get('/books/category', (req, res) => {
    const { category } = req.query

    BooksModel.find({ category: category })
        .then(books => {
            if (books.length > 0) {
                res.status(200).json({ message: "Success", books: books })
            } else if (books.length == 0) {
                res.status(200).json({
                    message: "Success", books: "No .books .found"
                })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})



//LISTENER
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`))



// routs showing how to reference collection 



// create an author
app.post ('/')