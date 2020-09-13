let dice_images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var playerOne, playerTwo;
function roll_dice() {
    playerOne = Math.floor(Math.random() * dice_images.length);
    document.getElementById("p1").src = dice_images[playerOne];
    playerTwo = Math.floor(Math.random() * dice_images.length);
    document.getElementById("p2").src = dice_images[playerTwo];

    if (playerOne > playerTwo) {
        document.getElementById("title").textContent = "Player 1 wins!";
    }
    else if (playerOne < playerTwo){
        document.getElementById("title").textContent = "Player 2 wins!";
    }
    else {
        document.getElementById("title").textContent = "Tie, refresh again!";
    }
}

roll_dice();