define(['./obstacle'], function(Obstacle) {
	class BottomBorder extends Obstacle {
		constructor(y) {
			super(null);
			this.y = y;
		}
		
		getNextCollision(ball) {
			if (ball.speedy > 0) {
				return {
					time: (this.y - ball.radius - ball.y) * 1000 / ball.speedy + ball.starttime,
					speedx: ball.speedx,
					speedy: -ball.speedy
				}
			}
			
			return null;
		}
		
		processCollision(game) {
			return "BALLDESTROYED";
		}
		
	}
	
	return BottomBorder;
});