
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
            if (boilerplate) {
                boilerplate.style.display = "initial";
            }
            if (logo) {
                logo.style.display = "initial";
            }
            document.removeEventListener("click", clickToReturn, false);
        },
            false);
        if (boilerplate) {
            boilerplate.style.display = "none";
        }
        if (logo) {
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
    this.sto = function stoLoader() {
        hideUI();
        var stoBox = document.createElement("div");
        var canvas = document.createElement("canvas");
        stoBox.id = "SpecialEvent";
        document.body.appendChild(stoBox);

        canvas.width = window.innerWidth; //1920;
        canvas.height = window.innerHeight; //1080;
        canvas.style.width = window.innerWidth; //"1920px";
        canvas.style.height = window.innerHeight; //"1080px";
        canvas.style.position = "absolute";
        canvas.style.zIndex = 0;
        canvas.style.top = "0";
        canvas.style.left = "0";
        let ctx = canvas.getContext("2d");
        stoBox.appendChild(canvas);

        let destination = document.createElement("div");
        destination.style.position = "absolute";
        destination.style.zIndex = 7;
        destination.style.right = "0";
        destination.style.top = "0";
        destination.style.backgroundColor = "#000";
        destination.style.color = "rgb(152,135,66)";
        destination.style.fontFamily = "okuda";
        destination.style.fontSize = "5em";
        destination.style.letterSpacing = "2px";
        destination.style.marginRight = "10px";
        destination.innerHTML = "LOADING...";
        stoBox.appendChild(destination);

        let image = document.createElement("img");
        image.src = "res/img/sto.jpg";
        image.style.position = "absolute";
        image.style.zIndex = 2;
        image.style.top = 185 * (window.innerHeight / 1080) + "px";
        image.style.left = 185 * (window.innerWidth / 1920) + "px";
        image.width = image.naturalHeight * (window.innerHeight / 1080);
        image.width = image.naturalWidth * (window.innerWidth / 1920);
        image.style.border = "8px solid rgb(46,19,8)";
        image.style.borderRadius = "8px";
        stoBox.appendChild(image);
        console.log(image.naturalWidth);
        console.log(image.clientWidth);
        console.log("scaleH: " + window.innerHeight / 1080 + "  scaleW:" + window.innerWidth / 1920);

        function gradient(x, color) {
            let linearGradient = ctx.createLinearGradient(x, 0, x + color.width, 0);
            color.stops.forEach(stop => {
                linearGradient.addColorStop(stop.position, stop.color);
            });
            return linearGradient;
        }
        function stop(position, color) {
            return {
                position: position,
                color: color
            };
        }
        let factionData = {
            KDF: {
                box1: {
                    width: 138,
                    stops: [
                        stop(0, "rgb(73,25,3)"),
                        stop(1, "rgb(106,35,3)")
                    ]
                },
                jagBar: {
                    width: 240,
                    stops: [
                        stop(0, "rgb(27,8,2)"),
                        stop(1, "rgb(47,12,5)")
                    ]
                },
                loadBarRailBehind: {
                    width: 561,
                    stops: [
                        stop(0, "rgb(47,12,6)"),
                        stop(1, "rgb(63,21,8)")
                    ]
                },
                box2: {
                    width: 138,
                    stops: [
                        stop(0, "rgb(47,41,17)"),
                        stop(1, "rgb(69,63,29)")
                    ]
                },
                box3: {
                    width: 138,
                    stops: [
                        stop(0, "rgb(120,41,10)"),
                        stop(1, "rgb(174,58,11)")
                    ]
                },
                box4: {
                    width: 138,
                    stops: [
                        stop(0, "rgb(41,17,5)"),
                        stop(1, "rgb(60,24,8)")
                    ]
                },
                rightBars: {
                    width: 1072,
                    stops: [
                        stop(0, "rgb(53,21,8)"),
                        stop(1, "rgb(29,10,3)")
                    ]
                },
                timer: {
                    width: 54,
                    stops: [
                        stop(0, "rgb(133,40,9)"),
                        stop(1, "rgb(108,32,0)")
                    ]
                },
                loadSledMain: "rgb(146,50,12)",
                loadSledTopSliver: "rgb(54,22,9)",
                loadSledBottomSliver: "rgb(69,57,17)",
                loadBarRailTop: "rgb(51,22,8)",
                loadBarRailBottom: "rgb(21,10,8)",
                topJagCoords: [
                    [30, 55 + 8],
                    [30 + 138, 63],
                    [168, 63 + 6],
                    [168 + 36, 69 + 36],
                    [204 + 66, 105],
                    [270, 105 + 28],
                    [270 - 176, 133],
                    [30, 69]
                ],
                bottomJagCoords: [
                    [270, 133 + 8],
                    [270, 141 + 28],
                    [270 - 66, 169],
                    [204 - 36, 169 + 36],
                    [168, 205 + 105],
                    [168 - 138, 310],
                    [30, 310 - 105],
                    [30 + 64, 205 - 64]
                ],
                timerCoords: [
                    [2000, 192],
                    [1782, 192],
                    [1782 - 24, 192 + 24],
                    [1758, 216 + 42],
                    [1758 + 42, 258 + 42],
                    [2000, 258 + 42],
                ]
            }
        };

        let faction = "KDF";

        let textureGradient = ctx.createRadialGradient(1920 / 4, 1080 / 4, 300, 1920 / 2, 1080 / 2, 1920 / 1.5);
        textureGradient.addColorStop(0, "rgba( 100, 100, 100, .05)");
        textureGradient.addColorStop(1, "rgba( 40, 40, 40, .01)");
        let textureGradient2 = ctx.createRadialGradient(1920 / 2, 1080 / 4, 300, 1920 / 2, 1080 / 2, 1920 / 1.5);
        textureGradient2.addColorStop(0, "rgba( 70, 70, 70, .05)");
        textureGradient2.addColorStop(1, "rgba( 20, 20, 20, .1)");
        let bgGradient = ctx.createRadialGradient(1920 / 2, 1080 / 2, 300, 1920 / 2, 1080 / 2, 1920 / 1.5);
        bgGradient.addColorStop(0, "rgb( 25, 17, 1)");
        bgGradient.addColorStop(1, "rgb( 2, 1, 1)");
        let stringGradient = ctx.createLinearGradient(0, 0, 0, 84);
        stringGradient.addColorStop(0, "rgb(29,29,29)");
        stringGradient.addColorStop(1, "rgb(47,47,49)");

        let loading = 0;
        let loadBarWidth = 560;
        let loadingSledWidth = 155;

        ctx.scale(window.innerWidth / 1920, window.innerHeight / 1080);
        function pathFromCoords(coords) {
            let move = false; ;
            coords.forEach(e => {
                if (!move) {
                    ctx.moveTo(e[0], e[1]);
                    move = true;
                } else {
                    ctx.lineTo(e[0], e[1]);
                }
            });
        }
        let boxNumbers = ["00-0000", "01-0000", "02-0000", "03-0000", "04-0000", "05-0000"];
        let dataStrings = new Array(6).fill(1).map(() => {
            return {
                str: "",
                updated: false
            };
        });
        function rngNumberString(digits) {
            let num = parseInt(Math.random() * Math.pow(10, digits)) + "";
            while (num.length < digits) {
                num = "0" + num;
            }
            return num
        }
        function rngBoxNumber() {
            return rngNumberString(2) + "-" + rngNumberString(4);
        }
        boxNumbers = boxNumbers.map(rngBoxNumber);
        function rngDataString() {
            let numLengths = [
                5, 6, 4, 6, 3, 2, 5, 7, 2, 2,
                2, 3, 2, 9, 1, 8, 4, 5, 5, 4,
                4, 8, 4, 1, 8, 8, 9, 7, 3, 1,
                5, 4, 8, 5, 6, 4, 2, 6, 4, 8,
                6, 4, 6, 2, 8, 2, 6, 2
            ];
            return numLengths.map(rngNumberString).join(" ");
        }

        let frames = 0;
        let activeDataString = 0;
        function frameLogic() {
            if (frames > 400) {
                frames = 0;
            }
            frames++;
            let map = document.getElementById("map").innerHTML.toUpperCase();
            map = map ? map : "...";
            destination.innerHTML = "LOADING " + map;
            loading += .57;
            loading = Math.min(loading, 99.99);
            if (Math.random() < .1) {
                boxNumbers[parseInt(Math.random() * boxNumbers.length)] = rngBoxNumber();
            }
            if (frames % 17 == 0) {
                if (activeDataString == 1) {
                    dataStrings[dataStrings.length - 1].updated = false;
                } else {
                    let firstActive = dataStrings.find(e => e.updated);
                    if (firstActive) {
                        firstActive.updated = false;
                    }
                }

                if (dataStrings[activeDataString].str != "") {
                    dataStrings[activeDataString].updated = true;
                }
                dataStrings[activeDataString].str = rngDataString();
                activeDataString = (activeDataString + 1) % dataStrings.length;
            }
        }
        function drawFrame() {

            frameLogic();

            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, 2000, 1100);

            ctx.fillStyle = gradient(30, factionData[faction].jagBar);
            ctx.beginPath();
            pathFromCoords(factionData[faction].topJagCoords) //FEDS need quadraticCurveTo
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = textureGradient;
            ctx.fill();

            ctx.fillStyle = gradient(30, factionData[faction].jagBar);
            ctx.beginPath();
            pathFromCoords(factionData[faction].bottomJagCoords) //FEDS need quadraticCurveTo
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = textureGradient;
            ctx.fill();

            ctx.strokeStyle = gradient(1758, factionData[faction].timer);
            ctx.beginPath();
            pathFromCoords(factionData[faction].timerCoords); //FEDS need quadraticCurveTo
            ctx.closePath();
            ctx.lineWidth = 8;
            ctx.stroke();
            ctx.fillStyle = textureGradient;
            ctx.fill();

            function drawBox(style, x, y, w, h) {
                if (typeof style == "string") {
                    ctx.fillStyle = style
                } else {
                    ctx.fillStyle = gradient(x, style);
                }
                ctx.fillRect(x, y, w, h);
                ctx.fillStyle = textureGradient;
                ctx.fillRect(x, y, w, h);
            }

            drawBox(factionData[faction].box1, 30, 0, 138, 55);
            drawBox(factionData[faction].box2, 30, 310 + 8, 138, 64);
            drawBox(factionData[faction].box3, 30, 318 + 64 + 8, 138, 64);
            drawBox(factionData[faction].box4, 30, 390 + 64 + 8, 138, 664);
            drawBox(factionData[faction].rightBars, 278 + loadBarWidth + 8, 105, 1100, 28);
            drawBox(factionData[faction].rightBars, 278 + loadBarWidth + 8, 105 + 28 + 8, 1100, 28);
            let sledPosition = (loadBarWidth - loadingSledWidth - 8) * (loading / 100) + 8;
            drawBox(factionData[faction].loadBarRailBehind, 270 + 8, 105, sledPosition - 8, 28);
            drawBox(factionData[faction].loadBarRailBehind, 270 + 8, 105 + 28 + 8, sledPosition - 8, 28);
            drawBox(factionData[faction].loadSledMain, 278 + sledPosition, 105, 54, 28);
            drawBox(factionData[faction].loadSledMain, 278 + sledPosition, 105 + 28 + 8, 54, 28);
            drawBox(factionData[faction].loadSledTopSliver, 286 + sledPosition + 54, 105 + 16, 92, 12);
            drawBox(factionData[faction].loadSledBottomSliver, 286 + sledPosition + 54, 105 + 28 + 8, 92, 12);
            drawBox(factionData[faction].loadBarRailTop, 286 + loadBarWidth - 8, 105, Math.min(0, 0 - loadBarWidth + loadingSledWidth + sledPosition + 8), 28);
            drawBox(factionData[faction].loadBarRailBottom, 286 + loadBarWidth - 8, 105 + 8 + 28, Math.min(0, 0 - loadBarWidth + loadingSledWidth + sledPosition + 8), 28);

            let mostSignificantDigit = parseInt(loading / 10);
            let secondMostSignificantDigit = parseInt(loading % 10);
            let loadLow = parseInt(loading * 100 % 100);
            let secondLeastSignificanDigit = parseInt(loadLow / 10);
            let leastSignificantDigit = parseInt(loadLow % 10);

            let spacing = 4;
            ctx.font = "bold 9em okuda";
            ctx.fillStyle = "rgb(152,135,66)";
            ctx.fillText(mostSignificantDigit, 1782, 256);
            let msdWidth = ctx.measureText(mostSignificantDigit).width;
            ctx.fillText(secondMostSignificantDigit, 1800 + spacing, 256);
            ctx.font = "bold 5em okuda";
            ctx.fillStyle = "rgb(152,135,66)";
            ctx.fillText(secondLeastSignificanDigit, 1825 + spacing, 256);
            ctx.fillText(leastSignificantDigit, 1840 + spacing, 256);

            ctx.font = "3em okuda";
            ctx.fillStyle = bgGradient;
            let x = 168 - ctx.measureText("00-0000" + "..").width;
            let gap = 8;
            ctx.fillText(boxNumbers[0], x, 55 - gap);
            ctx.fillText(boxNumbers[1], x, 63 + 16 + gap);
            ctx.fillText(boxNumbers[2], x, 310 - gap);
            ctx.fillText(boxNumbers[3], x, 318 + 64 - gap);
            ctx.fillText(boxNumbers[4], x, 324 + 128 - gap);
            ctx.fillText(boxNumbers[5], x, 324 + 128 + 32 + gap);

            ctx.font = "bold 1.6em Lucida Console";
            dataStrings.forEach((data, i) => {
                ctx.fillStyle = data.updated ? "rgb(65,82,92)" : stringGradient;
                ctx.fillText(data.str, 168 + 24, 14 + 14 * i);
            });
        }
        setInterval(drawFrame, 75);
    };
})();
