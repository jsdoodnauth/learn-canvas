

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
}

function animate(){
    requestAnimFrame(animate);
    render();
}



function render() {
	context.beginPath();
	context.rect(150,150,200,200);
	context.fillStyle = 'red';
	context.fill();
	context.lineWidth = 7;
	context.strokeStyle = 'black';
	context.stroke();
}
