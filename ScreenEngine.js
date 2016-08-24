/* 4g.js */
console.log('butt');

loadingScreenDirectory = loadingScreenDirectory.map(function(loadingScreen){
	return {
		url: 'url("'+loadingScreen.url+'")',
		description: loadingScreen.description,
		callback: loadingScreen.trigger
	};
});

function load(index){
	if(typeof index !== 'number' || index < 0 || index > loadingScreenDirectory.length){
		index = Math.floor(Math.random() * loadingScreenDirectory.length);
	}
	var selectedScreen = loadingScreenDirectory[index];
	setBackground(selectedScreen.url);
	setTimeout(selectedScreen.callback, 500);
	setFont();
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
