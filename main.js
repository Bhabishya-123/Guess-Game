//Number Guess 
//Targeting the elements DOM
const randomnum = parseInt(((Math.random() * 100) + 1));
const guess = document.querySelector('#guessnum');
const submt = document.querySelector('#subm');

let previousGuesses = [];

//Using events and functions
submt.addEventListener('click', match);

function match() {
    if (guess.value == randomnum) {

        document.getElementById("res").innerHTML = "You guessed Correct";
        //Deleting prevguess paragraph incase guess matched
        var element = document.getElementById("PG");
	        element.parentNode.removeChild(element);
    }
    else {
        document.getElementById("res").innerHTML = "You guessed Incorrect";
    }

    console.log(guess.value);
    console.log(randomnum);


    Hint();
            //Grab guess from user
            const gess = parseInt(guess.value);
            prevguess(gess);
            overattemt();
}


//Displaying previous guesses
function prevguess(gess) {
    //Keep record of number of attempted guesses
     previousGuesses.push(gess);
    document.getElementById('PG').innerHTML = `Previous Guesses: ${previousGuesses}`;
}

//Game over limitation
function overattemt() {
    if(previousGuesses.length>10){

        //1st we need to clear PG element so that our append child() shouldn't add previous data
        document.getElementById('PG').innerHTML='';

        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.innerHTML = "Game Over: Retry";  // insert text inside button
        document.getElementById('PG').appendChild(btn);  //inserted to that id element

        //adding eventlistener in created btn 
        document.getElementById("PG").addEventListener("click", function() {
            window.location.reload();
          });

          
        guess.setAttribute('disabled', ''); //this will set input guess disabled 
        submt.setAttribute('disabled', ''); //this will set submit btn disabled 
        document.getElementById("hint").innerHTML ='';
    }
 }


function Hint() {

    if (guess.value < randomnum - 20) {
        document.getElementById("hint").innerHTML = "Hint!: Your value is too low";
    }
    else if (guess.value > randomnum + 20) {
        document.getElementById("hint").innerHTML = "Hint!: Your value is too high";
    }
    else if (guess.value == randomnum) {
        document.getElementById("hint").innerHTML = "Hint~Your got me ";
        guess.setAttribute('disabled', ''); //this will set input guess disabled 
        submt.setAttribute('disabled', ''); //this will set submit btn disabled 

        //To enabled 2nd input and btn after guessnum successed
        guess2.removeAttribute('disabled');
        submt2.removeAttribute('disabled');
    }
    else {
        document.getElementById("hint").innerHTML = "Hint!: Your are near the value";
    }
}




//Alphabet Guess
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

const guess2 = document.querySelector('#guesschar');
const submt2 = document.querySelector('#subm2');


//Using events and functions
submt2.addEventListener('click', match2);

function match2() {
    if (guess2.value == randomCharacter) {
        document.getElementById("res2").innerHTML = "Correct Letter <br> You won the Game";
        guess2.setAttribute('disabled', '');
        submt2.setAttribute('disabled', '');
    }
    else {
        document.getElementById("res2").innerHTML = "Try Again!!";
    }
    console.log(guess2.value);
    console.log(randomCharacter);
}
