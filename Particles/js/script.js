(function() {
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

document.addEventListener('DOMContentLoaded', init);
//animate();

function init() {
    canvas = document.createElement( 'canvas' );
    canvas.id = 'screen';
    canvas.width = 512;
    canvas.height = 512;
    context = canvas.getContext( '2d' );
    document.body.appendChild( canvas );
    p = null;
    p = new ParticleSystem(canvas, { x: canvas.width/2, y: canvas.height/2}, 500);

    animate();
}

function animate(){
    requestAnimFrame(animate);
    render();
}



function render() {
	canvas.width = 512;
	p.update();
}
})();
