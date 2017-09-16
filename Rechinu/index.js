var rechin = document.querySelector('.rechin');
var peste = document.querySelector('.peste');
var tank = document.querySelector('.tank');
var output = document.getElementById('output');
var time = document.getElementById('time');

var maxX = tank.clientWidth - rechin.clientWidth;
var maxY = tank.clientHeight - rechin.clientHeight;

//pozitii bila, peste
var cX,cY,tX,ty;
// scor curent, best
var scor,best = 0;

//Functia care va fi apelata la fiecare modificare a 
//unchiului de rotatie al gadgetului 

function handleOrientation(event) {
  
  var x = event.beta; // in grade in intervalul [-180,180]
  var y = event.gamma; // in grade in intervalul [-90,90]

  //afisari provizorii de proba

   //output.innerHTML = "beta : " + x + '\n';
   //output.innerHTML += "gamma: " + y + '\n';

  // Pentru ca nu vrem ca device-ul sa fie cu fata in jos
  // restragem intervalul x-ului la [-90,90]
  if (x > 90) {
    x = 90
  };
  if (x < -90) {
    x = -90
  };

  //Pentru usurinta in calcul defazam de la [-90;90] la [0,180]

  x = (x + 90);
  y = (y + 90);
 
  //Actualizam pozitia rechinului in functie de rotatie
  //Mai intai in variabile
  cX = (maxX * x / 180 - 5) ;
  cY = (maxY * y / 180 - 5) ;
  //Iar apoi coordonatele elementului html
  rechin.style.top  = cX + "px";
  rechin.style.left = cY + "px";

  //Structura decizionala a carei conditie este ca rechinul
  //sa ajunga la peste, prin suprapunerea coordonatelor
  
  if( (cX+20) > tX && 
      cX < (tX+10) &&
      (cY+20) > tY && 
      cY < (tY+10) 
    ){

      //In consecinta actualizam scorul
      //intai in variabila
      scor++;
      //Iar apoi elementul html din interfata
      document.getElementById("scor").innerHTML="Scor: "+scor;
      
      //apelam functia de relocarlizare a pestelui

      relocpeste();
    }  

}

//Functia apelata in momentul apasarii butonului care declanseaza
//o runda de joc ce dureaza 30 de secunde

function start(){

  //Pe timpul rundei butonul de start este ascuns

  document.getElementById("button").style.visibility = "hidden";
  
  //Pestele este mutat din pozita sa initiala la o pozitie 
  //accesibila rechinului

  relocpeste();  

  //Reinitializam variabila de scor si declaram variabila 
  //temporizatorului
  scor= 0;
  var timer= 30;
  //prima actualizare in interfata a timpului ramas din runda
  time.innerHTML = "Time : " + timer; 

  //Pornirea unui cronometru care sa actualizeze valuare
  //variabilei de temporizare si sa actualizeze interfata
  var interv = setInterval(function(){ 
    timer--;
    time.innerHTML = "Time : " + timer; 
  }, 1000) 

  //Instructiunile ce vor fi executate la finalul rundei de 
  //30 de secunde

  setTimeout(function (){

    //Incheierea ciclului cronometrului si implicit a celui de
    //temporizare; Revenirea interfetei la forma initiala
    clearInterval(interv);
    time.innerHTML = null;
    document.getElementById("button").style.visibility = "visible";

    //Revenirea pestelui in pozitia initiala inaccesibila rechinului

    peste.style.top  = 330 + "px";
    peste.style.left = 200 + "px";
    
    // Structura decizionala ce verifica daca cumva a fost
    // inregistrat un nou highscore si in caz pozitiv il 
    // actualizeaza

      if(scor>best){
        best= scor;
        document.getElementById("best").innerHTML="Best: "+best;  
      }
    }
    , 30000);
}

//Functia ce relocalizeaza pestele la o pozitie noua in acvariu
function relocpeste(){
  tX= Math.floor((Math.random() * (tank.clientWidth-5)) + 1);
  tY= Math.floor((Math.random() * (tank.clientHeight-5)) + 1);
  
  peste.style.top  = tX + "px";
  peste.style.left = tY + "px";

 }

//EventListener-ul ce apeleaza handleOrientation atunci cand 
//gadgetul este rotit
window.addEventListener('deviceorientation', handleOrientation);
