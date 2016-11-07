/** ScreenEngine.js **
 * Basic code for making the Loading Screens work. Selects a screen at random
 * from the loadingScreenDirectory defined in Directory.js. Loads the screen
 * image in the background, calls the trigger callback. Also automatically
 * adjusts the size of displayed text to one determined by the width of the
 * screen.
**/

var ScreenEngine = new (function(){
var loadingScreenDirectory = [
	{
		url:"http://i.imgur.com/pMCeOiw.png",
		title:"felicia",
		credit:"Rav-T",
		trigger: SpecialEvents.feliciaVideo
	}];
	this.load = function(index){
		if(typeof index !== 'number' || index < 0 || index > loadingScreenDirectory.length){
			index =0;// Math.floor(Math.random() * loadingScreenDirectory.length);
		}
		window.onerror("BUTT",JSON.stringify(loadingScreenDirectory), index, 1, 1);
		var selectedScreen = loadingScreenDirectory[index];
		ScreenEngine.setBackground('url("'+selectedScreen.url+'")');
		if(typeof selectedScreen.trigger === 'function'){
			selectedScreen.trigger();
		}
		ScreenEngine.setFont();
	};
	this.setBackground = function(url){
		document.body.style.backgroundImage = url;
	}
	this.setFont = function(){
	    var fpc = window.innerWidth / 250;
	    document.body.style.fontSize = fpc+'px';
		//throw "butts";
	}
	this.GameDetails = function( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
		document.getElementById('mode').innerHTML = gamemode;
		document.getElementById('map').innerHTML = mapname;
	}

})();


window.onresize = ScreenEngine.setFont;
window.onload = ScreenEngine.load;
window.onerror = function(messageOrEvent, source, lineno, colno, error){
console.log("error");
console.log("\t"+messageOrEvent)
console.log("\t"+source)
console.log("\t"+lineno)
console.log("\t"+colno)
console.log("\t"+error)
	var out = document.getElementById("errors");
	if (out === null){
		out = document.createElement("div");
		out.setAttribute("id", "errors");
		out.style.fontSize = "2em";
		out.style.position = "absolute";
		out.style.bottom = "100px";
		out.style.backgroundColor="#000000";
		out.style.color = "#00ff00";
		document.body.appendChild(out);
	}	
	out.appendChild(document.createTextNode("!Error! source:"+source+"  line("+lineno+")::"+error));
	out.appendChild(document.createElement("br"));
}
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode ){
	ScreenEngine.GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode );
}
