const superFood = require('superfood')
// console.log(superFood.random())

// !to display all
// console.log(superFood.all) 
//if you want to display 5 random food name
//create  for loop
//!in this package .all its array 
// for(let i = 0; i < 5; i++) {
    // console.log(superFood.random())
// }
//*make a filter for only display food start with D
//so what she did is create a variable and will use filter methode 
const Dfood = superFood.all.filter ( food => {
    return food.toLowerCase().startWith('s') //startwith() method to check a string start with waht caracter 
})
    console.log(Dfood)