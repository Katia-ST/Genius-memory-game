let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

// Generate random color order
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Light the next color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 350);
}

// Check if the clicked buttons are the same as the generated order in the gane
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Score: ${score} \n You nailed it!! Start next level!`);
        nextLevel();
    }
}

// User click function
 let click = (color) => {
     clickedOrder[clickedOrder.length] = color;
     createColorElement(color).classList.add('selected');
    
     setTimeout(() => {
         createColorElement(color).classList.remove('selected');
         checkOrder();
     }, 250);
 }

 // Returns the color function
 let createColorElement = (color) => {
     if(color == 0) {
        return green;
     } else if (color == 1) {
         return red;
     } else if (color == 2) {
         return yellow;
     } else if (color == 3) {
         return blue;
     }
 }

 // Next game level function
 let nextLevel = () => {
     score++;
     shuffleOrder();
 }

// Game over function
let gameOver = () => {
    alert(`Score: ${score}! \n You lost! \n Clique em OK to start a new game`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Start game function
let playGame = () => {
    alert('Welcome to Genius! \n Start new game!');
    score = 0;

    nextLevel();
}

// Click events for the colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Game beginning
playGame();