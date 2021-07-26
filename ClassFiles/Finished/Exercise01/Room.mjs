import Wall from './Wall.mjs';

class Room {
	constructor() {
		this.walls = [];
	}
	addWall(height, width) {
		const wall = new Wall(height, width);
		this.walls.push(wall);
		return wall;
	}
	calcArea() {
		return this.walls.reduce((total, current) => total + current.calcArea(), 0);
	}
}

export default Room
