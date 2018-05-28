/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var player1Total = 0;
var player2Total = 0;

var p1Current = 0;
var p2Current = 0;

var player1Name;
var player2Name;

var currentPlayer;

var panel1 = document.getElementsByClassName("player-0-panel");
var panel2 = document.getElementsByClassName("player-1-panel");

var player1Score = document.getElementById("score-0");
var player2Score = document.getElementById("score-1");

var current1 = document.getElementById("current-0");
var current2 = document.getElementById("current-1");

var btn_new = document.getElementsByClassName("btn-new");
var btn_roll = document.getElementsByClassName("btn-roll");
var btn_hold = document.getElementsByClassName("btn-hold");

//when the window is loaded
    //create a new game
window.onload = this.newGame();

//when new game button is clicked
btn_new[0].onclick = function() {newGame()};

//when the roll button is clicked
btn_roll[0].onclick = function() {rollDice()};

//when the hold button is clicked
btn_hold[0].onclick = function() {hold()};

function newGame(){
    panel1[0].classList.remove("active");

    playerNames();
    
    player1Total = 0;
    player2Total = 0;

    //reset both scores to 0
    player1Score.innerHTML = player1Total;
    player2Score.innerHTML = player2Total;

    //reset current to 0
    current1.innerHTML = p1Current;
    current2.innerHTML = p2Current;

    //random player to start
    var randomNumber = Math.floor(Math.random() * 2) + 1;

    selectPlayer(randomNumber);
}

function selectPlayer(player){ 
    if(player == 1){
        currentPlayer = 1;
        panel1[0].classList.add("active");
        panel2[0].classList.remove("active");
    } else {
        currentPlayer = 2;
        panel2[0].classList.add("active");
        panel1[0].classList.remove("active");
    }
}

function playerNames(){
    player1Name = prompt("Please enter your name player 1", "PLAYER 1");
    player2Name = prompt("Please enter your name player 2", "PLAYER 2");

    if (player1Name != null && player2Name != null) {
        document.getElementById("name-0").innerHTML = player1Name;
        document.getElementById("name-1").innerHTML = player2Name;
    }
}

function rollDice(){
    var dice = document.getElementsByClassName("dice");
    var rollValue = Math.floor(Math.random() * 6) + 1;

    switch(rollValue){
        case 1:
            dice[0].src = "dice-1.png";
            assignScore(1);
            break;
        case 2:
            dice[0].src = "dice-2.png";
            assignScore(2);
            break;
        case 3:
            dice[0].src = "dice-3.png";
            assignScore(3);
            break;
        case 4:
            dice[0].src = "dice-4.png";
            assignScore(4);
            break;
        case 5:
            dice[0].src = "dice-5.png";
            assignScore(5);
            break;
        case 6:
            dice[0].src = "dice-6.png";
            assignScore(6);
            break;
    }
}

function assignScore(score){
    if(score != 1){
        if(currentPlayer == 1){
            p1Current += score;
            current1.innerHTML = p1Current;
        } else if(currentPlayer == 2){
            p2Current += score;
            current2.innerHTML = p2Current;
        }
    } else if(score == 1) {
        if(currentPlayer == 1) {
            p1Current = 0;
            current1.innerHTML = p1Current;
            player1Score.innerHTML = player1Total;
            selectPlayer(2);
        } else if (currentPlayer == 2){
            p2Current = 0;
            current2.innerHTML = p2Current;
            player2Score.innerHTML = player2Total;
            selectPlayer(1);
        }
    }
}

function hold(){
    if(currentPlayer == 1){
        player1Total += p1Current;
        player1Score.innerHTML = player1Total;
        p1Current = 0;
        current1.innerHTML = p1Current;
        checkWin();
        selectPlayer(2);
    } else if(currentPlayer == 2){
        player2Total += p2Current;
        player2Score.innerHTML = player2Total;
        p2Current = 0;
        current2.innerHTML = p2Current;
        checkWin();
        selectPlayer(1);
    }
}

function checkWin(){
    if(player1Total >= 100){
        alert(player1Name + " Wins!");
    } else if (player2Total >= 100){
        alert(player2Name + " Wins!");
    }
}        