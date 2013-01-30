
var Particle = function(x, y, vx, vy) {
	this.x = x || 0;
	this.y = y || 0;
	this.vx = vx || 0;
	this.vy = vy || 0;
	this.colors = ["#222222", "#555555", "#777777"];
	this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
	this.size = 0;

	this.update = function(vx, vy) {
		vx = vx || 0;
		vy = vy || 0;

		this.x += this.vx + vx;
		this.y += this.vy + vy;
	};
};

var ParticleSystem = function(container, center, count) {
	var i = 0,
		c = container.getContext('2d');
	count = count || 0;
	this.particles = [];

	this.center = {
		x: center.x || 0,
		y: center.y || 0
	};

	//Initialization
	for ( ; i < count; ++i) {
		var x = this.center.x,
		    y = this.center.y,
		   vx = Math.random() * 3 - 1.5,
		   vy = Math.random() * 3 - 1.5;
		
		this.particles.push(new Particle(x,y,vx,vy));
	}
	
	this.update = function() {
		for (i=0; i < count; ++i) {
			//Don't process off canvas particles
			if (this.particles[i].x > 0 && this.particles[i].x < container.width && this.particles[i].y > 0 && this.particles[i].y < container.height && this.particles[i].size < 50) {
				this.particles[i].update();
				c.fillStyle = this.particles[i].color;
				c.beginPath();
				c.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, Math.PI*2, false);
				c.closePath();
				c.fill();	
				this.particles[i].size += Math.random()/10;
			}
			else {
				this.particles[i].x = this.center.x;
				this.particles[i].y = this.center.y;
				this.particles[i].size = 0;
			}
	}
	}
};	

