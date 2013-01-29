var Rectangle = {
	x: 10,
	y: 10,
	dx: 4,
	dy: 4,
	vx: 1,
	vy: 2,
	rate: 2,
	color: 'Red',
	moveRect: function() {
		if ((this.dx - this.rate) < 0 || (this.dx + this.rate) > canvas.width) {
			this.vx = -1 * this.vx;
		} 
		if ((this.dy - this.rate) < 0 || (this.dy + this.rate) > canvas.height) {
			this.vy = -1 * this.vy;
		}
		this.dx += this.vx;
		this.dy += this.vy;	
		this.drawme();
	},
	drawme: function() {
		context.rect(this.dx,this.dy,this.x,this.y);
		context.fillStyle = this.color;	
	}
};
var drawRect;
var draw2;

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };
})();

init();
animate();

function init() {
    canvas = document.createElement( 'canvas' );
    canvas.id = 'screen';
    canvas.width = 512;
    canvas.height = 512;
    context = canvas.getContext( '2d' );
    document.body.appendChild( canvas );
    drawRect = Object.create(Rectangle);
    drawRect.color = 'Red';
    draw2 = Object.create(Rectangle);
    draw2.color = 'Blue';
    draw2.x = 20;
    draw2.y = 20;
    draw2.vx = 20;
    draw2.vy = 15;
}

function animate(){
    requestAnimFrame(animate);
    render();
}



function render() {
	//canvas.width = 512;
	context.beginPath();
	//context.rect(drawRect.vx,drawRect.vy,drawRect.x,drawRect.y);
	drawRect.moveRect();
	draw2.moveRect();	
	context.fill();
}
