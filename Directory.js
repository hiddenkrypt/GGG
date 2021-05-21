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
        title: "Components",
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
        title: "Sspooky",
        credit: "Ada",
        trigger: SpecialEvents.spooky
    }, {
        url: "https://i.imgur.com/VfkZWw6.png",
        title: "Buttsy",
        credit: "Ada, Brett"
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
        title: "Later Virgins",
        credit: "Ada"
    }, {
        url: "",
        title: "GGG CAH",
        credit: "Ada",
        trigger: SpecialEvents.loadCards
    }, {
        url: "",
        title: "Star Trek Online Loading Screen",
        credit: "Cryptic Games, recreated by Ada",
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
    "Brough to you by BAST",
    "Communism Will Win",
    "Newgame+",
    "Waifu Simulator",
    "If TTT2 is so good why isn't there a TTT3?",
    "Powered by: a lesbian",
    "on bast.ddns.net",
    "The Revival",
    "The Return",
    "The Revenge of the gent",
    "2: Electric Boogaloo",
    "Episode 2",
    "I liek turtles",
    "Hello mineturtle",
    "Felicia's floating corpse",
    "Okay so like, when I was developing this server<br>	and testing things out, I kept forgetting to put a<br>	password on it, right? And the server would be up <br>	for hours as I manually added skins to the pointshop <br>	and stuff. So, at least five times, someone connected <br>	to the server. They sat through the 8Gb download and <br>	connected. Only for me to realize and freak out, <br>	shutting down the server without even talking to them.<br><br>	RIP to those people I guess. <br>Like, F in the chat for their lost time.",
    "Are we really doing this again?",
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
    "The cia did Bolivia",
    "by Karl Marx",
    "Episode 2: The Phantom Shotgundick",
    "Now with lootboxes",
    "<span style='color:#008141'>this is the rare shiney tagline</span>",
    "Read Homestuck",
    "Dont read homestuck",
    "Are we the baddies?",
    "A better love story than <i>twilight</i>",
    "Black Lives Matter",
    "Trans lives matter",
    "Trans rights",
    "With fries and a medium shake for only 4$",
    "Gluten free and vegetarian friendly",
    "Never gonna give you up",
    "Don't stop us now",
    "Installing script errors",
    "Too many verticies",
    "Tell a programmer",
    "Make it so",
    "The complete vhs boxset",
    "Vol. 2",
    "The second one",
    "You never asked for this",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum douchebag sit amet",
    "Bet you never had this many thumbs in your mouth",
    "Back 2 tha hood",
    "2 GGG, 2 TTT",
    "First Blood Part II",
    "The Quickening",
    "The good stuff",
    "Teeth Teeth Teeth Teeth",
    "Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth Teeth",
    "We playing minecraft again?",
    "How long do you think this will last",
    "The power of fluffy boys",
    "The power of mean girls",
    "The power of thigh highs",
    "{Old_Meme}",
    "{Dated_Reference}",
    "See you space cowboy",
    "You're gonna carry that weight",
    "Eat the rich",
    "Yeet the rich",
    "Filled with determination",
    "Ya-Yeet",
    "Nice",
    "Drink deep, and decend",
    "That gum you like is coming back in style",
    "What year is it",
    "Damn fine coffee",
    "Homura did nothing wrong",
    "Don't split the party",
    "Geek the mage first",
    "Stay alert, trust no one, keep  your laser handy",
    "Unless it's a farm",
    "A lovely bunch of coconuts",
    "How do i shot traitors",
    "It Goes It Goes It Goes It Goes It Goes",
    "Is that a boot please just be a boot",
    "I need more taglines",
    "Calculation Terminated. Shut up and go in peace.",
    "WARNING! Desires are never fulfilled Nor quenched.",
    "Cat.",
    "Uncaught cringeOverflowException: <br>|--> Reference too dated / obscure",
    "I am hilarious<br>and you will quote everything I say",
    "Tell no one",
    "OwO wuts this",
    "*notices bulge*",
    "Here we are in the future",
    "Is that a weapon",
    "Goes where no ordinary rabbit would dare",
    "Watch out for hypothermia",
    "Welcome to the shitshow",
    "3d6 fire damage, DC15 reflex save for half",
    "This is my hole",
    "Punk as fuck",
    "The weapon of choice",
    "Get out of here stalker",
    "Cheeki Breeki",
    "Engage",
    "Brought to you by raid: shadowlegends",
    "That's my purse; i don't know you",
    "The best of times<br>the blurst of times",
    "Do ya like jazz?",
    "Now with jetskis",
    "Enjoy your salt",
    "Good times",
    "Sup fuckers",
    "Medically necessary",
    "Fully repoopulated",
    "Check with your doctor to see if <br>GGG is right for you",
    "Now you're playing with power",
    "Does what ninten<i>don't</i>",
    "Draw 4 wild",
    "Tap to gain 2 mana",
    "+25 Exp",
    "Reticulating Splines",
    "Open the door<br>get on the floor",
    "Gotta light?",
    "Are in your room and touching your stuff",
    "Follow the sexy robot",
    "Live Laugh Love",
    "Now totally free from infection",
    "Kinda gay tbh",
    "3 days since the last accident",
    "Generally considered non-fatal",
    "Your trusted name in gaming",
    "We're all dying",
    "The planet is burning",
    "ACAB",
    "Yes, all men",
    "'Some People'",
    "Don't believe the rumors about the curse",
    "This loading screen is mining bitcoins rn",
    "Buy our NFTs",
    "We got your back",
    "You can trust us",
    "Irony levels critical",
    "Salt containment failure detected",
    "Jimmies 67% ruffled",
    "Gone Wild",
    "The top 1% of rattatas",
    "Not even the bottom of the barrel",
    "Diggy diggy hole",
    "Dangerously cheesy",
    "Loading screens look best at 1080p",
    "The Audacity",
    "Beeschurger",
    "Charming",
    "BE IMPRESSED",
    "Jesus christ you people",
    "Password tuesday",
    "No fun allowed",
    "Bash the fash",
    "I <i>-am-</i> going to fuck this up",
    "Israel is an apartheid State",
    "Solidarity forever",
    "Whoops I've gone all political again",
    "In the summer, I bring a bag of banana chowder",
    "Follow Boto on twitch @boto66y",
    "Follow TTF on twitch @twintail_fox",
    "Follow Dax on twitch @DaxStrife",
    "Follow TTF on youtube at TwintailFox",
    "Follow ada on youtube at 0x0ada",
    "Follow Rayde on youtube at ShiningRayde",
    "Comment Like and Subscribe",
    "This is your Red Flag",
    "A-one, a-two, a-one two three four-",
    "You should probably get tested",
    "Take no more than twice daily",
    "Mom says it's my turn on the loading screen",
    "A percieved fundimental",
    "You've been seen with birds. Farm birds.",
    "Our name is a Killing Word",
    "The Sleeper has awoken",
    "Error; your version of minecraft is not<br> compatible with the servers version",
    "Red leader standing by",
    "We're boned",
    "Live, from a society",
    "Light up the Night",
    "I can live with that",
    "<i>Maoism intensifies</i>",
    "Statistically, someone in the game is naked right now",
    "So it goes",
    "Cash Rules Everything Around Me",
    "Ain't nothing to fuck with",
    "Can ride our bikes with no handlebars",
    "Please hold for the next available representative",
    "Low Battery",
    "Hey Adora",
    "Dirty deeds, done dirt cheap",
    "Rule 1: Clean your room.<br>Rule 2: Sit up straight.<br>Rule 3: Something about Lobsters?<br>Rule 4: All women are agents of the Chaos Dragon",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]; //-160
