var cnv = document.getElementById("plano");
var ctx = cnv.getContext('2d');

var img = new Image();
img.src = 'http://i63.tinypic.com/rvm0lh.png';
img.onload = function() {ctx.drawImage(img,0,0);}
	
	var coX = [153,234];
	var coY = 110;
setInterval(function(){dibujar();},60);
function dibujar(){
  ctx.clearRect(0,0,cnv.width,cnv.height);
  ctx.drawImage(img,0,0);
  for (i=0;i<2;i++){
    ctx.beginPath();
     ctx.arc(coX[i],coY,12,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.fill(); 
  }
  }

  var tempX = 0, tempY = 0;
document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMouseXY; 
function getMouseXY(e) {
  tempX = e.pageX;
  tempY = e.pageY;  
  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;} 
  coX = [130+tempX/document.body.scrollWidth*30,
         210+tempX/document.body.scrollWidth*30];
  coY = 50+tempY/document.body.scrollHeight*100;
  return true;
}
