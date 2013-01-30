
var VELOCITY = 10;
var GRAVITY = 0.9;
var FRICTION = 0.3;

var Particle = function(x, y, vx, vy) {
	this.x = x || 0;
	this.y = y || 0;
	this.vx = vx || 0;
	this.vy = vy || 0;
	this.colors = ["#222222", "#555555", "#777777"];
	this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
	this.size = Math.random()+1;

	this.update = function(vx, vy) {
		vx = vx || 0;
		vy = vy || 0;

		this.x += this.vx + vx - FRICTION;
		this.y += this.vy + vy + GRAVITY;
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
		var x = Math.random()*(this.center.x*2),
		    y = 1,
		  //y = this.center.y,
		   vx = Math.random() * 3 - 1.5,
		   vy = Math.random() * 3 - 1.5;
		
		this.particles.push(new Particle(x,y,vx,vy));
	}
	
	this.drawFromCenter = function() {
		for (i=0; i < count; ++i) {
			//Don't process off canvas particles
			if (this.particles[i].x > 0 && this.particles[i].x < container.width && this.particles[i].y > -20 && this.particles[i].y < container.height && this.particles[i].size < 50) {
				this.particles[i].update();
				c.fillStyle = this.particles[i].color;
				c.beginPath();
				c.arc(this.particles[i].x, this.particles[i].y, this.particles[i].size, 0, Math.PI*2, false);
				c.closePath();
				c.fill();	
				
			}
			else {
				if ((this.particles[i].x+this.particles[i].size) <= 0 || (this.particles[i].x-this.particles[i].size) >= container.width) {
				this.particles[i].vx *= -1;
				}
				else {
				this.particles[i].x = Math.random()*(this.center.x * 2);
				this.particles[i].y = -5;
				this.particles[i].size = Math.random()+1;
				this.particles[i].vx = Math.random() * 3 - 1.5;
				this.particles[i].vy = Math.random() * 3 - 1.5;
				}
			}
		}
	}
	this.drawRain = function() {
		for (i=0; i < count; ++i) {
			if (this.particles[i].x > 0 && this.particles[i].x < container.width && this.particles[i].y > 0 && this.particles[i].y < container.height) {
				
			}
			else {
			}
		}
	}
};	

