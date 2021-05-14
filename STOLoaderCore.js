//STOLoaderCore.js


function STOLoader(faction) {
    if (!faction) {
        faction = "KDF";
    }
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
    destination.style.paddingLeft = "10px";
    destination.style.paddingRight = "10px";
    destination.innerHTML = "LOADING...";
    stoBox.appendChild(destination);

    function gradient(x, color) {
        let linearGradient = ctx.createLinearGradient(x, 0, x + color.width, 0);
        color.stops.forEach(stop => {
            linearGradient.addColorStop(stop.position, stop.color);
        });
        return linearGradient;
    }

    let textureGradient = ctx.createRadialGradient(1920 / 4, 1080 / 4, 300, 1920 / 2, 1080 / 2, 1920 / 1.5);
    textureGradient.addColorStop(0, "rgba( 100, 100, 100, .05)");
    textureGradient.addColorStop(1, "rgba( 40, 40, 40, .01)");
    let bgGradient = ctx.createRadialGradient(1920 / 2, 1080 / 2, 300, 1920 / 2, 1080 / 2, 1920 / 1.5);
    bgGradient.addColorStop(0, "rgb( 25, 17, 1)");
    bgGradient.addColorStop(1, "rgb( 2, 1, 1)");
    let stringGradient = ctx.createLinearGradient(0, 0, 0, 84);
    stringGradient.addColorStop(0, "rgb(21,21,21)");
    stringGradient.addColorStop(1, "rgb(47,47,49)");
    let imageBorderGradient = ctx.createLinearGradient(195, 195, 195 + 1280, 195 + 720);
    imageBorderGradient.addColorStop(0, stoData[faction].imageBorderStart);
    imageBorderGradient.addColorStop(1, stoData[faction].imageBorderStop);
    let infoBoxGradient = ctx.createLinearGradient(1150 - 16, 238, 1150 + 16, 238 + 388 + 16);
    infoBoxGradient.addColorStop(0, "rgba(0,0,0,1)");
    infoBoxGradient.addColorStop(1, "rgba(0,0,0,.5)");
    let infoBoxBorderGradient = ctx.createLinearGradient(1150 - 16, 238, 1150 + 64, 238 + 388 + 16);
    infoBoxBorderGradient.addColorStop(0, "rgba(86,71,64,1)");
    infoBoxBorderGradient.addColorStop(1, "rgba(86,71,64,.3)");

    let stoImage = document.createElement("img");
    stoImage.src = "res/img/sto.jpg";

    let tag = document.getElementById("tagline").innerHTML;
    tag = tag.replace(/<br>/, " ");
    tag = tag.replace(/<i>/, "");
    tag = tag.replace(/<\/i>/, "");
    tag = tag.replace(/<span.+/, "");
    let tag2 = "";
    let loading = 0;
    let loadBarWidth = 560;
    let loadingSledWidth = 155;

    function pathFromCoords(coords) { //FEDS need quadraticCurveTo
        ctx.beginPath();
        let move = false;
        coords.forEach(e => {
            if (!move) {
                ctx.moveTo(e[0], e[1]);
                move = true;
            } else {
                if (e.length == 2) {
                    ctx.lineTo(e[0], e[1]);
                } else if (e.length == 4) {
                    ctx.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                }
            }
        });
        ctx.closePath();
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
        return num;
    }
    function rngBoxNumber() {
        return rngNumberString(2) + "-" + rngNumberString(4);
    }
    boxNumbers = boxNumbers.map(rngBoxNumber);
    function rngDataString() {
        let numLengths = [
            5, 6, 4, 6, 3, 2, 5, 7, 2, 2, 2, 3, 2, 9, 1, 8, 4, 5, 5, 4, 4, 8, 4, 1, 8,
            8, 9, 7, 3, 1, 5, 4, 8, 5, 6, 4, 2, 6, 4, 8, 6, 4, 6, 2, 8, 2, 6, 2
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

    function fillBox(style, x, y, w, h) {
        if (typeof style == "string") {
            ctx.fillStyle = style
        } else {
            ctx.fillStyle = gradient(x, style);
        }
        ctx.fillRect(x, y, w, h);
        ctx.fillStyle = textureGradient;
        ctx.fillRect(x, y, w, h);
    }
    function fillPoly(coords, style) {
        pathFromCoords(coords);
        ctx.fillStyle = style;
        ctx.fill();
        ctx.fillStyle = textureGradient;
        ctx.fill();
    }
    function strokePoly(coords, style, width) {
        pathFromCoords(coords);
        ctx.strokeStyle = style;
        ctx.lineWidth = width;
        ctx.stroke();
        ctx.fillStyle = textureGradient;
        ctx.stroke();
    }

    function drawFrame() {
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, 2000, 1100);
        ctx.drawImage(stoImage, 198, 198);

        fillPoly(stoData[faction].topJagCoords, gradient(30, stoData[faction].jagBar));
        fillPoly(stoData[faction].bottomJagCoords, gradient(30, stoData[faction].jagBar));
        strokePoly(stoData[faction].timerCoords, gradient(1758, stoData[faction].timer), 8);
        strokePoly(stoData[faction].imageBorderCoords, imageBorderGradient, 8);

        fillBox(stoData[faction].box1, 30, 0, 138, 55);
        fillBox(stoData[faction].box2, 30, 310 + 8, 138, 64);
        fillBox(stoData[faction].box3, 30, 318 + 64 + 8, 138, 64);
        fillBox(stoData[faction].box4, 30, 390 + 64 + 8, 138, 664);
        fillBox(stoData[faction].rightBars, 278 + loadBarWidth + 8, 105, 1100, 28);
        fillBox(stoData[faction].rightBars, 278 + loadBarWidth + 8, 105 + 28 + 8, 1100, 28);

        let sledPosition = (loadBarWidth - loadingSledWidth - 8) * (loading / 100) + 8;
        fillBox(stoData[faction].loadBarRailBehind, 270 + 8, 105, sledPosition - 8, 28);
        fillBox(stoData[faction].loadBarRailBehind, 270 + 8, 105 + 28 + 8, sledPosition - 8, 28);
        fillBox(stoData[faction].loadSledMain, 278 + sledPosition, 105, 54, 28);
        fillBox(stoData[faction].loadSledMain, 278 + sledPosition, 105 + 28 + 8, 54, 28);
        fillBox(stoData[faction].loadSledTopSliver, 286 + sledPosition + 54, 105 + 16, 92, 12);
        fillBox(stoData[faction].loadSledBottomSliver, 286 + sledPosition + 54, 105 + 28 + 8, 92, 12);
        fillBox(stoData[faction].loadBarRailTop, 286 + loadBarWidth - 8, 105, Math.min(0, 0 - loadBarWidth + loadingSledWidth + sledPosition + 8), 28);
        fillBox(stoData[faction].loadBarRailBottom, 286 + loadBarWidth - 8, 105 + 8 + 28, Math.min(0, 0 - loadBarWidth + loadingSledWidth + sledPosition + 8), 28);

        let mostSignificantDigit = parseInt(loading / 10);
        let secondMostSignificantDigit = parseInt(loading % 10);
        let loadLow = parseInt(loading * 100 % 100);
        let secondLeastSignificanDigit = parseInt(loadLow / 10);
        let leastSignificantDigit = parseInt(loadLow % 10);
        let spacing = 4;
        ctx.font = "bold 9em okuda";
        ctx.fillStyle = "rgb(152,135,66)";
        ctx.fillText(mostSignificantDigit, 1782, 256);
        ctx.fillText(secondMostSignificantDigit, 1800 + spacing, 256);
        ctx.font = "bold 5em okuda";
        ctx.fillText(secondLeastSignificanDigit, 1825 + spacing, 256);
        ctx.fillText(leastSignificantDigit, 1840 + spacing, 256);

        ctx.font = "3em okuda";
        ctx.fillStyle = bgGradient;
        let x = 165 - ctx.measureText("00-0000" + "..").width;
        ctx.fillText(boxNumbers[0], x, 47);
        ctx.fillText(boxNumbers[1], x, 87);
        ctx.fillText(boxNumbers[2], x, 302);
        ctx.fillText(boxNumbers[3], x, 374);
        ctx.fillText(boxNumbers[4], x, 444);
        ctx.fillText(boxNumbers[5], x, 492);

        ctx.font = "bold 1.6em Lucida Console";
        dataStrings.forEach((data, i) => {
            ctx.fillStyle = data.updated ? "rgb(65,82,92)" : stringGradient;
            ctx.fillText(data.str, 168 + 24, 14 + 14 * i);
        });
        fillPoly(stoData[faction].infoBoxcoords, infoBoxGradient);
        strokePoly(stoData[faction].infoBoxcoords, infoBoxBorderGradient, 1);

        ctx.fillStyle = "rgb(201,51,63)";
        ctx.font = "bold 3em Pixel-Emulator";
        ctx.fillText("GGG", 1150 + 144 - (ctx.measureText("GGG").width / 2), 238 + 30);
        ctx.fillStyle = "rgb(246,0,0)";
        ctx.font = "bold 4em Pixel-Emulator";
        ctx.fillText("RED ALERT", 1150 + 144 - (ctx.measureText("RED ALERT").width / 2), 238 + 60);

        ctx.fillStyle = "rgb(3,117,3)";
        ctx.font = "bold 2em Verdana";
        let tag2Width = ctx.measureText(tag2).width;
        let tagWidth = ctx.measureText(tag).width;

        if (tag2.length == 0 && tagWidth > 288 && tagWidth < 550) {
            let firstChunk = tag.substr(0, tag.length / 2);
            firstChunk = firstChunk.substr(0, firstChunk.lastIndexOf(" "));
            tag2 = tag.substr(firstChunk.length);
            tag = firstChunk;
            tagWidth = ctx.measureText(tag).width;
            tag2Width = ctx.measureText(tag2).width;
        } else if (tagWidth > 550) {
            tag = "Live from now until we get bored";
        }
        ctx.fillText(tag, 1150 + 144 - (tagWidth / 2), 238 + 80);
        if (tag2.length > 0) {
            ctx.fillText(tag2, 1150 + 144 - (tag2Width / 2), 238 + 100);
        }

        ctx.fillStyle = "rgb(232,231,229)";
        ctx.font = "2em Verdana";
        stoData.textBlob.forEach((e, i) => {
            ctx.fillText(e, 1150 + 16, 238 + 90 + 40 + (20 * i));
            if (i == 0 || i == 6 || i == 12) {
                ctx.fillText("*", 1150, 238 + 90 + 43 + (20 * i));
            }
        });

        anim(drawFrame);
    }
    ctx.scale(window.innerWidth / 1920, window.innerHeight / 1080);
    setInterval(frameLogic, 75);
    drawFrame();
    window.onresize = () => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(window.innerWidth / 1920, window.innerHeight / 1080);
    };
}