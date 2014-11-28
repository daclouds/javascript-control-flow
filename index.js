var name = "daclouds";
console.log("Hello, " + name);

function elementHighlighter(elements, tagName) {
	$.each(elements, function(i, element) {
		switch (tagName) {
			case 'h1':
				element.style['background-color'] = '#259b24';
				break;
			case 'div':
				element.style['background-color'] = '#aed581';
				break;
			case 'b':
				element.style['background-color'] = '#8bc34a';
				break;
			default:
				break;
		}
	});
	
}

var blockElements = $('#blockElements');
var inlineElements = $('#inlineElements');
var timer = $('#timer');

blockElements.click(function() {
    var h1 = $('h1');
	elementHighlighter(h1, 'h1');

	var div = $('div');
	elementHighlighter(div, 'div');
});

inlineElements.click(function() {
	var b = $('b');

	elementHighlighter(b, 'b');
});

$("#progress").width(0);
timer.click(function() {
	var notFinishedYet = true;
	var counter = 0;
	
	var width = $('#progressbar').width() - 40;
	$("#progress").animate({width: width}, 'slow');
	
});