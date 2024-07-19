import yesNoWords from 'yes-no-words';
// console.log(yesNoWords)

const arr = []
for(let i=0; i<=5 ; i++) {
    arr.push(yesNoWords.allRandom())// this way she used .push()
    // console.log(yesNoWords.allRandom()) this my way 
}
console.log(arr);               