function Ball(canvas){
	var size = 5;
	var color=colorPallet[Math.floor(Math.random()*colorPallet.length)].color;
	var hp=100;
	var coords = new Vector(canvas.width/2, canvas.height/2);
	this.draw = function(ctx){
		ctx.fillStyle = color;
		ctx.strokeStyle = "#000";
		ctx.beginPath();
		ctx.arc(coords.x, coords.y, 0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();
	};
	this.step = function(){
		coords.x += coords.dx;
		if(coords.x < 0 || coords.x > canvas.width){
			coords.dx = -coords.dx;
			coords.x += coords.dx;
		}
		coords.y += coords.dy;
		if(coords.y < 0 || coords.y > canvas.height){
			coords.dy = -coords.dy;
			coords.y += coords.dy;
		}
	}
}

function Vector(x, y, dx, dy){
	this.x = x || 0;
	this.y = y || 0;
	this.dx = dx || (Math.random()<.5?-1:1) * Math.random()+2;
	this.dy = dy || (Math.random()<.5?-1:1) * Math.random()+2;
}

colorPallet = [
	{color:"#A10000", name:"rust"},
	{color:"#A25203", name:"bronze"},
	{color:"#A1A100", name:"gold"},
	{color:"#696969", name:"iron"},
	{color:"#F70000", name:"candy"},
	{color:"#658200", name:"lime"},
	{color:"#416600", name:"olive"},
	{color:"#008141", name:"jade"},
	{color:"#008282", name:"teal"},
	{color:"#004182", name:"cobalt"},
	{color:"#0021CB", name:"indigo"},
	{color:"#631DB4", name:"purple"},
	{color:"#6A006A", name:"violet"},
	{color:"#99004D", name:"fuschia"},
	{color:"#0715CD", name:"EB"},
	{color:"#B536DA", name:"TT"},
	{color:"#E00707", name:"TG"},
	{color:"#4AC925", name:"GG"},
	{color:"#00D5F2", name:"gg"},
	{color:"#1F9400", name:"gt"},
	{color:"#F2A400", name:"tt"},
	{color:"#FF6FF2", name:"tg"}
];