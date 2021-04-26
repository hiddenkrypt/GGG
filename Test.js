//test.js
function TestRig(){
	var self = {};
    var URLParams = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        URLParams[key] = value;
    });

	let screenSelect, urlTextBox;	
	self.init = function testRigInit(){	
		console.log("test rig init");
		if ( URLParams.test != 1 ){
			return;
		}
		
		setTimeout(function(){
			GameDetails( '', '', "de_deathcookin", '', '', "terrortown" );
		}, 1000);
		let controlPanel = document.createElement( "div" );
		controlPanel.style.position = "absolute";
		controlPanel.style.top = "1em";
		controlPanel.style.right = "1em";
		controlPanel.style.backgroundColor = "#fff";
		controlPanel.style.color = "#000";
		controlPanel.style.fontSize = "2em";
		controlPanel.style.fontFamily = "Courier, monospace";
		controlPanel.style.border = "2px black solid";
		
		screenSelect = document.createElement( "select" );
		loadingScreenDirectory.forEach( function(bg, i){
			var newOption = document.createElement("option");
			newOption.innerHTML = bg.credit + ":  " + bg.title;
			screenSelect.appendChild(newOption);
		});
		screenSelect.addEventListener( "input", selectBackground);
		controlPanel.appendChild( screenSelect );
		
		let screenLinkGenerator = document.createElement("div");
		screenLinkGenerator.innerHTML = "URL to Screen:";
		screenLinkGenerator.style.display = "block";
		urlTextBox = document.createElement("input");
		screenLinkGenerator.appendChild( urlTextBox );
		controlPanel.appendChild( screenLinkGenerator );
		
		let imageQuickTest = document.createElement("div");
		imageQuickTest.innerHTML = "Quick Image test:";
		imageQuickTest.style.display = "block";
		let imgSrc = document.createElement("input");
		imageQuickTest.appendChild( imgSrc );
		let imgLoadbutton = document.createElement("button");
		imgLoadbutton.innerHTML = "Load";
		imageQuickTest.appendChild( imgLoadbutton );
		controlPanel.appendChild( imageQuickTest );
		
		document.body.appendChild( controlPanel);
		
		ScreenEngine.loadScreenIndex(URLParams.screen);
		screenSelect.selectedIndex = URLParams.screen;
	}
	
	function selectBackground(){
		ScreenEngine.loadScreenIndex( screenSelect.selectedIndex );		
		urlTextBox.value = window.location.href.split("?")[0] + "?test=1&screen=" + screenSelect.selectedIndex;
	}

	function quickTest(){
		ScreenEngine.setBackground("url('" + urlTextBox.value + "')");
	}

	return self;
};