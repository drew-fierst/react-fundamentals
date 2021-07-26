// this example must be run with the experimental modules switch, as follows:
// node --experimental-modules Program.mjs

import Room from './Room.mjs';

const room = new Room();

const wall1 = room.addWall(8, 20);	//160
const wall2 = room.addWall(8, 12);	// 96
const wall3 = room.addWall(8, 20);	//160
const wall4 = room.addWall(8, 12);	// 96	= 512

wall1.addDoor(7, 3);			//21
wall1.addWindow(3, 3);		// 9

wall2.addWindow(4, 6);		//24

wall3.addWindow(3, 3);		// 9
wall3.addWindow(3, 3);		// 9	= 72


console.log('Paintable Area:', room.calcArea());	// s/b 440
