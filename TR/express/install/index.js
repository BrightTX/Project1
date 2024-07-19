//! step one require to import express
const express = require('express');
//*step 2 create an instance of express application
const app = express();
//!building a port 3000 or 5000 is the port developer use in back end and now toy can change 3000 in Listener to port 
//!in other words was a port (PORT have to be capital litters ) created in our process? if not use 3000
const port = process.env.PORT || 3000;

//! step 3 making route Handlers 
// (/)is the route and you need REQ and RES [res.send ] it mean you respond ro the server req
app.get('/', (req, res) => {
    //res.send('second server!!!')
    res.redirect('/home') //* use redirect you can redirect routs to different routs 
});

//*add page route  home route
app.get('/home', (req, res) => {
    res.send('this is Home')
});
//*add page route  about route
app.get('/about', (req, res) => {
    res.send('this is about ')
});

//* create contact rout 
app.get('/contact', (req, res) => {
    res.send('this is contact page ')
});


//!if user req a page we do 't have we create a (deals with request not handel)catch all 
//!very important to put catch all after all the route handlers
app.get('*', (req, res) => {
    res.send('dose not compute??')
});
//!step 4 Listener
// app.listen(3000);
//*after we used port we passing a call back ()=>
app.listen(port, () => console.log(`Basic server running on port ${port}`));