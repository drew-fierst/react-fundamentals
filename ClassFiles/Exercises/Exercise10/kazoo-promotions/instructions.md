Exercise 10 Managing State using Redux
======================================

In this exercise you will manage the state of the application with Redux. An 
artist must be selected before sending a booking request. Selection of the artist
will take place in the artist details component and that artist must be available
in the booking form component. Redux will help fulfill that requirement.


## CREATE THE STATE MANAGEMENT

1. Design a Redux data store to contain a selected artist. The actions that are
	necessary to support are:

	- selecting an artist
	- clearing the selected artist


2. Create the necessary reducer function. Create action creator functions, if desired.


3. At the application level, create the store and integrate it to the application using
	the Provider component.



## INTEGRATE THE STATE MANAGEMENT TO THE APPLICATION

4. In the artist details component, map the dispatching of the select-an-artist action
	to a prop and add a "Request Booking" button to the JSX content which will dispatch
	that action for the currently-displayed artist. After dispatching the action, the 
	application should navigate to the "/contact" route. (HINT: remember the router has a
	history.push() method and you may need to use the "ownProps" parameter of mapDispatchToProps).


5. The Booking Form will need the selected artist mapped from state to a prop, as well as
	the dispatching of the clear-artist action. 
	
	If there is no currently selected artist in state, the booking form component should show a 
	message telling the user they must select an artist first, with a link to the "/talent" route.

	If there is a currently selected artist in state, the booking form component should display 
	the form with the name of the selected artist above the form. When the form is validly 
	submitted, it should dispatch the clear-artist action in addition to the toaster message that
	it currently displays.

