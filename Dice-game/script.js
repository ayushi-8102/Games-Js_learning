
var randomNumber1 = Math.random();
randomNumber1=(randomNumber1*6);
randomNumber1=Math.floor(randomNumber1)+1;
var randomImage = "dice"+ randomNumber1 +".png";
var randomimageSrc = "images/" + randomImage ;
var d1 = document.querySelectorAll("img")[0];
d1.setAttribute("src",randomimageSrc);

var randomNumber2 = Math.random();
randomNumber2=(randomNumber2*6);
randomNumber2=Math.floor(randomNumber2)+1;
var randomImage = "dice"+ randomNumber2 +".png";
var randomimageSrc = "images/" + randomImage ;
var d2 = document.querySelectorAll("img")[1];
d2.setAttribute("src",randomimageSrc);

if(randomNumber1>randomNumber2){
    var nh1 = document.querySelector("h1");
    nh1.innerHTML="Player 1 won!✨";
}
else if(randomNumber2>randomNumber1){
    var nh2 = document.querySelector("h1");
    nh2.innerHTML="Player 2 won! ✨";
}
else {
    var nh3 = document.querySelector("h1");
    nh3.innerHTML="It's a draw!🎃";
}