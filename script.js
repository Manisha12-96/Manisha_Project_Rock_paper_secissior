// Declaration

const hands=["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const names=['rock','paper','scissor'];
const colorWinner='winner';

let handA=document.getElementById('handA');
let handB=document.getElementById('handB');
let nameA=document.getElementById('nameA');
let nameB=document.getElementById('nameB');

// let playerA=document.getElementsByClassName('player-a');
// let playerB=document.getElementsByClassName('player-b');
let playerA=document.getElementById('player-a');
let playerB=document.getElementById('player-b');

// Make Event Listeners
document.getElementById('play').addEventListener('click',play);
document.getElementById('stop').addEventListener('click',stopPlay);
document.getElementById('play-again').addEventListener('click',playAgain);

// Make Play Function
function play(){
    counterA=setInterval(runNumberA,100);
    counterB=setInterval(runNumberB,100);
}

// Make runNumberA function

function runNumberA(){
    const randomNumberA=getRandomNumberA();
    handA.setAttribute('class',hands[randomNumberA]);
    nameA.value=names[randomNumberA];
}
// Make runNumberB function

function runNumberB(){
    const randomNumberB=getRandomNumberB();
    handB.setAttribute('class',hands[randomNumberB]);
    nameB.value=names[randomNumberB];
}
// Make Random Numbers
function getRandomNumberA(){
    let min=0;
    let max=2;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumberB(){
    let min=0;
    let max=2;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopPlay(){
    clearInterval(counterA);
    clearInterval(counterB);

    //  Team A wins
    if (nameA.value==='scissor' && nameB.value==='paper') {
        resultA();
    } else if (nameA.value==='paper' && nameB.value==='rock') {
        resultA();
    } else if (nameA.value==='rock' && nameB.value==='scissor') {
        resultA();
    }
        // Team B wins
        else if (nameA.value==='rock' && nameB.value==='paper') {
            resultB();
        }  else if (nameA.value==='paper' && nameB.value==='scissor') {
            resultB();
        }  else if (nameA.value==='scissor' && nameB.value==='rock') {
            resultB();
        }
        // Draw
        else {
            playerA.innerHTML= "It's a Draw";
            playerB.innerHTML= "It's a Draw";
            playerA.setAttribute('class','Draw');
            playerB.setAttribute('class','Draw');
        }
}

function playAgain(){
    window.location.reload();
}

function resultA(){
    // document.getElementById("Player-a").innerHTML = "You Win";
    playerA.innerHTML = "You win!";
    playerA.setAttribute('class',colorWinner);
    playerB.innerHTML="Team B"
}

function resultB(){
    playerB.innerHTML = "You Win";
    playerB.setAttribute('class',colorWinner);
    playerA.innerHTML="Team A"
}