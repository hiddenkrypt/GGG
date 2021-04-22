
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
    /**
     *creates a new Canvas Element of indicated size (default 400x400)
     * returns the 2d context for the Canvas
     **/
    function addCanvas(width, height) {
        width = width || 400;
        height = height || 400;
        var canvas = document.createElement("canvas");
        var container = document.createElement("div");
		container.id = "SpecialEvent";
        container.style.width = "100%";
        container.style.textAlign = "center";
        container.style.fontSize = "4em";
        container.id = "canvasContainer";
        container.style.position = "absolute";
        container.style.bottom = 0;
        canvas.width = width;
		canvas.height = height;
		canvas.style.width = width;
        canvas.style.height = height;
        canvas.style.border = "1px solid black";
        canvas.style.display = "inline"
        container.appendChild(canvas);
        document.body.appendChild(container);
        return canvas.getContext("2d");
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
        var ctx = addCanvas(C_WIDTH, C_HEIGHT);
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
                    document.body.appendChild(doot2);
                }, 3300);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 4300);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 5000);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 6000);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 6300);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 6700);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 6800);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 6900);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 6950);
                setTimeout(function () {
                    document.body.appendChild(doot2.cloneNode());
                }, 7000);
                setTimeout(function () {
                    document.body.appendChild(meter);
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

})();
