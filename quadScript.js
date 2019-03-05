//  The scripts for quad solver solutions, graph, zoom, and reset functions.
function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
results();
graphQuad();
}   // clsoe QF
function results() {
  // finding vertex and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vX = vX.toFixed(2);
  vY = plugX(vX).toFixed(2);
  ctx.beginPath();
  ctx.arc(scaledX(0),scaledY(plugX(0)),5,0,6.28);
  ctx.fill();

  ctx.lineWidth= 2;
  ctx.strokeStyle= "rgba(0,50,200,.3)";
  ctx.setLineDash([10,5]);
  ctx.beginPath();
  ctx.moveTo(scaledX(vX),0);
  ctx.lineTo(scaledX(vX),h);
  ctx.stroke();
  ctx.setLineDash([0]);

  $("#vertex").text("Vertex is at (" + vX+","+vY+")");

  // quadratic formula and solutions 
	d = (b**2-4*a*c)
	$("#solution1").text("The x-intercept is at (" + vX+","+vY+")");
  x1=-b/(2*a)+Math.sqrt(d)/(2*a);
	x1= Math.round(x1*100)/100;
  $ ("solution1").text("X int at "+x1);
  x2=-b/(2*a)-Math.sqrt(d)/(2*a);
	x2= Math.round(x2*100)/100
}  // close results 

function plugX(x) {
	y= a*Math.pow(x,2)+b*x +c*1;
	return y;
}
  // 
function graphQuad () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    nx =  (w/2-(i+1))/k;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Red";
    ctx.moveTo(scaledX(x),scaledY(plugX(x)));
    ctx.lineTo(scaledX(nx),scaledY(plugX(nx)));
    ctx.stroke();

  } // end for loop
}  // end graphQuad

function scaledX(x) {
  newx = w/2+x*k;
  return newx;
}

function scaledY(y) {
  newx = h/2-y*k;
  return newx;
}
