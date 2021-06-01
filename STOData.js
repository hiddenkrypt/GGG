//STOData.js
let STOData = function ( ctx ) {
	this.faction = "FED";
	this.dataStrings = new Array(6).fill(1).map(() => {
        return {
            str: "",
            updated: false
        };
    });
	this.boxNumbers = ["00-0000", "01-0000", "02-0000", "03-0000", "04-0000", "05-0000"];
	this.cornerBoxes = [
		new Array(20).fill(1).map(e=>Math.random()>.9?false:true),
		new Array(20).fill(1).map(e=>Math.random()>.7?false:true)
	];
	let date = new Date();
	let dateString = date.getFullYear()+"."+date.getMonth()+"."+date.getDay()+":"+date.getHours()+"."+date.getMinutes()+"."+date.getSeconds();
	this.floorText = [
		"98980.91/"+dateString,
		"262/7237 726.85 9845",
		"3037 421 594 46 8092",
		"7189124 924",
		"176 12 30"
	];
	
	this.bgGradient = ctx.createRadialGradient(1920 / 2, 1080 / 2, 300, 1920 / 2, 1080 / 2, 1920 / 1.5);
	this.textureGradient = ctx.createRadialGradient(1920 / 4, 1080 / 4, 300, 1920 / 2, 1080 / 2, 1920 / 1.5);
	this.textureGradient.addColorStop(0, "rgba( 100, 100, 100, .05)");
	this.textureGradient.addColorStop(1, "rgba( 40, 40, 40, .01)");
	this.textureGradient2 = ctx.createLinearGradient(0,0,1920,1080);
	this.textureGradient2.addColorStop(0, "rgba( 0, 0, 0, .1)");
	this.textureGradient2.addColorStop(.5, "rgba( 33, 33, 33, .4)");
	this.textureGradient2.addColorStop(1, "rgba( 255, 255, 255, .01)");
	this.stringGradient = ctx.createLinearGradient(0, 0, 0, 84);
	this.stringGradient.addColorStop(0, "rgb(42,42,42)");
	this.stringGradient.addColorStop(1, "rgb(50,50,50)");
	this.infoBoxGradient = ctx.createLinearGradient(1150 - 16, 238, 1150 + 16, 238 + 388 + 16);
	this.infoBoxGradient.addColorStop(0, "rgba(0,0,0,1)");
	this.infoBoxGradient.addColorStop(1, "rgba(0,0,0,.6)");
	this.infoBoxBorderGradient = ctx.createLinearGradient(1150 - 16, 238, 1150 + 64, 238 + 388 + 16);
	this.infoBoxBorderGradient.addColorStop(0, "rgba(86,71,64,1)");
	this.infoBoxBorderGradient.addColorStop(1, "rgba(86,71,64,.3)");
	
	this.textBlob = [
		"The Borg, Thollians, Nah'kul,",
		"Elachi, and Tzenkethi are all",
		"being total jerks right now. Join",
		"any GGG Red Alert to participate",
		"in this trash fire.",
		"",
		"Play the GGG Red Alert Event",
		"for ten days to be branded a",
		"total loser. Oh and you earn",
		"an experimental ultimate captain",
		"tech upgrade point token",
		"",
		"Once you complete the event",
		"you can never be free again.",
		"You will repeat the event ",
		"forever, earning even more ",
		"AdaBux. You WILL play daily",
		"to increase the amount you earn",
		"each day. You won't have a",
		"choice. There is no escape."
	];
	
    function stop(position, color) {
        return {
            position: position,
            color: color
        };
    }
	
	this.KDF = {
		destination: "rgb(100,102,53)",
		percentage: {
			width: 112,
			stops:[
				stop(0,"rgb(164,154,95)"),
				stop(1,"rgb(132,126,76)")
			]
		},
		background: [
			stop(0, "rgb( 25, 17, 1)"),
			stop(1, "rgb( 2, 1, 1)")
		],		
			
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
		imageBorderStart: "rgb(57,21,9)",
		imageBorderStop: "rgb(37,13,3)",
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
		],
		imageBorderCoords: [
			[198 + 4, 198 - 4],
			[198 - 4 + 1280, 198 - 4],
			[198 + 4 + 1280, 198 + 4],
			[198 + 4 + 1280, 198 - 4 + 720],
			[198 - 4 + 1280, 198 + 4 + 720],
			[198 + 4, 198 + 4 + 720],
			[198 - 4, 198 - 4 + 720],
			[198 - 4, 198 + 4]
		],
		infoBoxcoords: [
			[1150, 238],
			[1150 + 288, 238],
			[1150 + 288 + 16, 238 + 16],
			[1150 + 288 + 16, 238 + 16 + 492],
			[1150 + 288, 238 + 32 + 492],
			[1150, 238 + 32 + 492],
			[1150 - 16, 238 + 16 + 492],
			[1150 - 16, 238 + 16]
		]
	};

	this.RRW = {
		destination:"rgb(69,137,140)",
		percentage: {
			width: 112,
			stops:[
				stop(0,"rgb(79,158,169)"),
				stop(1,"rgb(70,141,143)")
			]
		},
			
		background: [
			stop(0, "rgb( 15, 22, 17)"),
			stop(1, "rgb( 0, 2, 1)")
		],	
		box1: {
			width: 138,
			stops: [
				stop(0, "rgb(2,51,47)"),
				stop(1, "rgb(2,72,72)")
			]
		},
		jagBar: {
			width: 240,
			stops: [
				stop(0, "rgb(0,20,11)"),
				stop(1, "rgb(2,41,23)")
			]
		},
		loadBarRailBehind: "rgb(15,43,29)",
		box2: {
			width: 138,
			stops: [
				stop(0, "rgb(10,39,47)"),
				stop(1, "rgb(16,58,74)")
			]
		},
		box3: {
			width: 138,
			stops: [
				stop(0, "rgb(8,80,77)"),
				stop(1, "rgb(7,116,113)")
			]
		},
		box4: {
			width: 138,
			stops: [
				stop(0, "rgb(9,31,19)"),
				stop(1, "rgb(6,48,28)")
			]
		},
		rightBars: {
			width: 1072,
			stops: [
				stop(0, "rgb(15,43,29)"),
				stop(1, "rgb(3,23,12)")
			]
		},
		timer: {
			width: 54,
			stops: [
				stop(0, "rgb(1,87,84)"),
				stop(1, "rgb(6,67,68)")
			]
		},
		loadSledMain: "rgb(8,98,98)",
		loadSledTopSliver: "rgb(5,42,25)",
		loadSledBottomSliver: "rgb(19,50,70)",
		loadBarRailTop: "rgb(15,43,29)",
		loadBarRailBottom: "rgb(15,43,29)",
		imageBorderStart: "rgb(2,43,25)",
		imageBorderStop: "rgb(3,26,18)",
		topJagCoords: [
			[30, 55 + 8],
			[30 + 138, 63],
			[168, 63 + 6],
			[168 + 11, 69 + 18],
			[168 + 11+15, 69 + 18],
			[168 + 11+15+11, 69 + 18+18],
			[204 + 66, 105],
			[270, 105 + 28],
			[270-188, 133],
			[82-16, 133-32],
			[66-20, 101],
			[46-16, 101-32]
		],
		bottomJagCoords: [
			[270, 133 + 8],
			[270, 141 + 28],
			[270 - 66, 169],
			[204 - 11, 169 + 18],
			[193 - 15, 187],
			[178 - 11, 187+18],
			[168, 205 + 105],
			[30, 310],
			[30, 310-105],
			[30+16, 205-32],
			[46+20, 173],
			[66+16, 173-32]
		],
		timerCoords: [
			[2000, 192],
			[1782, 192],
			[1782 - 24, 192 + 24],
			[1758, 216 + 42],
			[1758 + 42, 258 + 42],
			[2000, 258 + 42],
		],
		imageBorderCoords: [
			[198 + 4, 198 - 4],
			[198 - 4 + 1280, 198 - 4],
			[198 + 4 + 1280, 198 + 4],
			[198 + 4 + 1280, 198 - 4 + 720],
			[198 - 4 + 1280, 198 + 4 + 720],
			[198 + 4, 198 + 4 + 720],
			[198 - 4, 198 - 4 + 720],
			[198 - 4, 198 + 4]
		],
		infoBoxcoords: [
			[1134, 238],
			[1150 + 304, 238],
			[1150 + 304, 238 + 527],
			[1134, 238 + 527]
		]
	};

	
	this.FED = {
		destination: "rgb(135,125,66)",
		percentage: {
			width: 112,
			stops:[
				stop(0,"rgb(159,151,70)"),
				stop(1,"rgb(133,129,82)")
			]
		},
		background: [
			stop(0, "rgb( 16,16,16)"),
			stop(1, "rgb( 1,2,8)")
		],		
			
		box1: {
			width: 138,
			stops: [
				stop(0, "rgb(7,29,52)"),
				stop(1, "rgb(9,45,77)")
			]
		},
		jagBar: {
			width: 240,
			stops: [
				stop(0, "rgb(10,25,39)"),
				stop(1, "rgb(14,33,48)")
			]
		},
		loadBarRailBehind: {
			width: 561,
			stops: [
				stop(0, "rgb(20,32,48)"),
				stop(1, "rgb(22,35,54)")
			]
		},
		box2: {
			width: 138,
			stops: [
				stop(0, "rgb(48,43,13)"),
				stop(1, "rgb(70,63,19)")
			]
		},
		box3: {
			width: 138,
			stops: [
				stop(0, "rgb(14,50,86)"),
				stop(1, "rgb(26,68,126)")
			]
		},
		box4: {
			width: 138,
			stops: [
				stop(0, "rgb(19,29,38)"),
				stop(1, "rgb(19,41,65)")
			]
		},
		rightBars: {
			width: 1072,
			stops: [
				stop(0, "rgb(19,36,52)"),
				stop(1, "rgb(9,19,31)")
			]
		},
		timer: {
			width: 54,
			stops: [
				stop(0, "rgb(9,55,104)"),
				stop(1, "rgb(5,44,77)")
			]
		},
		loadSledMain: "rgb(19,62,104)",
		loadSledTopSliver: "rgb(21,38,58)",
		loadSledBottomSliver: "rgb(66,57,18)",
		loadBarRailTop: "rgb(19,36,52)",
		loadBarRailBottom: "rgb(20,39,56)",
		imageBorderStart: "rgb(21,38,58)",
		imageBorderStop: "rgb(17,23,35)",
		topJagCoords: [
			[30, 55 + 8],
			[30 + 138, 63],
			[168, 63 + 16],
			[168, 79 + 26, 168 + 26, 79 + 26 ],
			[204 + 66, 105],
			[270, 105 + 28],
			[270 - 173, 133],
			[97-67,133,97-67, 133-64]
		],
		bottomJagCoords: [
			[270, 133 + 8],
			[270, 141 + 28],
			[270 - 66, 169],
			[204 - 36, 169,204 - 36, 169 + 36],
			[168, 205 + 105],
			[168 - 138, 310],
			[30, 310 - 111],
			[30, 205 - 64,30 + 64, 205 - 64]
		],
		timerCoords: [
			[2000, 192],
			[1782, 192],
			[1782 - 24, 192,1782 - 24, 192 + 24],
			[1758, 216 + 42],
			[1758 + 42, 258 + 42],
			[2000, 258 + 42],
		],
		imageBorderCoords: [
			[198 - 4, 198 + 4],
			[198 - 4, 198 - 4, 198 + 4, 198 - 4],
			[198 - 4 + 1280, 198 - 4],
			[198 + 4 + 1280, 198 - 4, 198 + 4 + 1280, 198 + 4],
			[198 + 4 + 1280, 198 - 4 + 720],
			[198 + 4 + 1280, 198 + 4 + 720, 198 - 4 + 1280, 198 + 4 + 720],
			[198 + 4, 198 + 4 + 720],
			[198 - 4, 198 + 4 + 720, 198 - 4, 198 - 4 + 720]
		],
		infoBoxcoords: [
		
			[1150 - 16, 238 + 16],
			[1150 - 16, 238, 1150, 238],
			[1150 + 288, 238],
			[1150 + 288 + 16, 238, 1150 + 288 + 16, 238 + 16],
			[1150 + 288 + 16, 238 + 16 + 492],
			[1150 + 288 + 16, 238 + 32 + 492, 1150 + 288, 238 + 32 + 492],
			[1150, 238 + 32 + 492],
			[1150 - 16, 238 + 32 + 492, 1150 - 16, 238 + 16 + 492]
		]
	};


};