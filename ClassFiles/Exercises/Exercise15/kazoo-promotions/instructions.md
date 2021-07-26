Exercise 15 Side Effects
========================

In this exercise you will use Hooks to load the Board Member data from the web.


## ADD AN EFFECT TO LOAD THE BOARD MEMBERS

1. Modify the useState call for the member data to use an empty array as the
	initial value. Remove the array of board member data from the bottom of the file.

	Run the application to verify that the board members do not appear on the screen.


2. Modify the BoardMembers.js file, importing the useEffect hook function.


3. Add an effect to the component. In the effect, use the customAxios instance to query
	the '/boardmembers' URL (remember that the get() method returns a promise.)

	In the promise callback, set the response's "data" property to the members state.


4. Use the imported toast component to inform the user of successful loading of the data,
	and catch any errors from the Axios query and use the toast component to inform the 
	user of the error message.

	Test the application to make sure the board members load correctly.
