const allWords = ['javascript', 'array', 'object', 'condition', 'boolean'];
let chosenWord = '';

let numOfBlanks = 0;
let wins = 0;
let losses = 0;

let isWin = false

let timerCount;

const init = () => {
    // will call functions that will get num of wins and losses
};

const startGame = () => {
    // will assign isWin to false so game can restart 

    //assign the number of secs to timercount 

    // call function to startTimer
    // call function to render the blanks
};

const winGame = () => {
    // will text to user that they won 

    // add ++ to wins 

    // call function to set wins to local storage


};

const loseGame = () => {
       // will text to user that they lost

    // add ++ to losses

    // call function to set the losses to local storage 
};

const startTimer = () => {
    // set up a setInterval 

    // display the timer to the user 

    // if isWin && timer > 0 
        // call winGame

    // if timer === 0 
        // call loseGame


};

const renderBlanks = () => {
    

    // loop through allWords and choose 1 word 

    // split the chosenWord

    // assign the length of that split word into a variable \
    


    // use a for loop 
    // to push _ into wordDisplay for the lenght of the split chosen word 

    






};

const setWins = () => {

    // use local storage to set wins 

};

const setLosses = () => {

    // use local storage to set losses
};

const getWins = () => {

// use local storage to get wins

// and display to user 

};

const getLosses = () => {
   // use local storage to get losses

// and display to user 
};

const checkWin = () => {

    // if chosenWord === blankletters 

    // isWin is true
};

const checkLetters = (letter) => {


    // create var name "letterInWord" and assign to false
 // loop through numOfblanks
    // if word[i] === letter 
    // letterInword = true

// if letterInWord 
    // loop through numOfBlanks
    // if word[i] === letter
    // blankLetters = letter


    // inside if true statement 
        // display blankLetters joined together


};