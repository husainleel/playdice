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
document.querySelector(".player-1-img").src = "./images/dice"+p1num+".png";

var p2num = (Math.floor(Math.random()*6)) +1 ;
document.querySelector(".player-2-img").src = "./images/dice"+p2num+".png";

if (p1num>p2num) {
  document.querySelector(".heading-h1").innerText="🚩 Player 1 wins";
} else if (p1num<p2num) {
  document.querySelector(".heading-h1").innerText="Player 2 wins 🚩";
} else {

}
}
