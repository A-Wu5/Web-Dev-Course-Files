var dice = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

var dice_roll_1 = Math.floor(Math.random() * 6);
var dice_roll_2 = Math.floor(Math.random() * 6);

var p1_dice = document.querySelectorAll(".dice img")[0];
var p2_dice = document.querySelectorAll(".dice img")[1];

p1_dice.setAttribute("src", dice[dice_roll_1]);
p2_dice.setAttribute("src", dice[dice_roll_2]);

var title = document.querySelector("h1");

if (dice_roll_1 == dice_roll_2) {
  title.innerHTML = "Draw!";
} else if (dice_roll_1 < dice_roll_2) {
  title.innerHTML = "Player 2 Wins!";
} else {
  title.innerHTML = "Player 1 Wins!";
}
