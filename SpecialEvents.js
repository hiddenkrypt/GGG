/** SpecialEvents.js **
 * This file contains callback functions for special triggered events on some
 * loading screens. Should be referenced and loaded before Directoy.js
**/

var SpecialEvents = new (function(){

//~~~~~~~~~~~~UTILITY FUNCTIONS~~~~~~~~~~~~
	//requestAnimationFrame shim
	window.anim = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();
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
	 * Hides the DOM Elements normally on the page, and sets up a clickhandler
	 * that will bring the elements back
	**/
	function hideUI(){
		document.addEventListener(
			"click",
			function clickToReturn(){
				document.getElementById("boilerplate").style.display = "initial";
				document.getElementById("logo").style.display = "initial";
				document.getElementById("test").style.display = "initial";
				document.removeEventListener("click", clickToReturn, false);
			}, false);
		document.getElementById("boilerplate").style.display = 'none';
		document.getElementById("logo").style.display = "none";
		document.getElementById("test").style.display = "none";
	}
	/**
	 *creates a new Canvas Element of indicated size (default 400x400)
	 * returns the 2d context for the Canvas
	**/
	function addCanvas(width, height){
		width=width||400;
		height=height||400;
		var canvas = document.createElement("canvas");
		var container = document.createElement("div");
		container.style.width="100%";
		container.style.textAlign="center";
		container.style.fontSize="4em";
		container.id = "canvasContainer";
		canvas.width=width
		canvas.height=height
		canvas.style.width=width;
		canvas.style.height=height;
		canvas.style.border="1px solid black";
		canvas.style.display="inline"
		console.log("window width: "+window.innerWidth);
		console.log(canvas.width);
		container.appendChild(canvas);
		document.body.appendChild(container);
		return canvas.getContext("2d");
	}


//~~~~~~~~~~~~EVENT FUNCTIONS~~~~~~~~~~~~

	/** sunny()
	 * Plays the theme from "Always Sunny In Philadelphia"
	 * Trigger Screen: 'Always Sunny in Terrortown' by Brett
	**/
	this.sunny = function(){
		playsound("res/audio/sunny.wav");
	};


	/** indexError()
	 * Fakes a "Too many indices" error by clearing out the normal display
	 * elements and playing a windows XP error sound. For testing, a mouseclick
	 * on the screen will bring back the display elements.
	 * Tell a programmer!
	**/
	this.indexError = function(){
		hideUI();
		playsound('res/audio/error-ding.wav');
	}

	/** snow()
	 * A simple pong game as a proof-of-concept for canvas animations
	**/
	this.snow = function(){
		hideUI();
		var colorMode = Math.random();
		if(colorMode < (1/3)){
			colorMode = "8color";
		} else if(colorMode < (2/3)){
			colorMode = "grayscale";
		} else{
			colorMode = "b/w";
		}
		var canvasW = 300;
		var canvasH = 300;
		var ctx = addCanvas(canvasW,canvasH);
		var Ball = function(){
			var size=5;
			var myStyle = (function(){
				if(colorMode === "8color"){
					return "#" + ((Math.random()>.5)?'00':'FF') + ((Math.random()>.5)?'00':'FF') + ((Math.random()>.5)?'00':'FF');;
				}
				if(colorMode === "grayscale"){
					var grayscale = Math.floor(Math.random()*255);
					return "rgb("+grayscale+","+grayscale+","+grayscale+")";
				}
				if(colorMode === "b/w"){
					var bw = ((Math.random()>.5)?'00':'FF');
					return ("#"+bw+bw+bw);
				}
			}());
			var coords = {
				x:canvasW/2,
				y:canvasH/2
			};
			var velocity = {
				dx:(Math.random()-.5)*5,
				dy:(Math.random()-0.5)*7
			};
			this.tick = function(){
				coords.x += velocity.dx;
				coords.y += velocity.dy;
				if(coords.x < 0 || coords.x+size >= canvasW){
					velocity.dx = -velocity.dx + ((Math.random()-.5)/4);
					coords.x += velocity.dx;
				}
				if(coords.y < 0 || coords.y+size >= canvasH){
					velocity.dy = -velocity.dy + ((Math.random()-.5)/4);
					coords.y += velocity.dy;
				}
			}
			this.draw = function(ctx){
				ctx.fillStyle = myStyle
				ctx.fillRect(coords.x, coords.y, size,size);
			}
		}
		var balls = [];
		var FPSLIMIT = 40;
		var fps = 10000;
		var frames = 0;
		setInterval(function(){
			fps = frames;
			frames = 0;
		}, 1000)
		function startGame(){
			frames++;
			if(fps > FPSLIMIT){
				balls.unshift(new Ball());
				balls.unshift(new Ball());
				balls.unshift(new Ball());
				balls.unshift(new Ball());
				balls.unshift(new Ball());
				balls.unshift(new Ball());
			}
			ctx.fillStyle = "#696969";
			ctx.fillRect(0,0,canvasW,canvasH);
			balls.forEach(function(e){e.tick()});
			balls.forEach(function(e){e.draw(ctx)});
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0,0,120,60);
			ctx.font="20px Georgia";
			ctx.fillStyle = "#000000";
			ctx.fillText("FPS:"+fps,5,15);
			ctx.fillText("Balls:"+balls.length,5,35);
			ctx.fillText("Mode:"+colorMode,5,55);
			anim(startGame);
		}
		startGame();
		document.getElementById("canvasContainer")
			.appendChild(
				document.createElement("p")
			).appendChild(
				document.createTextNode("This bouncing ball simulation is a simple proof-of-concept")
			)

	};
})();
