var prompt1 = prompt("Player 1");
var prompt2 = prompt("Player 2");

if (prompt1.length >0 ){
  document.querySelector(".player-1 p").innerText=prompt1;
} else {

}

if (prompt2.length >0 ){
document.querySelector(".player-2 p").innerText=prompt2;

}



function play() {


var p1num = (Math.floor(Math.random()*6)) +1 ;
var imgNameFir = ("images/dice"+p1num+".png")
document.querySelector(".player-1-img").src = imgNameFir;

var p2num = (Math.floor(Math.random()*6)) +1 ;
var imgNameSec = ("images/dice"+p2num+".png")
document.querySelector(".player-2-img").src = imgNameSec;

if (p1num>p2num) {
  document.querySelector(".heading-h1").innerText="🚩 Player 1 wins";
} else if (p1num<p2num) {
  document.querySelector(".heading-h1").innerText="Player 2 wins 🚩";
} else {
  document.querySelector(".heading-h1").innerText="Draw";
}
}
