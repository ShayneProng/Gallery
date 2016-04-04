// JavaScript Document

var sliderDiv = document.querySelector("#slider");
var l1 = document.querySelector("#link1");
var l2 = document.querySelector("#link2");
var l3 = document.querySelector("#link3");
var l4 = document.querySelector("#link4");
var l5 = document.querySelector("#link5");
var l6 = document.querySelector("#link6");
var l7 = document.querySelector("#link7");
var l8 = document.querySelector("#link8");
var l9 = document.querySelector("#link9");
var l10 = document.querySelector("#link10");
var headerQuote = document.querySelector("#quote");





//change x position of the slider
//if the id quals "link1" change the x value of the slider
function slidePages(e) {
	e.preventDefault();
	if(e.target.id == "link9") {
		var xPos = 0;
	} else if(e.target.id == "link8") {
		var xPos = -950;
	}
	else if(e.target.id == "link10") {
		var xPos = -1900;
	}
	else if(e.target.id == "link1") {
		var xPos = -2850;	
	}
	else if(e.target.id == "link2") {
		var xPos = -3800;
	}
	else if(e.target.id == "link3") {
		var xPos = -4750;
	}
	else if(e.target.id == "link4") {
		var xPos = -5700;
	}
	else if(e.target.id == "link5") {
		var xPos = -6650;
	}
	else if(e.target.id == "link6") {
		var xPos = -7600;
	}
	else if(e.target.id == "link7") {
		var xPos = -8550;
	}
	TweenMax.to(sliderDiv, 1.5, {x:xPos, ease:Power1.easeOut});
}


function quote1() {
	console.log("click");
	TweenMax.from(headerQuote, 1.5, {x:-410, ease:Elastic.easeOut, y:0});
	}
	
	
//add all listeners here
function init(){
	l1.addEventListener("click", slidePages, false);
	l2.addEventListener("click", slidePages, false);
	l3.addEventListener("click", slidePages, false);
	l4.addEventListener("click", slidePages, false);
	l5.addEventListener("click", slidePages, false);
	l6.addEventListener("click", slidePages, false);
	l7.addEventListener("click", slidePages, false);
	l8.addEventListener("click", slidePages, false);
	l9.addEventListener("click", slidePages, false);
	l10.addEventListener("click", slidePages, false);
	//window.addEventListener("load", logo1, false);
}

window.addEventListener("load", init, false);
window.addEventListener("load", quote1, false);
	