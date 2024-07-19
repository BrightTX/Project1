const pokemonCa = require("pokemon")
// console.log(pokemonCa.all())

const arr=[];
for ( let i=0 ; i<5; i++){
    arr.push(pokemonCa.random())// she used push to put it inside the arr[]
}
console.log(arr)
