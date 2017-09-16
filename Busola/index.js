
function handleOrientation(event) {
  var a = event.alpha; // in grade in intervalul [0,360]
  output.innerHTML = "alpha : " + (Math.floor(a*100))/100 + '\n';
  rotate(a);
}


function rotate(a){
  
    $("#busola").css("-moz-transform", "rotate(" + a + "deg)");
    $("#busola").css("-o-transform","rotate(" + a + "deg)");
    $("#busola").css("-webkit-transform","rotate(" + a + "deg)");
    $("#busola").css("transform","rotate(" + a + "deg)");

 }


window.addEventListener('deviceorientation', handleOrientation);
