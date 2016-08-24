/* 4g.js */
console.log('butt');

var loadingScreens = [
	 {url:"http://i.imgur.com/J0zYUX2.png", description:"Brett: The Original"}
	,{url:"http://i.imgur.com/sDYG7yd.png", description:"Rav-T: Dank Memes"}
	,{url:"http://i.imgur.com/lmMNbwD.png", description:"Mike: MLG"}
	,{url:"http://i.imgur.com/7q6bIB0.png", description:"Rav-T: /u/"}
	,{url:"http://i.imgur.com/Zex9uqR.png", description:"Rav-T: Terrorist Town Gazette 01-01"}
	,{url:"http://i.imgur.com/AmDjSaW.jpg", description:"Brett: Safety Record"}
	,{url:"http://i.imgur.com/qkV5qT9.jpg", description:"Matt: Atlas Park"}
	,{url:"http://i.imgur.com/rP04dbU.jpg", description:"Mike, Rav-T: Winners2"}
	,{url:"http://i.imgur.com/FgbK3qI.jpg", description:"Rav-T: Damage Control"}
	,{url:"http://i.imgur.com/vvmlkuv.png", description:"Rav-T: Postcards"}
	,{url:"http://i.imgur.com/qPkc4CV.png", description:"Rav-T: Robotnik"}
	,{url:"http://i.imgur.com/yFbdPTn.png", description:"Rav-T: Don't Forget:"}
	,{url:"http://i.imgur.com/lrmn5ek.png", description:"Jason: Badmins"}
	,{url:"http://i.imgur.com/pMCeOiw.png", description:"Mike: Minimal"}
	,{url:"http://i.imgur.com/3bBK6Fc.jpg", description:"Brett: No Fun"}
	,{url:"http://i.imgur.com/0RDXGqs.jpg", description:"Brett: Always sunny in Terrortown", trigger:sunny}
];
loadingScreens = loadingScreens.map(function(loadingScreen){
	return {
		url: 'url("'+loadingScreen.url+'")',
		description: loadingScreen.description,
		callback: loadingScreen.trigger
	};
});

function load(index){
	if(typeof index !== 'number'){
		index = Math.floor(Math.random()*loadingScreens.length);
	}
	var selectedScreen = loadingScreens[index];
	setBackground(selectedScreen.url);
	setTimeout(selectedScreen.callback, 1000);
	setFont();
};
function setBackground(url){
	document.body.style.backgroundImage = url;
}
function setFont(){
    var fpc = window.innerWidth/200;
    document.body.style.fontSize = fpc+'px';
}
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
	document.getElementById('mode').innerHTML = gamemode;
	document.getElementById('map').innerHTML = mapname;
}

window.onresize = setFont;
window.onload = load;
