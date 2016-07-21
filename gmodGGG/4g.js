/* 4g.js */
console.log('butt');
var backgrounds = [ 
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
	
];
backgrounds = backgrounds.map(function(bg){
	return {url:'url("'+bg.url+'")', description:bg.description};
});
function load(){
	setBackground(backgrounds[Math.floor(Math.random()*backgrounds.length)].url);
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


