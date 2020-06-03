define(['app/constants', './obstacle', '../soundpool'], function(constants, Obstacle, SoundPool) {
	
	const extraballsound = new SoundPool("sounds/newball.wav", .2, 10);
	
	class ExtraBall extends Obstacle{
		constructor(ctx, x, y, radius, length, space, lineWidth) {
			super(ctx);
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.length = length;
			this.space = space;
			this.lineWidth = lineWidth;
			this.deleted = false;
			this.extradius = 0;
		}
		
		nextLevel(game) {
			this.clear();
			this.y += this.length + this.space;
			if(this.y > this.space + (this.length + this.space)*(constants.blockpercol+1))  {
				this.deleted = true;
			}
			return !this.deleted;
		}
		
		getNextCollision(ball) {
			if(!this.deleted) {
				let time = ball.getCollisionTime(this.x, this.y, ball.radius + 2*this.radius);
				if(time !== null && time >= ball.starttime) {
					return {
						time: time,
						speedx: ball.speedx,
						speedy: ball.speedy
					}
				}
			}
			return null;
		}
		
		processCollision(game) {
			if(!this.deleted) {
				this.clear();
				this.deleted = true;
				game.ballCount++;
				extraballsound.play();
			}
		}
		
		clear() {
			this.ctx.clearRect(this.x-this.length/2, this.y-this.length/2, this.length, this.length);
		}
		
		draw(time) {
			if(!this.deleted) {
				let extradius = this.radius + Math.floor(this.radius*((Math.cos(time/50)/4)+1));
				
				if(extradius !== this.extradius) {
					this.clear();			
					
					this.ctx.save();
					this.ctx.strokeStyle = "rgb(255,255,255)";
					this.ctx.lineWidth = this.lineWidth;
					this.ctx.beginPath();
					this.ctx.arc(this.x, this.y, extradius, 0, Math.PI * 2, true);
					this.ctx.stroke();
					this.ctx.restore();
					
					this.ctx.fillStyle = "rgb(255,255,255)";				
					this.ctx.beginPath();
					this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
					this.ctx.fill();
					
					this.extradius = extradius;
				}
			}
		}
	}
	
	return ExtraBall;
});