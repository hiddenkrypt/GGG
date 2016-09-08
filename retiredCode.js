//retiredCode.js
//not currently used, but kept for raisins.


/**
 * Feature detection script. Adds an element to the page to display the results
 * of a suite of feature detection tests
**/
function featureDetect(){
	var box = document.createElement('div');
	box.appendChild(document.createTextNode('--------TELL A PROGRAMMER--------'));
	box.appendChild(document.createElement('br'));
	box.style.float = 'right';
	box.style.background = "#ededed";
	box.style.fontSize = '2em';
	box.style.color = '#a10000';
	document.body.appendChild(box);
	var a = document.createElement('audio');
	var c = document.createElement('canvas');
	var v = document.createElement('video');


	var tests = [
		{name:"New Audio", test:function(){ return !!a.canPlayType; }},
		{name:"Audio MP3 playback", test:function(){ return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));}},
		{name:"Audio WAV playback", test:function(){ return !!(a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, '')); }},
		{name:"Audio OGG/Vorbis playback", test:function(){ return !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '')); }},
		{name:"New video", test:function(){ return !!v.canPlayType; }},
		{name:"Video WebM", test:function(){ return !!(v.canPlayType && v.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, '')); }},
		{name:"Video H.264", test:function(){ return !!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, '')); }},
		{name:"Canvas", test:function(){ return c; }},
		{name:"Canvas 2d Context", test:function(){ return c.getContext('2d'); }},
		{name:"Canvas webGL Context", test:function(){ return c.getContext('webgl'); }},
		{name:"Canvas text API", test:function(){ return c.getContext && typeof c.getContext('2d').fillText == 'function'; }},
		{name:"requestAnimationFrame found", test:function(){ return (typeof window.requestAnimFrame === 'function' ); }},
		{name:"webkit requestAnimationFrame found", test:function(){ return (typeof   window.webkitRequestAnimationFrame === 'function' ); }},
		{name:"mozilla requestAnimationFrame found", test:function(){ return (typeof window.mozRequestAnimationFrame === 'function' ); }},
		{name:"XHR", test:function(){ return !!(new XMLHttpRequest()); }},
		{name:"XHR crossdomain", test:function(){ return "withCredentials" in new XMLHttpRequest;}},
		{name:"WebSocket", test:function(){ return !!window.WebSocket; }},
		{name:"Session Storage", test:function(){
			try {
			  return 'sessionStorage' in window && window['sessionStorage'] !== null;
			} catch(e) {
			  return false;
			}
		}},
		{name:"Local Storage", test:function(){
			try {
			  return 'localStorage' in window && window['localStorage'] !== null;
			} catch(e) {
			  return false;
			}
		}},
		{name:"setTimeout (PENDING)", test:function(){
			setTimeout(function(){
				box.appendChild(document.createTextNode('TIMEOUT SUCCESS'));
				box.appendChild(document.createElement("br"));
			}, 300);
		}},
		{name:"setInterval (PENDING)", test:function(){
			var i = 0;
			var id = setInterval(function(){
				box.appendChild(document.createTextNode('INTERVAL SUCCESS MARK '+(i++)));
				box.appendChild(document.createElement("br"));
				if(i===3){
					clearInterval(id);
				}
			}, 300);
		}}
	];
	tests.forEach(function(e){
		box.appendChild(document.createTextNode(e.name + ":" + (e.test()?'pass':'fail')));
		box.appendChild(document.createElement("br"));
	}, 600);
}
