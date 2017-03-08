var svgCon = document.getElementById("savage");
var stop = document.getElementById("clear");
var move = document.getElementById("move");

var drawDot = function(px, py, pr){
    var newC = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newC.setAttribute("cx",px);
    newC.setAttribute("cy",py);
    newC.setAttribute("r",pr);
    newC.setAttribute("fill","turquoise");
    newC.setAttribute("stroke", "red");
    newC.setAttribute("id", "circle");
    console.log(newC.getAttribute("id"));
    svgCon.appendChild(newC);
};

var move = function() {
    var circles = document.getElementsByTagName("circle");
    for (var i = 0, max = bubbles.length; i<10; i++){
	var currX = circles[i].getAttribute("cx");
	var currY = circles[i].getAttribute("cy");
	circles[i].setAttribute("cx",currX++);
	circles[i].setAttribute("cy",currY++);
}
}

svgCon.addEventListener("click",move);
stop.addEventListener("click",unanimate);
