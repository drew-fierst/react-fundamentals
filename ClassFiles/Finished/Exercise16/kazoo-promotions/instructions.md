Exercise 16 Reducers and Context
================================

In this exercise you will move state into a reducer function.


## MOVE BOARD MEMBER STATE INTO A REDUCER FUNCTION

1. Working in the BoardMembers.js container component, move both the members and the
	showMembers state into a reducer function and fixup the rest of the component
	code to maintain the same functionality it started with.

	HINT: you can get it done with two actions.

	Run the application to verify that the board members functionality.


2. Modify the functionality to not query for the board members when the component loads,
	but instead to query for them only the first time the "Show" button is clicked.

	HINT: you should only need to modify the effect.


## ADD A REDUCER FOR HTTP STATE

3. Create a reducer to track the HTTP state, similar to the example in this chapter's 
	sample files. Dispatch actions to that reducer at the appropriate points of the 
	effect, while HTTP requests are going on.


4. Import the BusySpinner from components/UI and display it inside the <h1> element
	while an HTTP request is occurring.


5. Use the HTTP state to display the error message in the JSX, when there is an error
	message. You can use a class of "danger" to format the message, if you wish.

	Test the application and alter the URL to test the error functionality.
