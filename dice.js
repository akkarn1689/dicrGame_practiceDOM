var randNumber1 = Math.random();
randNumber1 = (randNumber1 * 6);
randNumber1 = Math.floor(randNumber1) + 1;

var randNumber2 = Math.random();
randNumber2 = (randNumber2 * 6);
randNumber2 = Math.floor(randNumber2) + 1;



var imgNo1 = randNumber1;
if (imgNo1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (imgNo1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (imgNo1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (imgNo1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (imgNo1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (imgNo1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var imgNo2 = randNumber2;
if (imgNo2 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (imgNo2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (imgNo2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (imgNo2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (imgNo2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (imgNo2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (imgNo1 > imgNo2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (imgNo1 === imgNo2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (imgNo1 < imgNo2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}