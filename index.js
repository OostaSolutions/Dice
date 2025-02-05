var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceNumber1 = "dice"+randomNumber1+".png";
var randomImageSource1 = "images/" + randomDiceNumber1 ;
document.querySelector("img.img1").setAttribute("src" , randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceNumber2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/" + randomDiceNumber2 ;
document.querySelector("img.img2").setAttribute("src" , randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 won!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 won!";
} else {
    document.querySelector("h1").textContent = "Its a draw!";
}