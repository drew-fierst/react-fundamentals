Exercise 01 NextGen JavaScript Features
=======================================

In this exercise you will practice using some of the latest JavaScript features.


## CREATE OBJECTS TO CALCULATE HOW MANY SQUARE FEET OF WALL NEED TO BE PAINTED

1. The program is already written for you, in the file Program.mjs. It creates an instance
	of a Room object and calls its addWall() method, which receives the height and width of 
	the wall, and should return the new wall object.

	Wall objects need to have two methods: addWindow() and addDoor(), both of which receive
	the height and width of the window and door, respectively.

	Finally, the room object should have a method called calcArea(), which should return the
	area of the walls, minus the area of the door(s) and window(s).


2. It is largely up to you how you implement this application, but the most robust solutions
	would involve many of the newest JavaScript features such as classes, inheritance,
	constructors, constants, and array functions such as push() and reduce().

	You will need to create the Room class in a file called Room.mjs. Also create any other
	classes that you wish for your solution. Save them in files with an .mjs extension.

	When you are ready to test your solution, execute the application at a command prompt
	with the command:

	node --experimental-modules Program.mjs

	The program should output that the printable area is: 440.
