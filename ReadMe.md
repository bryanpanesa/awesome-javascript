# awesome-javascript
This is my test site for the 5 things that make JavaScript super weird and awesome series of LearnCode.academy. 

Inspired by [LearnCode.academy](https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw)'s [JavaScript is weird...and AWESOME](https://www.youtube.com/watch?v=JEq7Ehw-qk8&list=PLoYCgNOIyGABI011EYc-avPOsk1YsMUe_) series.

## Tools used
  * JavaScript
  * HTML
  * CSS
  * SASS(preprocessor)

### How to use?
  * Press F12 to open the console
  * Try clicking the buttons and watch the console

#### Sample code :+1:
```javascript
var output = document.querySelector(".output");
// First Class Functions
function firstClassFunc() {
	function add(num1, num2, callback) {
		var msg = num1 + num2;
		if(message) {
			message(num1, num2, msg);
		}
	}	
	function message(num1, num2, msg) {
		var firstClass = num1 + " + " + num2 + " = " + msg;
		output.innerHTML = firstClass;
	}
	add(10, 5, message);
}
```
