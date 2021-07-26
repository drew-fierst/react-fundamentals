Exercise 11 Async State with Redux
==================================

In this exercise you will work with async actions using Redux. Artist must be able
to log in to the application and log out. The artist who has logged in must be 
tracked using Redux. The login process involves an AJAX call to the web server.


## CREATE THE STATE MANAGEMENT

1. Design a Redux data store to contain the logged-in artist. The actions that are
	necessary to support are:

	- set the current artist
	- logout the current artist (which should set the current artist to null)


2. Create the necessary reducer function. Create action creator functions for the 
	two actions.

	In addition there will need to be a third action creator function which will
	receive the login and password info and use the custom Axios object to send an 
	AJAX call to "/login". That URL expects a posted object similar to:

	{ login: 'selfie', password: 'password' }

	For correct login/password combinations, the URL responds with the artist matching
	the login. For incorrect combinations it responds with no artist. So upon a successful
	completion of the AJAX request you should check:

	if (resp.data && resp.data.id)

	this should tell whether the user/password combination was good or not.


3. Integrate the new state management features to the existing Redux store. You will
	also need to integrate redux-thunk into the application for the async action to work.



## INTEGRATE THE STATE MANAGEMENT TO THE APPLICATION

4. The LogInOut component already has the login form built and its events and validation
	are connected. Its JSX content currently uses a (non-existent) prop value to decide
	whether to display the login form or a logout button. The logout button is connected to
	a (non-existent) prop function.

	Connect the component to Redux to provide the data value and action dispatch for those 
	props, as well as another action dispatch that needs to be invoked in the form submit
	event handler in order to log in the user.


5. The AccountWidget component currently uses a (non-existent) prop to determine whether
	its the link displays "Log In" or "Log Out".
	
	Connect the component to Redux to provide the prop value to make the component display
	the correct text.



## TEST THE NEW FUNCTIONALITY

6. Some valid login/password combinations are:

| login    	| password 	|
|----------	|----------	|
| voltage  	| password 	|
| selfie   	| password 	|
| donna    	| password 	|
| dream    	| password 	|
| chandler 	| password 	|
| marco		 	| password 	|

