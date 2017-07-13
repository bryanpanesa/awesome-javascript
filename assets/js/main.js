
var output;
output = document.querySelector(".output");
// First Class Functions
function firstClassFunc() {
	console.log('----- First Class Functions -----');
	function add(num1, num2, callback) {
		var msg = num1 + num2;
		console.log(num1 + num2);
		if(message) {
			message(num1, num2, msg);
		}
	}	
	function message(num1, num2, msg) {
		var firstClass =  "<h2>First Class Function is working!</h2>" + num1 + " + " + num2 + " = " + msg;
		output.innerHTML = firstClass;
	}
	add(10, 5, message);
}

// Event-Driven Environment
function eventDrivenEnv() {
	console.log('---- Event-Driven Environment ----');
	var eventVar = 9000;
	console.log(eventVar);
	output.innerHTML = '<h2>Event-driven Environment<span id="working">should be</span>working!</h2>'
	+'It\'s over <span id="ninethousand"></span><div id=""><button id="eventBtn">Trigger Event</button></div>';

	document.getElementById("eventBtn").addEventListener("click", function() {
		document.getElementById("ninethousand").innerHTML = eventVar + '!';
		document.getElementById("working").innerHTML = 'is';
		alert(eventVar);
	});
}

// Closure
function closure() {
	console.log('------------ Closure ------------');
	var closureVar = 9000;
	console.log(closureVar);
	output.innerHTML = '<h2>Closure<span id="working">should be</span>working!</h2>'
	+'<p>Retains state & scope after it executes</p>'
	+'It\'s over <span id="ninethousand"></span><div id=""><button id="eventBtn">Trigger Event</button></div>';

	document.getElementById("eventBtn").addEventListener("click", function() {
		document.getElementById("ninethousand").innerHTML = closureVar + '!';
		document.getElementById("working").innerHTML = 'is';
		alert(closureVar);
		closureVar++;
	});
}

// Scope 
function scope() {
	console.log('------------- Scope -------------');

	output.innerHTML = '<h2>Scope<span id="working">should be</span>working!</h2>'
	+'<p>Variable access</p>'
	+'<div id=""><button id="eventBtn">Trigger Event</button></div>';

	document.getElementById("eventBtn").addEventListener("click", function() {
		var x = 1;

		function firstScope() {
			var x = 2;
			console.log(x);
		}

		function secondScope() {
			x = 5;
			console.log(x);
		}
		firstScope();
		secondScope();
		console.log(x);
	});	
}

// Context
function context() {
	console.log('------------ Context ------------');
	output.innerHTML = '<h2>Context<span id="working">should be</span>working!</h2>'
	+'<p>means "this"</p>'
	+'<div id=""><button id="eventBtn" class="cntBtn">Turn OFF</button></div>'
	+ '<div id="contextDiv" class="">It\'s over <span id="ninethousand">9000!</span></div>';

	var contextDiv = document.getElementById("contextDiv");
	var ev = document.getElementById("eventBtn");
	var cntBtn = document.querySelector(".cntBtn");
	contextDiv.className = " cntdiv";
	document.getElementById("eventBtn").addEventListener("click", function() {
		cntBtn.style.background = "#2ecc71";
	    if(contextDiv.style.display == 'block') {
	    	contextDiv.style.display = 'none';
	    	ev.innerHTML = 'Turn ON';
	    	cntBtn.style.background = "#2ecc71";
	    	console.log('Yes! I\'m finally free!');
	    }
	    else {
	    	contextDiv.style.display = 'block';
	    	ev.innerHTML = 'Turn OFF';
	    	cntBtn.style.background = "#e74c3c";
	    } 
	});
}