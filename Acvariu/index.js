var n = 10; //numar de pesti

var tank = document.querySelector('.tank');

var maxX = tank.clientHeight;
var maxY = tank.clientWidth;

console.log(maxX, maxY);

var fish = [];
var fishDir = [];

for(var i = 1; i<=n ; i++){
    
    fishDir[i]= {};
    fishDir[i].x= Math.pow(-1,Math.floor(Math.random()*10));
    fishDir[i].y= Math.pow(-1,Math.floor(Math.random()*10));

    fishDir[i].cX= Math.floor((Math.random() * (maxX-160)));
    fishDir[i].cY= Math.floor((Math.random() * (maxY-160)));
    
    fish[i] = document.querySelector('.fish'+i);
    fish[i].style.top  = fishDir[i].cX + "px";
    fish[i].style.left = fishDir[i].cY + "px";

    var img=  Math.floor((Math.random() * 6) + 1);
    fish[i].style.background= 'url('+ img +'.png)';
    document.images[i-1].src= img + '.png';
    document.images[i-1].visibility='hidden';

    if((img==3||img==6)){
      if(fishDir[i].y==-1){
        rotateImg(i);
      }
    }
    else{
      if(fishDir[i].y==1){
        rotateImg(i);
      }
    }
    
  }
console.log(fishDir);

setInterval(function(){ 
    for (var i = 1 ; i <= n ; i++)
      relocFish(i);
    
  }, 5) 

function relocFish(i){

  fishDir[i].cX += fishDir[i].x*Math.random()*0.5;
  fishDir[i].cY += fishDir[i].y*Math.random();

  fish[i].style.top = fishDir[i].cX +'px';
  fish[i].style.left = fishDir[i].cY +'px';  

  if( fishDir[i].cX < 10 || 
      fishDir[i].cX > maxX - 90){
    fishDir[i].x *=-1;
  }
  if( fishDir[i].cY < 10 || 
      fishDir[i].cY > maxY-160){
    fishDir[i].y *=-1;
    rotateImg(i);
    relocFish(i);
  }
   
}
function rotateImg(i){
  console.log($('#fish'+i).css("transform"));
  if($('#fish'+i).css("transform")!="matrix(-1, 0, 0, 1, 0, 0)"){
    $('#fish'+i).css("-moz-transform", "scale(-1,1)");
    $('#fish'+i).css("-o-transform","scale(-1,1)");
    $('#fish'+i).css("-webkit-transform","scale(-1,1)");
    $('#fish'+i).css("transform","scale(-1,1)");
  }
  else{
    $('#fish'+i).css("-moz-transform", "initial");
    $('#fish'+i).css("-o-transform","initial");
    $('#fish'+i).css("-webkit-transform","initial");
    $('#fish'+i).css("transform","initial");
  }
}
