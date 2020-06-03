define(['./drawable'], function(Drawable) {
	class Obstacle extends Drawable {
		constructor(ctx) {
			super(ctx);
		}
		
		nextLevel(game) {
			return true;
		}
		
		getNextCollision(ball) {
			return null;
		}
		
		// return NODESTROY, DESTROYED or BALLDESTROYED;
		processCollision(game) {
			return "NODESTROY";
		}
	}
	
	return Obstacle;
});