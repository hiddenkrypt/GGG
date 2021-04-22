/** ScreenEngine.js **
 * Basic code for making the Loading Screens work. Selects a screen at random
 * from the loadingScreenDirectory defined in Directory.js. Loads the screen
 * image in the background, calls the trigger callback. Also automatically
 * adjusts the size of displayed text to one determined by the width of the
 * screen.
**/

var ScreenEngine = new (function(){
	this.load = function(index){
		if(typeof index !== 'number' || index < 0 || index > loadingScreenDirectory.length){
			index = Math.floor(Math.random() * loadingScreenDirectory.length);
		}
		var selectedScreen = loadingScreenDirectory[index];
		ScreenEngine.setBackground('url("'+selectedScreen.url+'")');
		if(typeof selectedScreen.trigger === 'function'){
			selectedScreen.trigger();
		}
		ScreenEngine.setFont();
	};
	this.setBackground = function(url){
		document.body.style.backgroundImage = url;
		let sfx = document.getElementById("sfx");
		let se = document.getElementById("SpecialEvents");
		if( se ){ se.remove(); }
		if( sfx ){ sfx.remove(); }
		
	}
	this.setFont = function(){
	    var fpc = window.innerWidth / 250;
	    document.body.style.fontSize = fpc+'px';
	}
	this.GameDetails = function( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
		document.getElementById('mode').innerHTML = gamemode;
		document.getElementById('map').innerHTML = mapname;
	}

})();


window.onresize = ScreenEngine.setFont;
window.onload = ScreenEngine.load;
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode ){
	ScreenEngine.GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode );
}
