define(["./soundproperties"], function(soundProperties) {
	class SoundPool {
		constructor(file, volume, size) {
			this.file = file;
			this.pool = new Array();
			for(let i = 0; i < size; i++) {
				let audio = new Audio(file);
				audio.volume = volume;
				audio.load();
				this.pool.push(audio);
			}
			this.currSound = 0;
		}
		
		
		play() {
			if(soundProperties.mute) {
				return;
			}
			if(this.pool[this.currSound].currentTime == 0 || this.pool[this.currSound].ended) {
				this.pool[this.currSound].play();
			}
			this.currSound = (this.currSound + 1) % this.pool.length;
		};
	}
	
	return SoundPool;
});
