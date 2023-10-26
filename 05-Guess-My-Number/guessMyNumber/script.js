'use strict';

let secretNumber = Math.floor(Math.random()*20);

let score = 20;
let highscore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('enter a valid number')

    }else if(guess === secretNumber) {
        displayMessage('correct!')
        document.body.style.backgroundColor = 'green';
         score += 1;
         document.querySelector('.score').textContent = score;
         document.querySelector('.number').textContent = secretNumber;
         document.querySelector('.number').style.width = '30rem'
         if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'To high' : 'too low')
         score -= 1;
         document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost the game'); 
            document.querySelector('.score').textContent = 0;
        }
    }
}
)
document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.floor(Math.random()*20);
    displayMessage('start guessing...');
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;




})

