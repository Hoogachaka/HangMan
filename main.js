// initializing Arrays
let playerWord = '-----'.split('')
let hiddenWord = 'HELLO'.split('')
let tries = 0

// Main funciton
const hangmanFunc = (letter) => {
    for (let index = 0; index < hiddenWord.length; index++) {
        const element = hiddenWord[index];
        const place = hiddenWord.indexOf(element);        
        if(letter.toUpperCase() == element){
            playerWord[place] = letter.toUpperCase()
            }
        }
    document.getElementById("output").innerHTML = playerWord
}

