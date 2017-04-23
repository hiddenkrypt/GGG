/** Directory.js **
 * An array of all loading screens.
 * Loading Screen objects meet the following schema:
 * {
 *	url: <string> a full url to an image file
 *	title: <string> a The title of this screen
 *	credit: <string> The author(s)/creator(s) of the screen
 *	trigger: <function, optional> an optional callback function for
 *			 Special Events. This function should be in SpecialEvents.js
 * }
**/
var loadingScreenDirectory = [
	{
		url: "http://i.imgur.com/J0zYUX2.png",
		title: "The Original",
        credit: "Brett"
	},
    {
		url: "http://i.imgur.com/sDYG7yd.png",
		title: "Sweet Skins and Hella Mods",
        credit: "Rav-T"
	},
    {
		url: "http://i.imgur.com/lmMNbwD.png",
		title: "MLG",
        credit: "Mike"
	},
    {
		url: "http://i.imgur.com/7q6bIB0.png",
		title: "/u/",
        credit: "Rav-T"
	},
    {
		url: "http://i.imgur.com/Zex9uqR.png",
		title: "Terrorist Town Gazette 01-01",
        credit: "Rav-T"
	},
    {
		url: "http://i.imgur.com/AmDjSaW.jpg",
		title: "Safety Record",
        credit: "Brett"
	},
    {
		url: "http://i.imgur.com/qkV5qT9.jpg",
		title: "Atlas Park",
        credit: "Matt"
	},
    {
		url: "http://i.imgur.com/rP04dbU.jpg",
		title: "Winners",
        credit: "Mike, Rav-T"
	},
    {
		url: "http://i.imgur.com/FgbK3qI.jpg",
		title: "Damage Control",
        credit: "Rav-T"
	},
    {
		url: "http://i.imgur.com/vvmlkuv.png",
		title: "Postcards",
        credit: "Rav-T"
	},
    {
		url: "http://i.imgur.com/yFbdPTn.png",
		title: "Don't Forget:",
        credit: "Rav-T"
	},
    {
		url: "http://i.imgur.com/lrmn5ek.png",
		title: "Badmins",
        credit: "Jason"
	},
    {
		url: "http://i.imgur.com/pMCeOiw.png",
		title: "Minimal",
        credit: "Mike, Rav-T"
	},
    {
		url: "http://i.imgur.com/3bBK6Fc.jpg",
		title: "No Fun",
        credit: "Brett"
	},
    {
		url: "http://i.imgur.com/0RDXGqs.jpg",
		title: "Always Sunny in Terrortown",
        credit: "Brett",
        trigger: SpecialEvents.sunny
    },
	{
		url: "http://i.imgur.com/XUVcFQx.jpg",
		title: "ERROR",
		credit: "Rav-T",
		trigger: SpecialEvents.indexError
    },
	{
		url: "http://i.imgur.com/pMCeOiw.png",
		title: "Bouncyballs",
		credit: "Rav-T",
		trigger: SpecialEvents.snow
	},
	{
		url:"http://i.imgur.com/s65Yr86.png",
		title:"components",
		credit:"Rav-T, Ken"
	},
	{
		url: "http://i.imgur.com/IEosSyF.png",
		title: "SuperNERD",
		credit: "Rav-T, Ken"
	},
	{
		url: "http://i.imgur.com/CtRAxUR.png",
		title: "Stranger Salts",
		credit: "Rav-T"
	},
	{
		url: "http://i.imgur.com/5qeoapz.png",
		title: "VACB&",
		credit: "Rav-T",
		trigger: SpecialEvents.hide
	},
	{
		url:"https://i.imgur.com/bBpVw2u.gif",
		title: "Corgi Loadin",
		credit: "Rav-T",
		trigger: SpecialEvents.loading
	}

];
