define(['./obstacle'], function(Obstacle) {
	class RightBorder extends Obstacle {
		constructor(x) {
			super(null);
			this.x = x;
		}
		
		getNextCollision(ball) {
			if (ball.speedx > 0) {
				return {
					time: (this.x - ball.radius - ball.x) * 1000 / ball.speedx + ball.starttime,
					speedx: -ball.speedx,
					speedy: ball.speedy
				}
			}
			
			return null;
		}
		
	}
	
	return RightBorder;
});