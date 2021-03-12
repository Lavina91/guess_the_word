//Variable Declarations
const allWords = ['javascript', 'array', 'object', 'condition', 'boolean'];
let chosenWord = '';

let numOfBlanks = 0;
let wins = 2;
let losses = 2;

let isWin = false

let timer;
let timerCount = 10;


// Functions

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

    timer = setInterval(function () {
        
    timerCount--;

    $('.timer-count').text(timerCount);

        if (isWin && timerCount > 0) {
            clearInterval(timer)
            winGame();
        }

        if (timer === 0) {
            clearInterval(timer);
            loseGame();
        }

    },1000)
}; // DONE

const renderBlanks = () => {
    
     // loop through allWords and choose 1 word 
    chosenWord = allWords[Math.floor(Math.random()* allWords.length)]

    // split the chosenWord
    let splitWord = chosenWord.split('')


    // assign the length of that split word into a variable 
    numOfBlanks = splitWord.length;
    
    // use a for loop 
    // to push _ into wordDisplay for the lenght of the split chosen word 

    let blankLetters = [];

    for (let i = 0; i < numOfBlanks; i++) {
        blankLetters.push('_')
    }

    $('.word-blanks').text(blankLetters.join(' '))


}; // DONE 


const setWins = () => {

    localStorage.setItem('wins', wins);

}; //DONE 

const setLosses = () => {

    localStorage.setItem('losses', losses);
}; // DONE





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

    let letterInWord = false;

    for (let i = 0; i < numOfBlanks;i++) {
        if(chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if(letterInWord) {
        for(let j = 0; j < numOfBlanks; j++) {
            if(chosenWord[i] === letter) {
                blankLetters = letter
            }
        }
    
        $('.word-blanks').text(blankLetters.join(' '))
    }


};

const resetScore = () => {
    //assign wins & losses to 0

    // call setWins and setLosses
};


// Event Listeners 

$('.start-button').on('click', startTimer);



$('.reset-button').on('click', function (event){
    alert('I am alive')
});


document.addEventListener('keydown', function (event) {
    // if timer === 0 
    // return out 


    // assign var to hold event.key.toLowerCase
    //assign var to hold all alphabet


    // use an if statement to check if alphabet var.includes(key)
        // assign var of letterGuessed = event.key
        //call checkLetters with letterGuessed passed in 
        // call checkWin


})


// call init()