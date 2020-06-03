define(['./obstacle'], function(Obstacle) {
	class LeftBorder extends Obstacle {
		constructor() {
			super(null);
		}
		
		getNextCollision(ball) {
			if (ball.speedx < 0) {
				return {
					time: (ball.radius - ball.x) * 1000 / ball.speedx + ball.starttime,
					speedx: -ball.speedx,
					speedy: ball.speedy
				}
			}
			
			return null;
		}
		
	}
	
	return LeftBorder;
});