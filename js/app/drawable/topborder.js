define(['./obstacle'], function(Obstacle) {
	class TopBorder extends Obstacle {
		constructor() {
			super(null);
		}
		
		getNextCollision(ball) {
			if (ball.speedy < 0) {
				return {
					time: (ball.radius - ball.y) * 1000 / ball.speedy + ball.starttime,
					speedx: ball.speedx,
					speedy: -ball.speedy
				}
			}
			
			return null;
		}
		
	}
	
	return TopBorder;
});