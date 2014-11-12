function Animal(speed, focus) {
	this.speed = speed;
	this.focus = focus;
	this.position = 0;
	this.run = function() {
		if (Math.random() * 10 < this.focus) {
			this.position = this.position + this.speed;
		}
		return this.position;
	}
}