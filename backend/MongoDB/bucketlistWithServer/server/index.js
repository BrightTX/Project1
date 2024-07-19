const serverless = require('serverless-http') //Module to help us deploy our app
const express = require('express');
const app = express();
const cors = require('cors');
// const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
//Foundation



//Middleware
app.use(cors()) // Cross-origin-resource allows requests from other domains
app.use(express.urlencoded({extended: false})) //Parse traditional form data sent in key: value pairs
app.use(express.json()) //Parse data that is sent in the body as JSON turns from string to js object
// app.use(morgan('dev')) //Logs the requests made to our server

//Import our mock data
const bucketListData = require('./data/mock');

//Routes
app.get('/', (req, res) => {
    res.send("Root Route")
})

//Read
app.get('/bucket', (req, res) => {
    //Send all bucketlist items back
    res.json(bucketListData)
})


//Create
app.post('/bucket', (req, res) => {
    const { description } = req.body; //Grab what user/client sent in
    //Check to make sure we have a description to create a new bucketlist Item
    if(description){
        //Build out our new bucketlist object
        let newItem = {
            id: Date.now(),
            description: description,
            isComplete: false
        }
        //Add it to the rest of our data
        bucketListData.push(newItem)
        res.status(201).json({ message: "Success", newItem})
    } else {
        res.status(400).json({ message: "Oops no description received"})
    }
})


//Update
app.put('/bucket/:id', (req, res) => { 
    const requestedId = parseInt(req.params.id) //Convert from string to number to match our data
    const bucketItem = bucketListData.find(item => item.id === requestedId) //Get our item to update
    if(bucketItem){ //If we found the item update isComplete
        bucketItem.isComplete = !bucketItem.isComplete; //Toggle and update our item
        res.json({ message: "Success", bucketItem});
    } else {
        res.status(404).json({ error: "ID for updating does not exist"})
    }
})


//Delete
app.delete('/bucket/:id', (req, res) => {
    const requestedId = parseInt(req.params.id) //Grab the id of the item requested to be deleted
    // Iterate through bucketlist data and find the matching item
    const deletedIndex = bucketListData.findIndex(item => item.id === requestedId)
    if(deletedIndex !== -1){
        // Remove that item and send back a success message
        const deletedItem = bucketListData.splice(deletedIndex, 1);
        res.json({ message: "Success", deletedItem})
    } else {
        // send back an error notification if its not found
        res.status(404).json({ error: "Id not found for deletion"})
    }
})




//Listener
// app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`))
module.exports.index = serverless(app)