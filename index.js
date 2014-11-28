var name = "daclouds";
console.log("Hello, " + name);

function elementHighlighter(elements, color) {
	for (var i=0; i < elements.length; i++) {
		elements[i].style['background-color'] = color;
	}
	
}

var blockElements = document.getElementById("blockElements");
var inlineElements = document.getElementById("inlineElements");

blockElements.addEventListener("click", function(){
    var h1 = document.getElementsByTagName("h1");
	elementHighlighter(h1, '#259b24');

	var div = document.getElementsByTagName("div");
	elementHighlighter(div, '#aed581');
});

inlineElements.addEventListener("click", function(){
	var b = document.getElementsByTagName("b");

	elementHighlighter(b, '#8bc34a');
});