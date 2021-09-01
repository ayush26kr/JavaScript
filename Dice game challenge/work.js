function func(){
//create a random number between 1-6
var randomNumber=Math.floor(Math.random()*6)+1;

//simple concatenation to get random image
var randomImgSource="images/dice"+randomNumber+".png";

//now change the image source in the html
//since i have 2 img in html use querySelectorAll
//to select first of 2 images write [0]
//use setAttribute("initial source",newsource)
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImgSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSource2);

if(randomNumber>randomNumber2){
  document.querySelector("h2").innerHTML="🚩 Player 1 WINS ";
}
else if(randomNumber<randomNumber2){
  document.querySelector("h2").innerHTML="Player 2 WINS 🚩";
}
else{
  document.querySelector("h1").innerHTML="It's a TIE !! Play again ";
}
}
