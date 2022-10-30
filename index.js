// function dise() {
//     return Math.floor(6*Math.random()+1);
// }
// var dice1num = Math.floor(6*Math.random()+1);
// var dice1src = "images\\dice"+dice1num+".png";
// document.querySelector("img").setAttribute("src", dice1src);

// var dice2num = Math.floor(6*Math.random()+1);
// var dice2src = "images\\dice"+dice2num+".png";
// document.querySelector("img.img2").setAttribute("src", dice2src);

// if(dice2num > dice1num){
//     document.querySelector("h1").innerHTML = "player 2 win🚩";
// }else if(dice2num < dice1num){
//   document.querySelector("h1").innerHTML = "🚩player 1 win";
// }
// else{
//     document.querySelector("h1").innerHTML = " drow ";
// }
var audio = new Audio('dice.mp3');
document.querySelector("input").addEventListener("click" , function(){
  audio.play();
  setTimeout(myFunction, 590);
  function myFunction(){
    var dice1num = Math.floor(6*Math.random()+1);
var dice1src = "images\\dice"+dice1num+".png";
document.querySelector("img").setAttribute("src", dice1src);

var dice2num = Math.floor(6*Math.random()+1);
var dice2src = "images\\dice"+dice2num+".png";
document.querySelector("img.img2").setAttribute("src", dice2src);

if(dice2num > dice1num){
    document.querySelector("h1").innerHTML = "player 2 win🚩";
}else if(dice2num < dice1num){
  document.querySelector("h1").innerHTML = "🚩player 1 win";
}
else{
    document.querySelector("h1").innerHTML = " drow ";
}
  }
  // window.location.reload();

});
// function setImage1(){
//     var x = dise();
//     if(x === 1){
//         document.querySelector("img.img1").setAttribute("src","images\\dice1.png");
//     }else if(x === 2){
//         document.querySelector("img.img1").setAttribute("src","images\\dice2.png");
//     }else if(x === 3){
//         document.querySelector("img.img1").setAttribute("src","images\\dice3.png");
//     }else if(x === 4){
//         document.querySelector("img.img1").setAttribute("src","images\\dice4.png");
//     }else if(x === 5){
//         document.querySelector("img.img1").setAttribute("src","images\\dice5.png");
//     }else{
//         document.querySelector("img.img1").setAttribute("src","images\\dice6.png");
//     }
//     return x;
// }
// function setImage2(){
//     var y = dise();
//     if(y === 1){
//         document.querySelector("img.img2").setAttribute("src","images\\dice1.png");
//     }else if(y === 2){
//         document.querySelector("img.img2").setAttribute("src","images\\dice2.png");
//     }else if(y === 3){
//         document.querySelector("img.img2").setAttribute("src","images\\dice3.png");
//     }else if(y === 4){
//         document.querySelector("img.img2").setAttribute("src","images\\dice4.png");
//     }else if(y === 5){
//         document.querySelector("img.img2").setAttribute("src","images\\dice5.png");
//     }else{
//         document.querySelector("img.img2").setAttribute("src","images\\dice6.png");
//     }
//     return y;
// }
//  var x = setImage1();
//  var y = setImage2();
// if(y>x){
//     document.querySelector("h1").innerHTML = "player 2 win🚩";
// }else if(x>y){
//   document.querySelector("h1").innerHTML = "🚩player 1 win";
// }
// else{
//     document.querySelector("h1").innerHTML = " drow ";
// }
