
/** SpecialEvents.js **
 * This file contains callback functions for special triggered events on some
 * loading screens. Should be referenced and loaded before Directoy.js
 **/

var SpecialEvents = new(function () {

    //~~~~~~~~~~~~UTILITY FUNCTIONS~~~~~~~~~~~~
    //requestAnimationFrame shim
    window.anim = (function () {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    /**
     * Generic function that plays a sound located at the indicated path
     **/
    function playsound(path, vol, loop) {
        var sfx = document.createElement("audio");
        sfx.id = "sfx";
        sfx.src = path;
        sfx.volume = vol || 0.1;
        document.getElementById("logo").appendChild(sfx);
        if (loop) {
            sfx.addEventListener('ended', function () {
                sfx.currentTime = 0;
                sfx.play();
            }, false);
        }
        sfx.play();
    }
    /**
     * Hides the DOM Elements normally on the page, and sets up a clickhandler
     * that will bring the elements back
     **/
    function hideUI() {
		let logo = document.getElementById("logo");
		let boilerplate = document.getElementById("boilerplate");
		
        document.addEventListener(
            "click",
            function clickToReturn() {
				if( boilerplate) {
					boilerplate.style.display = "initial";
				}
				if( logo ){
					logo.style.display = "initial";
				}
				document.removeEventListener("click", clickToReturn, false);
			}, 
			false);
		if( boilerplate) {
			boilerplate.style.display = "none";
		}
		if( logo ){
			logo.style.display = "none";
		}
    }

    //~~~~~~~~~~~~EVENT FUNCTIONS~~~~~~~~~~~~

    /** sunny()
     * Plays the theme from "Always Sunny In Philadelphia"
     * Trigger Screen: 'Always Sunny in Terrortown' by Brett
     **/
    this.sunny = function () {
        playsound("res/audio/sunny.wav", 1);
    };

    /** hide()
     * Clears out UI elements
     **/
    this.hide = hideUI;

    /** indexError()
     * Fakes a "Too many indices" error by clearing out the normal display
     * elements and playing a windows XP error sound. For testing, a mouseclick
     * on the screen will bring back the display elements.
     * Tell a programmer!
     **/
    this.indexError = function () {
        hideUI();
        playsound('res/audio/error-ding.wav', 1);
    }
    this.spooky = function () {
        document.body.style.background = "#000";
        var C_WIDTH = 501;
        var C_HEIGHT = 687;
        var girlLoaded = false;
        var spookLoaded = false;
		
        var canvas = document.createElement("canvas");
        var container = document.createElement("div");
		container.id = "SpecialEvent";
        container.style.width = "100%";
        container.style.textAlign = "center";
        container.style.fontSize = "4em";
        container.style.position = "absolute";
        container.style.bottom = 0;
        canvas.width = C_WIDTH;
		canvas.height = C_HEIGHT;
		canvas.style.width = C_WIDTH;
        canvas.style.height = C_HEIGHT;
        canvas.style.border = "1px solid black";
        canvas.style.display = "inline"
        container.appendChild(canvas);
        document.body.appendChild(container);
		
        var ctx = canvas.getContext("2d");
        var girl = new Image(501, 687);
        var spook = new Image(400, 358);
        var cutOff = 456;
        var cut = 0;
        girl.onload = function () {
            girlLoaded = true;
        };
        spook.onload = function () {
            spookLoaded = true;
        };
        girl.src = 'res/img/girl.jpg';
        spook.src = 'res/img/spooky.jpg';
        function spookem() {
            if (girlLoaded) {
                ctx.drawImage(girl, 0, 0);
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, cut, 1000, 1000);
                if (cut < cutOff) {
                    cut += 1.25;
                }
            }
            if (spookLoaded && cut >= cutOff) {
                ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
                ctx.drawImage(spook, (C_WIDTH - spook.width) / 2, (C_HEIGHT - spook.height) / 2);
                playsound("res/audio/spooky.ogg", 0.06, false);
                document.getElementById("logo").src = "res/img/doot.gif";
                document.getElementById("title").innerHTML = "Gentlemen's SPOOK GROUP";
                var meter = document.createElement("img");
                var doot2 = document.createElement("img");
                meter.src = "res/img/2SpookyMeter.gif";
                doot2.src = "res/img/doot2.gif";
                meter.style.float = "left";
                doot2.style.float = "right";
                setTimeout(function () {
                    container.appendChild(doot2);
                }, 3300);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 4300);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 5000);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 6000);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 6300);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 6700);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 6800);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 6900);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 6950);
                setTimeout(function () {
                    container.appendChild(doot2.cloneNode());
                }, 7000);
                setTimeout(function () {
                    container.appendChild(meter);
                }, 1600);
            } else {
                anim(spookem);
            }
        }
        spookem();
    };
    this.loadCards = function () {
        var cardSize = "250";
        var cardBox = document.createElement("div");
		cardBox.id = "SpecialEvent";

        var grab = Math.floor(Math.random() * deck.calls.length);
        var call = deck.calls[grab];
        var blackCard = document.createElement("div");
        blackCard.style.backgroundColor = "#000";
        blackCard.style.display = "inline-block";
        blackCard.style.width = cardSize + "px";
        blackCard.style.height = cardSize + "px";
        blackCard.style.borderRadius = ((cardSize * 0.15) >> 0) + "px";
        blackCard.style.padding = ((cardSize * 0.15) >> 0) + "px";
        blackCard.style.margin = ((cardSize * 0.15) >> 0) + "px";
        blackCard.style.border = "1px solid white";
        blackCard.style.boxShadow = ((cardSize * 0.1) >> 0) + "px " + ((cardSize * 0.15) >> 0) + "px #888888";
        blackCard.style.color = "#fff";
        blackCard.style.fontSize = ((cardSize / 12) >> 0) + "px";
        blackCard.innerHTML = call.text.join(" ____ ");
        cardBox.appendChild(blackCard);
        function addWhite() {
            var grabRes = Math.floor(Math.random() * deck.responses.length);
            var resp = deck.responses[grabRes];
            var whiteCard = document.createElement("div");
            whiteCard.style.backgroundColor = "#fff";
            whiteCard.style.display = "inline-block";
            whiteCard.style.width = cardSize + "px";
            whiteCard.style.height = cardSize + "px";
            whiteCard.style.borderRadius = ((cardSize * 0.15) >> 0) + "px";
            whiteCard.style.padding = ((cardSize * 0.15) >> 0) + "px";
            whiteCard.style.margin = ((cardSize * 0.15) >> 0) + "px";
            whiteCard.style.border = "1px solid black";
            whiteCard.style.boxShadow = ((cardSize * 0.1) >> 0) + "px " + ((cardSize * 0.15) >> 0) + "px #888888";
            whiteCard.style.color = "#000";
            whiteCard.style.fontSize = ((cardSize / 12) >> 0) + "px";
            whiteCard.innerHTML = resp.text[0];
            cardBox.appendChild(whiteCard);
        }
        for (var i = 0; i < call.text.length - 1; i++) {
            addWhite();
        }
        document.body.appendChild(cardBox);
    };
	this.sto = function stoLoader( ){
		hideUI();
        var stoBox = document.createElement("canvas");
		stoBox.id = "SpecialEvent";
		stoBox.width = 1920;
		stoBox.height = 1080;
		stoBox.style.width = "1920px";
		stoBox.style.height = "1080px";
		stoBox.style.position  = "absolute";
		stoBox.style.zIndex  = 1;
		stoBox.style.top = "0"; 
		stoBox.style.left = "0";
		let ctx = stoBox.getContext( "2d" );
		romulanColors = {};
        document.body.appendChild(stoBox);
		
		let destination = document.createElement("div");
		destination.style.position = "absolute";
		destination.style.zIndex = 7;
		destination.style.right = "0";
		destination.style.top = "0";
		destination.style.backgroundColor = "#000";
		destination.style.color = "rgb(152,135,66)";
		destination.style.fontFamily = "LCARS";
		destination.style.fontSize = "5em";
		destination.style.letterSpacing = "2px";
		destination.style.marginRight = "10px";
		destination.innerHTML = "LOADING...";
        stoBox.appendChild(destination);
		
		let percbox = document.createElement("div");
		percbox.style.position = "absolute";
		percbox.style.zIndex = 7;
		percbox.style.right = "38px";
		percbox.style.top = "200px";
		percbox.style.color = "rgb(152,135,66)";
		percbox.style.fontFamily = "LCARS";
		percbox.style.letterSpacing = "4px";
		let percL = document.createElement("span");
		percL.style.fontSize = "8em";
		percL.innerHTML = "00";
		let percS = document.createElement("span");
		percS.style.fontSize = "4em";
		percS.style.marginLeft = "7px";
		percS.innerHTML = "00";
		percbox.appendChild( percL );
		percbox.appendChild( percS );
        stoBox.appendChild(percbox);
		
		let image = document.createElement("img");
		image.src="res/img/sto.jpg";
		image.style.position = "absolute";
		image.style.zIndex = 2;
		image.style.top = "285px";
		image.style.left = "284px";105+28+8+28+16
		image.style.border = "8px solid rgb(46,19,8)";
		image.style.borderRadius = "8px";
        stoBox.appendChild(image);

		function gradient( x, color ){ 
			let linearGradient = ctx.createLinearGradient(x, 0, x+color.width, 0);
			color.stops.forEach( stop=>{ linearGradient.addColorStop( stop.position, stop.color); } );
			return linearGradient;
		}
		function stop( position, color ){
			return { position:position, color:color };
		}
		let factionColors = {
			KDF:{
				box1: {
					width:138, stops:[
					stop(0,"rgb(73,25,3)"),
					stop(1,"rgb(106,35,3)")
				]},
				jagBar: { width: 240, stops:[
					stop(0,"rgb(27,8,2)"),
					stop(1,"rgb(47,12,5)")
				]},
				loadBarRailBehind: { width: 561, stops:[
					stop(0,"rgb(47,12,6)"), 
					stop(1,"rgb(63,21,8)")
				]},
				box2: { width: 138, stops:[
					stop(0,"rgb(47,41,17)"),
					stop(1,"rgb(69,63,29)")
				]},
				box3: { width: 138, stops:[
					stop(0,"rgb(120,41,10)"),
					stop(1,"rgb(174,58,11)")
				]},
				box4: { width: 138, stops:[
					stop(0,"rgb(41,17,5)"),
					stop(1,"rgb(60,24,8)")
				]},
				rightBars: { width: 1072, stops:[
					stop(0,"rgb(53,21,8)"),
					//stop(.8,"rgb(48,20,7)"),
					stop(1,"rgb(29,10,3)")
				]},
				timer: { width: 54, stops:[
					stop(0,"rgb(133,40,9)"),
					stop(1,"rgb(108,32,0)")
				]},
				loadSledMain: "rgb(146,50,12)",
				loadSledTopSliver: "rgb(54,22,9)",
				loadSledBottomSliver: "rgb(69,57,17)",
				loadBarRailTop: "rgb(51,22,8)",
				loadBarRailBottom: "rgb(21,10,8)",
				
				
				
			}
		};
		
		let faction = "KDF";
		let textureGradient = ctx.createRadialGradient(1920/4,1080/4,300, 1920/2,1080/2, 1920/1.5);
		textureGradient.addColorStop( 0, "rgba( 100, 100, 100, .05)");
		textureGradient.addColorStop( 1, "rgba( 40, 40, 40, .01)");
		
		let textureGradient2 = ctx.createRadialGradient(1920/2,1080/4,300, 1920/2,1080/2, 1920/1.5);
		textureGradient2.addColorStop( 0, "rgba( 70, 70, 70, .05)");
		textureGradient2.addColorStop( 1, "rgba( 20, 20, 20, .1)");
		
		let bgGradient = ctx.createRadialGradient(1920/2,1080/2,300, 1920/2,1080/2, 1920/1.5);
		bgGradient.addColorStop( 0, "rgb( 25, 17, 1)");
		bgGradient.addColorStop( 1, "rgb( 2, 1, 1)");
		let loading = 0;
		let loadBarWidth = 560;
		let loadingSledWidth = 155;
		function drawFrame(){
			let map =  document.getElementById("map").innerHTML.toUpperCase();
			map = map?map:"...";
			destination.innerHTML = "LOADING "+map;
			loading += .57;
			loading = Math.min( loading, 99.99 );
			let loadHigh = parseInt( loading );
			let loadLow = parseInt( 100 * ( loading - loadHigh ) );
			loadHigh = (loadHigh < 10)? "0"+loadHigh : ""+loadHigh;
			loadLow = (loadLow < 10)? "0"+loadLow : ""+loadLow;
			percL.innerHTML = loadHigh;
			percS.innerHTML = loadLow;
			ctx.fillStyle = bgGradient;
			ctx.fillRect(0,0,2000,1100);
			
			ctx.fillStyle = gradient ( 30, factionColors[faction].box1 );
			ctx.fillRect( 30, 0, 138, 55);
			ctx.fillStyle = textureGradient;
			ctx.fillRect( 30, 0, 138, 55);
		
			ctx.fillStyle = gradient( 30, factionColors[faction].jagBar);
			if(faction == "KDF"){
				ctx.beginPath();
				ctx.moveTo(30, 55+8);
				ctx.lineTo(30+138, 63);
				ctx.lineTo(168, 63+6);
				ctx.lineTo(168+36,69+36);
				ctx.lineTo(204+66,105);
				ctx.lineTo(270,105+28);
				ctx.lineTo(270-176,133);
				ctx.lineTo(30,69);
				ctx.closePath();
				ctx.fill();
				ctx.fillStyle = textureGradient;
				ctx.fill();
				
				ctx.fillStyle = gradient( 30, factionColors[faction].jagBar);
				ctx.beginPath();
				ctx.moveTo(270, 133+8);
				ctx.lineTo(270,141+28);
				ctx.lineTo(270-66,169);
				ctx.lineTo(204-36,169+36);
				ctx.lineTo(168,205+105);
				ctx.lineTo(168-138,310);
				ctx.lineTo(30,310-105);
				ctx.lineTo(30+64,205-64);
				ctx.closePath();
				ctx.fill();
				ctx.fillStyle = textureGradient;
				ctx.fill();
				
				
				ctx.strokeStyle = gradient( 1758, factionColors[faction].timer);
				ctx.beginPath();
				ctx.moveTo(1921,192);
				ctx.lineTo(1782,192);
				ctx.lineTo(1782-24,192+24);
				ctx.lineTo(1758,216+42);
				ctx.lineTo(1758+42,258+42);
				ctx.lineTo(1921,258+42);
				ctx.closePath();
				ctx.lineWidth = 8;
				ctx.stroke();
				ctx.fillStyle = textureGradient;
				ctx.fill();
			}
			
			ctx.fillStyle = gradient( 30, factionColors[faction].box2);
			ctx.fillRect(30, 310+8, 138, 64); 
			ctx.fillStyle = textureGradient;
			ctx.fillRect(30, 310+8, 138, 64); 
			
			ctx.fillStyle = gradient( 30, factionColors[faction].box3);
			ctx.fillRect(30, 318+64+8, 138, 64); 
			ctx.fillStyle = textureGradient;
			ctx.fillRect(30, 318+64+8, 138, 64); 
			
			ctx.fillStyle = gradient( 30, factionColors[faction].box4);
			ctx.fillRect(30, 390+64+8, 138, 564); 
			ctx.fillStyle = textureGradient;
			ctx.fillRect(30, 390+64+8, 138, 564); 
			
			ctx.fillStyle = gradient( 848, factionColors[faction].rightBars);
			ctx.fillRect(278+loadBarWidth+8, 105, 1072, 28); 
			ctx.fillRect(278+loadBarWidth+8, 105+28+8, 1072, 28); 
			ctx.fillStyle = textureGradient;
			ctx.fillRect(278+loadBarWidth+8, 105, 1072, 28); 
			ctx.fillRect(278+loadBarWidth+8, 105+28+8, 1072, 28); 
			
			ctx.fillStyle = gradient( 270+8, factionColors[faction].loadBarRailBehind); //starts at right edge of jag +8
			ctx.fillRect(270+8, 105, (loadBarWidth-loadingSledWidth-8)*(loading/100), 28); 
			ctx.fillRect(270+8, 105+28+8, (loadBarWidth-loadingSledWidth-8)*(loading/100), 28); 
			
			ctx.fillStyle = factionColors[faction].loadSledMain;
			ctx.fillRect(278+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8, 105, 54, 28);
			ctx.fillRect(278+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8, 105+28+8, 54, 28);
			ctx.fillStyle = textureGradient;
			ctx.fillRect(278+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8, 105, 54, 28);
			ctx.fillRect(278+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8, 105+28+8, 54, 28);
			
			ctx.fillStyle = factionColors[faction].loadSledTopSliver;
			ctx.fillRect(286+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8+54, 105+16, 92, 12);
			ctx.fillStyle = factionColors[faction].loadSledBottomSliver;
			ctx.fillRect(286+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8+54, 105+28+8, 92, 12);
			ctx.fillStyle = textureGradient;
			ctx.fillRect(286+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8+54, 105+16, 92, 12);
			ctx.fillRect(286+((loadBarWidth-loadingSledWidth-8)*(loading/100))+8+54, 105+28+8, 92, 12);

			ctx.fillStyle = factionColors[faction].loadBarRailTop;
			ctx.fillRect(286+loadBarWidth-8, 105, Math.min(0,0-loadBarWidth+loadingSledWidth+(loadBarWidth-loadingSledWidth-8)*(loading/100)+8+8), 28);
			
			ctx.fillStyle = factionColors[faction].loadBarRailBottom
			ctx.fillRect(286+loadBarWidth-8, 105+8+28, Math.min(0,0-loadBarWidth+loadingSledWidth+(loadBarWidth-loadingSledWidth-8)*(loading/100)+8+8), 28);
			ctx.fillStyle = textureGradient;
			ctx.fillRect(286+loadBarWidth-8, 105, Math.min(0,0-loadBarWidth+loadingSledWidth+(loadBarWidth-loadingSledWidth-8)*(loading/100)+8+8), 28);
			ctx.fillRect(286+loadBarWidth-8, 105+8+28, Math.min(0,0-loadBarWidth+loadingSledWidth+(loadBarWidth-loadingSledWidth-8)*(loading/100)+8+8), 28);
			
		}
			setInterval( drawFrame, 50);
	};
})();
