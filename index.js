var player, winner = null;
let playerSelect = document.getElementById("player-select")
let winnerSelect = document.getElementById("player-winner")
let squares = document.getElementsByTagName("square")

drawPlayer()
// changePlayer('X')

function squareSelect (id){
    if (winner !== null) {
        return
    }

    let square = document.getElementById(id)
    if (square.innerHTML !== '-') {
        return
    } 
    square.innerHTML = player;
    square.style.color = '#000000';

    if (player === "X") {
        player = "O";
        square.style.backgroundColor = '#00f'
        playerSelect.style.color = '#f00'
        
    }else{
        player = "X";
        square.style.backgroundColor = '#f00'
        playerSelect.style.color = '#00f'
    }
    changePlayer(player)
    checkWinner()
}

function changePlayer (value){
    player = value;
    playerSelect.innerHTML =  `Jogador ${value} é a sua vez`;
    
}

function checkWinner(){
    let square1 = document.getElementById('1')
    let square2 = document.getElementById('2')
    let square3 = document.getElementById('3')
    let square4 = document.getElementById('4')
    let square5 = document.getElementById('5')
    let square6 = document.getElementById('6')
    let square7 = document.getElementById('7')
    let square8 = document.getElementById('8')
    let square9 = document.getElementById('9')

    if (checkSequence(square1, square2, square3)) {
        changeColorSquare(square1, square2, square3)
        changeWinner(square1)
        return
    }
    if (checkSequence(square4, square5, square6)) {
        changeColorSquare(square4, square5, square6)
        changeWinner(square4)
        return
    }
    if (checkSequence(square7, square8, square9)) {
        changeColorSquare(square7, square8, square9)
        changeWinner(square7)
        return
    }
    if (checkSequence(square1, square4, square7)) {
        changeColorSquare(square1, square4, square7)
        changeWinner(square1)
        return
    }
    if (checkSequence(square2, square5, square8)) {
        changeColorSquare(square2, square5, square8)
        changeWinner(square2)
        return
    }
    if (checkSequence(square3, square6, square9)) {
        changeColorSquare(square3, square6, square9)
        changeWinner(square3)
        return
    }
    if (checkSequence(square1, square5, square9)) {
        changeColorSquare(square1, square5, square9)
        changeWinner(square1)
        return
    }
    if (checkSequence(square3, square5, square7)) {
        changeColorSquare(square3, square5, square7)
        changeWinner(square3)
    }
}

function changeWinner(square) {
    winner = square.innerHTML;
    winnerSelect.innerHTML = `Jogador ${winner} venceu!`
    winnerSelect.style.color = '#0f0'
    playerSelect.innerHTML =  ``;
    
}

function changeColorSquare(square1, square2, square3) {
    square2.style.backgroundColor = "#0f0";
    square3.style.backgroundColor = "#0f0";
    square1.style.backgroundColor = "#0f0";
}


function checkSequence(square1, square2, square3) {
    let okSequence = false;

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        okSequence = true;
    }
    return okSequence
}

function restart(){
    winner = null
    winnerSelect.innerHTML = '';

    for (let index = 1; index <=9; index++) {
        let square = document.getElementById(index);
        square.style.background = '#ffffff'
        square.style.color = '#fff'
        square.innerHTML = '-'
    }
    changePlayer(player)
}

function drawPlayer (){
    if(Math.floor(Math.random() * 2)==0) {
        player = 'X'
        playerSelect.style.color = '#00f'
    }else{
        player = 'O'
        playerSelect.style.color = '#f00'
    }
    playerSelect.innerHTML =  `Jogador ${player} é a sua vez`;
}