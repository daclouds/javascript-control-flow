var name = "daclouds";
console.log("Hello, " + name);

function elementHighlighter(elements, tagName) {
	for (var i=0; i < elements.length; i++) {
		switch (tagName) {
			case 'h1':
				elements[i].style['background-color'] = '#259b24';
				break;
			case 'div':
				elements[i].style['background-color'] = '#aed581';
				break;
			case 'b':
				elements[i].style['background-color'] = '#8bc34a';
				break;
			default:
				break;
		}
		
	}
	
}

var blockElements = document.getElementById("blockElements");
var inlineElements = document.getElementById("inlineElements");

blockElements.addEventListener("click", function(){
    var h1 = document.getElementsByTagName("h1");
	elementHighlighter(h1, 'h1');

	var div = document.getElementsByTagName("div");
	elementHighlighter(div, 'div');
});

inlineElements.addEventListener("click", function(){
	var b = document.getElementsByTagName("b");

	elementHighlighter(b, 'b');
});