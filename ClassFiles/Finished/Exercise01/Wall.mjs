import Rectangle from './Rectangle.mjs';

class Wall extends Rectangle {
	constructor(height, width) {
		super(height, width);
		this.windows = [];
		this.doors = [];
	}

	addWindow(height, width) {
		this.windows.push(new Rectangle(height, width));
	}
	addDoor(height, width) {
		this.doors.push(new Rectangle(height, width));
	}
	calcArea() {
		const baseArea = super.calcArea();

		const windowArea = this.windows.reduce((total, current) => total + current.calcArea(), 0);
		const doorArea = this.doors.reduce((total, current) => total + current.calcArea(), 0);

		return baseArea - windowArea - doorArea;
	}
}

export default Wall
