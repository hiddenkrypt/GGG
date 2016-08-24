/** ScreenEngine.js **
 * Basic code for making the Loading Screens work. Selects a screen at random
 * from the loadingScreenDirectory defined in Directory.js. Loads the screen
 * image in the background, calls the trigger callback. Also automatically
 * adjusts the size of displayed text to one determined by the width of the
 * screen.
**/
console.log('butt');

loadingScreenDirectory = loadingScreenDirectory.map(function(loadingScreen){
	return {
		url: 'url("'+loadingScreen.url+'")',
		description: loadingScreen.credit + ": " + loadingScreen.title,
		callback: loadingScreen.trigger
	};
});

function load(index){
	if(typeof index !== 'number' || index < 0 || index > loadingScreenDirectory.length){
		index = Math.floor(Math.random() * loadingScreenDirectory.length);
	}
	var selectedScreen = loadingScreenDirectory[index];
	setBackground(selectedScreen.url);
	setTimeout(selectedScreen.callback, 100);
	setFont();

	//QUICK TEST, REMOVE THIS SOON!
			playsound("res/audio/sunny.mp3");

};
function setBackground(url){
	document.body.style.backgroundImage = url;
}
function setFont(){
    var fpc = window.innerWidth / 200;
    document.body.style.fontSize = fpc+'px';
}
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
	document.getElementById('mode').innerHTML = gamemode;
	document.getElementById('map').innerHTML = mapname;
}

window.onresize = setFont;
window.onload = load;
