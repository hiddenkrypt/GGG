/** SpecialEvents.js **
 * This file contains callback functions for special triggered events on some
 * loading screens. Should be referenced and loaded before Directoy.js
**/

/** sunny()
 * Plays the theme from "Always Sunny In Philadelphia"
 * Trigger Screen: 'Always Sunny in Terrortown' by Brett
**/
function sunny(){
	var theme = document.createElement("audio");
	var warning = document.createTextNode("Audio tags are not supported! Tell a Programmer!");
	theme.src = 'res/sunny.mp3';
	theme.volume = 0.3;
	theme.appendChild(warning);
	document.appendChild(theme);
	setTimeout(function(){theme.play();}, 1000);
};
