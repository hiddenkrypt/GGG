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
var loadingScreenDirectory = [{
        url: "http://i.imgur.com/J0zYUX2.png",
        title: "The Original",
        credit: "Brett"
    }, {
        url: "http://i.imgur.com/sDYG7yd.png",
        title: "Sweet Skins and Hella Mods",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/lmMNbwD.png",
        title: "MLG",
        credit: "Mike"
    }, {
        url: "http://i.imgur.com/7q6bIB0.png",
        title: "/u/",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/Zex9uqR.png",
        title: "Terrorist Town Gazette 01-01",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/AmDjSaW.jpg",
        title: "Safety Record",
        credit: "Brett"
    }, {
        url: "http://i.imgur.com/qkV5qT9.jpg",
        title: "Atlas Park",
        credit: "Matt"
    }, {
        url: "http://i.imgur.com/rP04dbU.jpg",
        title: "Winners",
        credit: "Mike, Ada"
    }, {
        url: "http://i.imgur.com/FgbK3qI.jpg",
        title: "Damage Control",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/vvmlkuv.png",
        title: "Postcards",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/yFbdPTn.png",
        title: "Don't Forget:",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/lrmn5ek.png",
        title: "Badmins",
        credit: "Jason"
    }, {
        url: "http://i.imgur.com/pMCeOiw.png",
        title: "Minimal",
        credit: "Mike, Ada"
    }, {
        url: "http://i.imgur.com/3bBK6Fc.jpg",
        title: "No Fun",
        credit: "Brett"
    }, {
        url: "http://i.imgur.com/0RDXGqs.jpg",
        title: "Always Sunny in Terrortown",
        credit: "Brett",
        trigger: SpecialEvents.sunny
    }, {
        url: "http://i.imgur.com/XUVcFQx.jpg",
        title: "ERROR",
        credit: "Ada",
        trigger: SpecialEvents.indexError
    }, {
        url: "http://i.imgur.com/s65Yr86.png",
        title: "components",
        credit: "Ada, Ken"
    }, {
        url: "http://i.imgur.com/IEosSyF.png",
        title: "SuperNERD",
        credit: "Ada, Ken"
    }, {
        url: "http://i.imgur.com/CtRAxUR.png",
        title: "Stranger Salts",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/5qeoapz.png",
        title: "VACB&",
        credit: "Ada",
        trigger: SpecialEvents.hide
    }, {
        url: "http://i.imgur.com/BAfpoOo.gif",
        title: "The furry cometh",
        credit: "Ada",
        trigger: SpecialEvents.loading
    }, {
        url: "http://i.imgur.com/KwlQODl.jpg",
        title: "WHYFIRE",
        credit: "Brett"
    }, {
        url: "http://i.imgur.com/DvWDePs.png",
        title: "Virtual Betrayal",
        credit: "Matt"
    }, {
        url: "http://i.imgur.com/IYKrQm8.png",
        title: "Owlturd",
        credit: "Ada"
    }, {
        url: "http://i.imgur.com/XZmYKvQ.png",
        title: "'Hot'",
        credit: "Ada"
    }, {
        url: "",
        title: "spooky",
        credit: "Ada",
        trigger: SpecialEvents.spooky
    }, {
        url: "https://i.imgur.com/VfkZWw6.png",
        title: "buttsy",
        credit: "Brett, Ada"
    }, {
        url: "https://imgur.com/5gQwuh8.png",
        title: "Snek wit hat",
        credit: "cards against humanity"
    }, {
        url: "https://i.imgur.com/GtvYSKc.jpg",
        title: "Just Monika",
        credit: "Mike"
    }, {
        url: "https://i.imgur.com/FP1VMYO.png",
        title: "Danke Memes",
        credit: "Ada"
    }, {
        url: "https://i.imgur.com/g0jiA9E.png",
        title: "No grils",
        credit: "Ada"
    }, {
        url: "https://i.imgur.com/aHFnCvV.png",
        title: "later virgins",
        credit: "Ada"
    }, {
        url: "",
        title: "GGG CAH",
        credit: "Ada's 1337 coding",
        trigger: SpecialEvents.loadCards
    }, {
        url: "",
        title: "STOloader",
        credit: "Cryptic Games / Ada's 1337 coding",
        trigger: SpecialEvents.sto
    }
];



var taglineDirectory = [
	"Extra Crispy",
	"Special Edition",
	"Enhanced Edition",
	"GOTY Edition",
	"HD Remix",
	"Super Gmod 64",
	"Too many mods edition",
	"Even More Mods Edition",
	"brough to you by BAST",
	"Communism will win",
	"Newgame+",
	"waifu simulator",
	"if ttt2 is so good why isn't there a ttt3?",	
	"Powered by: a lesbian",	
	"on bast.ddns.net",	
	"the revival",	
	"the return",	
	"the revenge of the gent",	
	"2: electric boogaloo",	
	"episode 2",
	"I liek turtles",
	"hello mineturtle",
	"felicia's floating corpse",
	"Okay so like, when I was developing this server<br>	and testing things out, I kept forgetting to put a<br>	password on it, right? And the server would be up <br>	for hours as I manually added skins to the pointshop <br>	and stuff. So, at least five times, someone connected <br>	to the server. They sat through the 8Gb download and <br>	connected. Only for me to realize and freak out, <br>	shutting down the server without even talking to them.<br><br>	RIP to those people I guess. <br>Like, F in the chat for their lost time.",
	"are we really doing this again?",
	"Advanced third edition",
	"Remastered",
	"Second Impact",
	"The end is nigh",
	"̂ ͈̻̞̅ͤ̊̒̋ͯZ̼̼͎̜̾͐̔̚̚a͖̙̹̘̟͍͔͆ͨl̗̳̪̤͋ͫ́̆ͬĝ̜̗͎͚̜̠̈́o̦̫̘̔̓̽ͬ ̻̠̊̓̈ͅ",
	"It's fine.",
	"This is fine.",
	"Look, it's... <i>okay</i>.",
	"what do you want from me",
	"book 2 of <i>The bloodtower patriot</i> series",
	"The FBI killed fred hampton",
	"the cia did bolivia",
	"by karl marx",
	"episode 2: the phantom shotgundick",
	"Now with lootboxes",
	"<span style='color:#008141'>this is the rare shiney tagline</span>",
	"Read Homestuck",
	"dont read homestuck",
	"Are we the baddies?",
	"a better love story than <i>twilight</i>",
	"Black Lives Matter",
	"trans lives matter",
	"trans rights",
	"with fries and a medium shake for only 4$",
	"Gluten free and vegetarian friendly",
	"never gonna give you up",
	"don't stop us now",
	"installing script errors",
	"too many verticies",
	"tell a programmer",
	"make it so",
	"the complete vhs boxset",
	"Vol. 2",
	"The second one",
	"you never asked for this",
	"lorem ipsum dolor sit amet",
	"bet you never had this many thumbs in your mouth",
	"Back 2 tha hood",
	"2 ggg, 2 ttt",
	"First Blood Part II",
	"the quickening",
	"the good stuff",
	"teeth teeth teeth teeth",
	"We playing minecraft again?",
	"how long do you think this will last",
	"the power of fluffy boys",
	"the power of mean girls",
	"the power of thigh highs",
	"{old meme}",
	"{dated reference}",
	"see you space cowboy",
	"you're gonna carry that weight",
	"Eat the rich",
	"filled with determination",
	"yeet",
	"nice",
	"drink deep, and decend",
	"that gum you like is coming back in style",
	"what year is it",
	"damn fine coffee",
	"homura did nothing wrong",
	"don't split the party",
	"geek the mage first",
	"stay alert, trust no one, keep  your laser handy",
	"unless it's a farm",
	"a lovely bunch of coconuts",
	"how do i shot traitors",
	"it goes it goes it goes it goes it goes ",
	"is that a boot please just be a boot",
	"i need more taglines",
	"Calculation Terminated. Shut up and go in peace.",
	"WARNING! desires are never fulfilled Nor quenched.",
	"Cat.",
	"Uncaught cringeOverflowException: <br>|-->reference too dated / obscure",
	"I am hilarious<br>and you will quote everything I say",
	"tell no one",
	"OwO wuts this",
	"*notices bulge*",
	"here we are in the future",
	"is that a weapon",
	"goes where no ordinary rabbit would dare",
	"watch out for hypothermia",
	"welcome to the shitshow",
	"3d6 Fire damage, DC15 reflex save for half",
	"this is my hole",
	"punk as fuck",
	"the weapon of choice",
	"get out of here stalker",
	"cheeki breeki",
	"engage",
	"brought to you by raid: shadowlegends",
	"that's my purse; i don't know you",
	"the best of times<br>the blurst of times",
	"do ya like jazz?",
	"now with jetskis",
	"Enjoy your salt",
	"good times",
	"sup fuckers",
	"medically necessary",
	"fully repoopulated",
	"check with your doctor to see if <br>GGG is right for you",
	"now you're playing with power",
	"does what ninten<i>don't</i>",
	"draw 4 wild",
	"tap to gain 2 mana",
	"+25 Exp",
	"reticulating splines",
	"open the door<br>get on the floor",
	"gotta light?",
	"are in your room and touching your stuff",
	"follow the sexy robot",
	"live laugh love",
	"now free from infection",
	"kinda gay tbh",
	"3 days since the last accident",
	"generally considered non-fatal",
	"your trusted name in gaming",
	"we're all dying",
	"the planet is burning",
	"ACAB",
	"yes all men",
	"some people",
	"don't believe the rumors about the curse",
	"Buy our NFTs",
	"this loading screen is mining bitcoins rn",
	"we got your back",
	"you can trust us",
	"irony levels critical",
	"salt containment failure detected",
	"jimmies 67% ruffled",
	"gone wild",
	"the top 1% of rattatas",
	"not even the bottom of the barrel",
	"diggy diggy hole",
	"dangerously cheesy",
	"loading screens look best at 1080p",
	"the audacity",
	"beeschurger",
	"charming",
	"BE IMPRESSED",
	"",
	"",
	"",
	"",
]; //-160