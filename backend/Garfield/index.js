// !from 1 to 7 is the foundation 
// import express
const express = require('express');
// create an instance of express application
const app = express();

const port = process.env.PORT || 3001;

// (Garfield)server static data from public folder (is more like import )
app.use(express.static(`public`)) ;
// Root Route Handlers
app.get('/', (req,res) => {
    // res.send('Hello ');
    //! we can redirect from home page or any other page 
res.redirect('/home')
});
// home route
app.get('/home',(req,res)=>{
    res.send (` YOU got redirected to here this home page`);
});


// about route
app.get('/about', (req, res) => {
    res.send (`this is about route`);
});

// contact route 
app.get('/contact',(req,res)=>{
    res.send(`this about contact route`);
});


// route parameters
// url entered localhost3000/( السر هنا فى كلمة انة بلطريقة دئ اى طلب من المستخدم  genra )
// ! genra here represent (parameters)
app.get('/music/:genre', (req,res) => {
   let genre= req.params.genre 
    res.send(`Welcome to the ${genre} music page`);
});

// breakfast par EX
app.get('/order/:breakfast ',(req,res) => {
    // it create option like box and inside the but key value pairs 
    let options = {
        eggs:'scrambled',
        toast:'with butter please',
        juice:'orange please'
    };
//  here we assign option to food 
    let food =req.params.breakfast;
    // and now she create a new box option and assign  it options [food] 
    let option = options [food];
    //  and here she res every thing to option 
    res.send(option);
});


// query 
app.get('/Bank',(req,res)=>{

    // let name = req.query.name
    // let bankBalance = req.query.bankBalance

    let {name,bankBalance}=req.query
    // 
    if (name,bankBalance) {
        res.send(`hey ${name},give me $${bankBalance}, I know you have it.`)
    }else {
            res.send('Pls provide both name And bankBalance in the query parameters')
        }
})


// Catch all is when user ask for route is not in server
app.get('*',(req,res)=>{
    res.send(`dose not exist `);
});
// listener stay in bottom  
// start the server and make it listen for request on spacified port 
app.listen(port, () => {
    console.log(`Garfield server listen ${port}`);
});