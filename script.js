var head=document.querySelector("h1");
var dice1=document.querySelector("#dice-1");
var dice2=document.querySelector("#dice-2");

var p1=Math.floor((Math.random())*6)+1;
var p2=Math.floor((Math.random())*6)+1;
    
dice1.src="/resources/images/dice"+p1+".png";
// dice1.src="C:/Users/pc/OneDrive/Desktop/UDEMY FULL STACK WEB/Dice challenge/resources/images/dice"+p1+".png";
// dice2.src="C:/Users/pc/OneDrive/Desktop/UDEMY FULL STACK WEB/Dice challenge/resources/images/dice"+p2+".png";
dice2.src="/resources/images/dice"+p2+".png";

if(p1>p2){
    head.innerHTML='<i class="fas fa-trophy"></i> Player 1 wins ';
}else if(p1<p2){
    
    head.innerHTML='Player 2 wins <i class="fas fa-trophy"></i> ';
}else{
    head.innerHTML="It's a tie!!! Refresh again.";
}
