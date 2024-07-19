// FOUNDATION
const express = require("express");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 3001;

// hey app, I want you to use logger/morgan in dev mode
app.use(logger("dev"));

// import our mock data of books
const books = require("./Library/books");

//parse the incoming body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
    res.send(`This is the Library root route`);
});

// READ - get all books back
app.get("/books", (req, res) => {
    // get all books and send back to client
    res.json(books);
});

// READ - get single book back using id as params from user
app.get("/books/:id", (req, res) => {
    // grab the id from client (comes in as a string)
    let bookId = req.params.id;
    // find the matching data for that id
    let book = books.find((book) => book.id == bookId);
    // if id doesn't exist:
    if (!book) {
        // send back 404 status and error message
        res.status(404).json({ error: "Book not found" });
    }
    // send book back to client
    res.json(book);
});

// CREATE - add a book
app.post("/books", (req, res) => {
    // grab title, author and category from user coming from body in req obj
    const { title, author, category } = req.body;
    // set the template
    const newBook = {
        // make unique id using milliseconds since epoch
        id: Date.now(),
        // key value pairs where value is taken from body
        title: title,
        author: author,
        category: category,
    };
    // add it to our current books
    books.push(newBook);
    // send it back to client along with message
    res.json({ message: "Successfully added new book", newBook });
});

// UPDATE change a current book
app.put("/book/:id", (req, res) => {
    // *grab the id from clint
    let bookId = parseInt(req.params.id);
    let updatedBook = req.body;
    // find the matching id for the book

    const index = books.findIndex((book) => book.id === bookId);
    // take updateBook and update the books  array
    // was a match not found
    if (index !== -1) {
        // if theres as a match
        if (updatedBook.title || updatedBook.author || updatedBook.category) {
            // update book found  at this index
            books[index] = {
                ...books[index],
                title: updatedBook.title || books[index].title,
                author: updatedBook.author || books[index].author,
                category: updatedBook.category || books[index].category,
            };
            // send ok status and jason body with sucsess
            res
                .status(200)
                .json({ message: "successfully updated", update: books[index] });
        } else {
            res.status(400).json({ message: "Error:no data sent to be updated " });
        }
     //  was match not found
    } else {
        res.status(400).json({message:'Error : book not found'})
    }
    //  was match not found
});

// DELETE a book from array
app.delete('/book/:id',(req,res)=>{
    // grab the id from the Url that client 
    bookId=parseInt( req.params.id )
    // find book with match ID  
    let deletedBookIndex= books.findIndex(book=>book.id===bookId)
    // if there is match 
    if(deletedBookIndex !== -1){
        //  if there is match using Splice method [array]
        let deletedBookArray= book.splice(deletedBookIndex, 1);
        res.json({message:'successfully deletedBookArray', deletedBook: deletedBookArray[0]})
        //  if there is no match found 

    } else{
        // send back error message 
        res.status(400).json({message:"can't delete book , book not found"})
    }

})

// LISTENER
app.listen(port, () => console.log(`library app is running on port: ${port}`));
