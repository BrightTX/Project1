//foundation 
const express = require('express')
const logger =require("morgan")// import morgan 
const app = express();
const port = process.env.PORT || 3000;
app.use(logger('dev'))// here we tell the app we want to use it 
//import our data 
const books = require('./books/booksList');
const booksList = require('./books/booksList');

// parse the body (if we want to grab from the body)
// its when want to hide data inside the  body and you eant to extract 
// 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//root route 
app.get('/', (req, res) => {
    res.send('this library root rout ')
});



// get all the books (select all the books 
app.get('/booksList', (req,res) => {
    res.json(booksList);
})

// get single book using id (this also in reading ) 
app.get('/bookList/:id', (req, res) => {
    // grab the id from the clint
    let bookId = req.params.id
    //find the matching data for  the ID 
    let book = books.find(book => book.id == bookId)
    // if book id dos'nt exist
    if (!bbok) {
        res.status(404).json({error:'book not found'})
    }
    // send back to clint 
    res.json(book);

})

// create add a new book using (post) 
app.post('/booksLest', (req, res) => {
    //grab title , author and category from user 
    const { title, author, category } = req.body
    // set the template 
    const newBook = {
        id: Date.now(),
        title: title,
        author: author,
        category:category,
    }
    //add it to our current books 
    books.push(newBook)
    //send it back 
    res.json({message:'successfully added new book',newBook})
})

//update existing book using put for update 
app.put('/booksList/:id', (req, res) => {
    // grab the id   
    let bookId = parseInt(req.params.id)// using parseInt for add the data file and extract the data form it
    //grab the update date
    let update = req.body// we used . body becouse we wanna grab it form some wear 
    // finding the matching Id we used findindex to look in side array (booksList its inside array )
    let Index = booksList.findindex(book => book.id === bookId)
    // take updatedBook and pass it into our index 


    // was a match found 
    if (index !== -1) {
        // we want this if match found 
        if (updatedBook.title || updatedBook.author || updatedBook.category) {
            booksList[Index]
        }
    }
}) 












app. listen(port,()=> console.log(`library app is running on port :${port}`))