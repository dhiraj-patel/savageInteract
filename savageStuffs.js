var svgCon = document.getElementById("savage");
var stop = document.getElementById("clear");
var move = document.getElementById("move");

var clearDaSVG = function(){
    while(svgCon.hasChildNodes()){
	svgCon.removeChild(svgCon.lastChild);
    }
};

var drawDot = function(e){
    var mx = e.offsetX;
    var my = e.offsetY;
    var newC = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newC.setAttribute("cx",mx);
    newC.setAttribute("cy",my);
    newC.setAttribute("r",30);
    newC.setAttribute("fill","turquoise");
    newC.setAttribute("stroke", "red");
    newC.addEventListener("click", colorChange);
    svgCon.appendChild(newC);
};

var move = function() {
    var circles = document.getElementsByTagName("circle");
    for (var i = 0, max = bubbles.length; i<10; i++){
	var currX = circles[i].getAttribute("cx");
	var currY = circles[i].getAttribute("cy");
	circles[i].setAttribute("cx",currX++);
	circles[i].setAttribute("cy",currY++);
    };
};

var colorChange = function(e){
    var circles = document.getElementsByTagName("circle");
    this.setAttribute("fill", "orange");
    e.stopPropagation();
};


svgCon.addEventListener("click", drawDot);
stop.addEventListener("click",clearDaSVG);