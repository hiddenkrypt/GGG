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
        url: "TheOriginal.png",
        title: "The Original",
        credit: "Brett"
    }, {
        url: "SweetSkinsandHellaMods.png",
        title: "Sweet Skins and Hella Mods",
        credit: "Ada"
    }, {
        url: "MLG.png",
        title: "MLG",
        credit: "Mike"
    }, {
        url: "u.png",
        title: "/u/",
        credit: "Ada"
    }, {
        url: "TerroristTownGazette0101.png",
        title: "Terrorist Town Gazette 01-01",
        credit: "Ada"
    }, {
        url: "SafetyRecord.jpg",
        title: "Safety Record",
        credit: "Brett"
    }, {
        url: "AtlasPark.jpg",
        title: "Atlas Park",
        credit: "Matt"
    }, {
        url: "Winners.jpg",
        title: "Winners",
        credit: "Mike, Ada"
    }, {
        url: "DamageControl.jpg",
        title: "Damage Control",
        credit: "Ada"
    }, {
        url: "Postcards.png",
        title: "Postcards",
        credit: "Ada"
    }, {
        url: "DontForget.png",
        title: "Don't Forget:",
        credit: "Ada"
    }, {
        url: "Badmins.png",
        title: "Badmins",
        credit: "Jason"
    }, {
        url: "Minimal.png",
        title: "Minimal",
        credit: "Mike, Ada"
    }, {
        url: "NoFun.jpg",
        title: "No Fun",
        credit: "Brett"
    }, {
        url: "AlwaysSunnyinTerrortown.jpg",
        title: "Always Sunny in Terrortown",
        credit: "Brett",
        trigger: SpecialEvents.sunny
    }, {
        url: "ERROR.jpg",
        title: "ERROR",
        credit: "Ada",
        trigger: SpecialEvents.indexError
    }, {
        url: "Components.png",
        title: "Components",
        credit: "Ada, Ken"
    }, {
        url: "SuperNERD.png",
        title: "SuperNERD",
        credit: "Ada, Ken"
    }, {
        url: "StrangerSalts.png",
        title: "Stranger Salts",
        credit: "Ada"
    }, {
        url: "VACB.png",
        title: "VACB&",
        credit: "Ada",
        trigger: SpecialEvents.hide
    }, {
        url: "Thefurrycometh.gif",
        title: "The furry cometh",
        credit: "Ada",
        trigger: SpecialEvents.loading
    }, {
        // url: "http://i.imgur.com/KwlQODl.jpg",
        // title: "WHYFIRE",
        // credit: "Brett"
    // }, {
        // url: "http://i.imgur.com/DvWDePs.png",
        // title: "Virtual Betrayal",
        // credit: "Matt"
    // }, {
        // url: "http://i.imgur.com/IYKrQm8.png",
        // title: "Owlturd",
        // credit: "Ada"
    // }, {
        // url: "http://i.imgur.com/XZmYKvQ.png",
        // title: "'Hot'",
        // credit: "Ada"
    // }, {
        url: "",
        title: "Sspooky",
        credit: "Ada",
        trigger: SpecialEvents.spooky
    }, {
        url: "Buttsy.png",
        title: "Buttsy",
        credit: "Ada, Brett"
    }, {
        url: "Snekwithat.jpg",
        title: "Snek wit hat",
        credit: "cards against humanity"
    }, {
        url: "JustMonika.jpg",
        title: "Just Monika",
        credit: "Mike"
    }, {
        url: "DankeMemes.png",
        title: "Danke Memes",
        credit: "Ada"
    }, {
        url: "Nogrils.png",
        title: "No grils",
        credit: "Ada"
    }, {
        url: "LaterVirgins.png",
        title: "Later Virgins",
        credit: "Ada"
    }, {
        url: "",
        title: "GGG CAH",
        credit: "Ada",
        trigger: SpecialEvents.loadCards
    }, {
        url: "",
        title: "GGG CAH",
        credit: "Ada",
        trigger: SpecialEvents.loadCards
    }, {
        url: "",
        title: "GGG CAH",
        credit: "Ada",
        trigger: SpecialEvents.loadCards
    }, {
        url: "",
        title: "GGG CAH",
        credit: "Ada",
        trigger: SpecialEvents.loadCards
    }, {
        url: "",
        title: "Star Trek Online Loading Screen: random",
        credit: "Cryptic Games, recreated by Ada",
        trigger: SpecialEvents.sto
    }, {
        url: "",
        title: "Star Trek Online Loading Screen: random",
        credit: "Cryptic Games, recreated by Ada",
        trigger: SpecialEvents.sto
    }, {
        url: "BearJesus.png",
        title: "Bear Jesus",
        credit: "Ada",
    }, {
        url: "DumpsterFire.png",
        title: "Dumpster Fire",
        credit: "Ada",
    }, {
        url: "Onefearbutitsabiggun.png",
        title: "One fear, but it's a biggun",
        credit: "Ada"
    }, {
        url: "Blowthesenerds.png",
        title: "Blow these nerds",
        credit: "Ada"
    }, {
        url: "BreakingNews.png",
        title: "Breaking News",
        credit: "Mike"
    }, {
        url: "GGGtheMovie.png",
        title: "GGG the Movie",
        credit: "Ada"
    }
];