Exercise 17 Custom Hooks
========================

In this exercise you will create and use a custom hook to manage HTTP request state.


## CREATE AN HTTP STATE HOOK

1. Create a new file called httpState.js in the hooks folder.

	Move the httpReducer function from containers/Board/BoardMember.js into the new file.

	Create and export a function to be the new hook. 

	Move the useReducer() call for the httpReducer function from BoardMember.js to
	the new function.


2. In the new function, return an object with the following properties:

	loading 			- the value should come from the httpState.loading property
	error 				- the value should come from the httpState.error property
	sentRequest			- the value should be a function that dispatches the 'SENT' action
	receivedResponse	- the value should be a function that dispatches the 'RESSPONSE' action
	threwError			- the value should be a function that receives an error object as a parameter
							and dispatches the 'ERROR' action with a payload of the error's message

	All of the functions should be wrapped in useCallback() so that they do not get 
	re-created upon each render.

	Be sure to import the React hooks that you use in this custom hook.



## USE THE HOOK

3. In the containers/Board/BoardMembers.js component, import the custom hook you
	just created. Inside the component function, execute the custom hook and assign
	its return value into a constant.

	HINT: if you name the constant "httpState" the current references for
	httpState.loading and httpState.error that are in the JSX will work without
	having to fix them up.


4. In the effect, replace the calls to dispatchHttp(xxx) with the corresponding
	methods from the custom hook.


	Test the application to make sure the board member screen works correctly,
	showing the loading spinner when appropriate and hiding it when appropriate.
	Alter the URL to test the error message functionality.
