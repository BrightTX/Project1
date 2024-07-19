const express = require ('express');
const app = express();
// * PORT have to be capital litters 
const port = process.env.PORT || 3000 ;

//! this new server static data from public dir (we will open road to puplic folder and add index.html so we can displayed in routs )
//*we use (.use) and .static data from public dir 
app.use(express.static('public'));

//handler (root route) 
app.get('/',(req,res)=>{
    res.send('Im the route of Garfield 1')
})

// ex for route  parameters 
app.get('/music/:genre',(req,res)=>{
    // you can make it more dinamic by timberlitler 
    let genre = req.params.genre
    res.send(`welcome to the ${genre} page` )
})

//* exercise for parameters (when you try to type the url order/eggs )
//* order is the rout breakfast is the params
app.get('/order/:breakfast',(req,res) => {
    let recipe ={// create key value bears 
        eggs : 'scrambled' ,
        toast : 'with butter' , 
        juice: 'Orange'
    };
let food = req.params.breakfast; // here to activate  breakfast rout/params 
let option = recipe [food]; // here we create option  to connect recipe to food  

    res.send(option);// here send option to have access to recipe and breakfast params (whatever is inside recipe obj)
}) 

//* exercise with the thunderClint (query) 
//Query-Demo - Exercise
//Send 2 key value pairs(name and bankBalance) to our server using Thunder Client
//and display:
//Hey < name >, give me $ < bankBalance >.I know you have it!
//But if any information is missing, display:
//Please provide name AND bankBalance in the query parameters.
app.get('/bank',(req,res) => {
let {name, bankBalance} =req.query
if (name,bankBalance) {
    res.send(`hay${name},give me ${bankBalance}, I know you have it. `)
}else{
    res.send('Please provide name and BankBalance in query parameters')
}
})
















//*Listener 
app.listen(port,()=> console.log(`this is Garfiled server ${port}`));
