// we called the(import) package  data using require 
//when function inside  the object we called amethoed  getRandomJoke: [Function: getRandomJoke],
//const and make a veriable oneLinerJoke  
const oneLinerJoke = require ('one-liner-joke');

//for test what we have 
// console.log(oneLinerJoke.getRandomJoke())

//*.getRandomJoke is function in provided by the packages 
const theJoke=oneLinerJoke.getRandomJoke({
exclude_tags:['dirty'] //here we did filter by using exclude_tag which also is provided 
})
console.log(theJoke)
