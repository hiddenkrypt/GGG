//STOData.js
let stoData = (function () {

    function stop(position, color) {
        return {
            position: position,
            color: color
        };
    }

    return {
		textBlob: [
			"The Borg, Thollians, Nah'kul,",
			"Elachi, and Tzenkethi are all a",
			"little bit sus right now. Join",
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
		],
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
                [1150 + 288 + 16, 238 + 16 + 488],
                [1150 + 288, 238 + 32 + 488],
                [1150, 238 + 32 + 488],
                [1150 - 16, 238 + 16 + 488],
                [1150 - 16, 238 + 16]
            ]
        }
    };
})();
