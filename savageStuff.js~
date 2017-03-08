var svgCon = document.getElementById("savage");
var stop = document.getElementById("clear");

var drawDot = function(px, py, pr){
    var newC = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newC.setAttribute("cx",px);
    newC.setAttribute("cy",py);
    newC.setAttribute("r",pr);
    newC.setAttribute("fill","turquoise");
    newC.setAttribute("stroke", "red");
    svgCon.appendChild(newC);
};

var requestID;

var animate = function(e) {
    window.cancelAnimationFrame(requestID);
    var radius = 1; var dr = 1;
    var go = function(e) {
	if (svgCon.lastChild)
	    svgCon.removeChild(svgCon.lastChild);
	drawDot(250, 250, radius) ; // 250, 250 center of the 500 x 500 svg
	radius += dr;
	if (radius == 250 || radius == 0)
	    dr *= -1;
	requestID = window.requestAnimationFrame(go);
    };
    
    go();
};

var unanimate= function() {
    window.cancelAnimationFrame(requestID);
    svgCon.removeChild(svgCon.lastChild);
};


svgCon.addEventListener("click",animate);
stop.addEventListener("click",unanimate);
