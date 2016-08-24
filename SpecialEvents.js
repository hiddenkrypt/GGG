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
	theme.src = 'res/sunny.mp3';
	theme.volume = 0.3;
	document.appendChild(theme);
	setTimeout(function(){theme.play();}, 1000);
};


/** indexError()
 * Fakes a "Too many indices" error by clearing out the normal display elements
 * and playing a windows XP error sound. Also runs feature detection with
 * output visible on the loading screen for future programmer use. For testing,
 * a mouseclick on the screen will bring back the display elements.
 * Tell a programmer!
**/
function indexError(){
	document.getElementById("boilerplate").style.display = 'none';
	document.getElementById("logo").style.display = "none";
	document.getElementById("test").style.display = "none";
	//TODO: play windows error ding
	//TODO: run feature detection (use http://diveintohtml5.info/everything.html ? or Modernizr?) 
	function clickToReturn(){
		document.getElementById("boilerplate").style.display = "initial";
		document.getElementById("logo").style.display = "initial";
		document.getElementById("test").style.display = "initial";
		document.removeEventListener("click", clickToReturn, true);
	}
	document.addEventListener("click", clickToReturn, true);
}
