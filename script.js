var count=0;
function result(){
let x = Math.floor((Math.random() * 2) + 1);

if(x==1)
{
    count=1;
    document.getElementById("img").height="200";
    document.getElementById("img").src='toss.gif';
    setTimeout(function(){document.getElementById("img").src='head.jpg';}, 1500);
}
else
{
    count=2;
    document.getElementById("img").height="200";
    document.getElementById("img").src='toss.gif';
     setTimeout(function(){document.getElementById("img").src='tails.jpeg';}, 1500);
}
}

function hwin(){
    document.getElementById("text").innerHTML="You Choose Head";
    if(count==1){
        setTimeout(function(){document.getElementById("text").innerHTML="You Win";}, 1500);
    } 
    else{
        setTimeout(function(){document.getElementById("text").innerHTML="You Lost";}, 1500);
    }  
}

function twin(){
    document.getElementById("text").innerHTML="You Choose Tails"; 
    if(count==2){
        setTimeout(function(){document.getElementById("text").innerHTML="You Win";}, 1500);
    } 
    else{
        setTimeout(function(){document.getElementById("text").innerHTML="You Lost";}, 1500);
    }  
}



function reset(){
    document.getElementById("img").height="150";
    document.getElementById("img").src="lets_start.jpg";
    document.getElementById("text").innerHTML="Head or Tails";
}