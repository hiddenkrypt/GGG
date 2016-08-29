/** SpecialEvents.js **
 * This file contains callback functions for special triggered events on some
 * loading screens. Should be referenced and loaded before Directoy.js
**/

//~~~~~~~~~~~~UTILITY FUNCTIONS~~~~~~~~~~~~

/**
 * Generic function that plays a sound located at the indicated path
**/
function playsound(path){
	var sfx = document.createElement("audio");
	sfx.src = path;
	sfx.volume = 0.3;
	document.getElementById("logo").appendChild(sfx);
	sfx.play();
}

/**
 * Feature detection script. Adds an element to the page to display the results
 * of a suite of feature detection tests
**/
function featureDetect(){
	var box = document.createElement('div');
	box.appendChild(document.createTextNode('--------TELL A PROGRAMMER--------'));
	box.appendChild(document.createElement('br'));
	box.style.float = 'right';
	box.style.background = "#ededed";
	box.style.fontSize = '3em';
	box.style.color = '#a10000';
	document.body.appendChild(box);
	var a = document.createElement('audio');
	var c = document.createElement('canvas');
	var v = document.createElement('video');
	var tests = [
		{name:"New Audio", test:function(){ return !!a.canPlayType; }},
		{name:"Audio MP3 playback", test:function(){ return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));}},
		{name:"Audio WAV playback", test:function(){ return !!(a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, '')); }},
		{name:"Audio OGG/Vorbis playback", test:function(){ return !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '')); }},
		{name:"New video", test:function(){ return !!v.canPlayType; }},
		{name:"Video WebM", test:function(){ return !!(v.canPlayType && v.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, '')); }},
		{name:"Video H.264", test:function(){ return !!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, '')); }},
		{name:"Canvas", test:function(){ return c; }},
		{name:"Canvas 2d Context", test:function(){ return c.getContext('2d'); }},
		{name:"Canvas webGL Context", test:function(){ return c.getContext('webgl'); }},
		{name:"Canvas text API", test:function(){ return c.getContext && typeof c.getContext('2d').fillText == 'function'; }},
		{name:"XHR", test:function(){ return !!(new XMLHttpRequest()); }},
		{name:"XHR crossdomain", test:function(){ return "withCredentials" in new XMLHttpRequest;}},
		{name:"WebSocket", test:function(){ return !!window.WebSocket; }},
		{name:"Session Storage", test:function(){
			try {
			  return 'sessionStorage' in window && window['sessionStorage'] !== null;
			} catch(e) {
			  return false;
			}
		}},
		{name:"Local Storage", test:function(){
			try {
			  return 'localStorage' in window && window['localStorage'] !== null;
			} catch(e) {
			  return false;
			}
		}}
	];
	setInterval(function(){
		var test = tests.shift();
		box.appendChild(document.createTextNode(test.name + ":" + (test.test()?'pass':'fail')));
		box.appendChild(document.createElement("br"));
	}, 600);
}


//~~~~~~~~~~~~EVENT FUNCTIONS~~~~~~~~~~~~

/** sunny()
 * Plays the theme from "Always Sunny In Philadelphia"
 * Trigger Screen: 'Always Sunny in Terrortown' by Brett
**/
function sunny(){
	playsound("res/audio/sunny.mp3");
};


/** indexError()
 * Fakes a "Too many indices" error by clearing out the normal display elements
 * and playing a windows XP error sound. Also runs feature detection with
 * output visible on the loading screen for future programmer use. For testing,
 * a mouseclick on the screen will bring back the display elements.
 * Tell a programmer!
**/
function indexError(){
	function clickToReturn(){
		document.getElementById("boilerplate").style.display = "initial";
		document.getElementById("logo").style.display = "initial";
		document.getElementById("test").style.display = "initial";
		document.removeEventListener("click", clickToReturn, true);
	}
	document.addEventListener("click", clickToReturn, true);
	document.getElementById("boilerplate").style.display = 'none';
	document.getElementById("logo").style.display = "none";
	document.getElementById("test").style.display = "none";
	playsound('res/audio/error-ding.wav');
	setTimeout(featureDetect,2000);
}
