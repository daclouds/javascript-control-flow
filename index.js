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

function progress(counter) {
	debugger;
	var progress = $('#progress');
	var width = $('#progressbar').width();
	progress.css('margin-left', width / 10 * counter);
}

timer.click(function() {
	var notFinishedYet = true;
	var counter = 0;
	
	while (notFinishedYet) {
		if (counter == 10) {
			notFinishedYet = false;
		}
		setTimeout(progress(counter), counter * 1000);
		console.log(counter++);
	}
	
});