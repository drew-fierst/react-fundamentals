Exercise 14 Introduction to Hooks
=================================

The BoardMembers container component has been modified to be a functional component.
In this exercise you will use Hooks to add state to that component.


## ADD STATE TO TRACK WHETHER TO SHOW BOARD MEMBERS

1. Modify the BoardMembers.js file, importing the useState hook function.

2. Change both the members and showMembers variables to come from calls to useState(),
	using the values currently assigned to the variables as the initial values for their state.

3. Implement the toggleShowMembers() function to use the state setting function acquired
	in step 2.

	Test the application to make sure the display toggling functionality works properly.

4. Since the new state value depends upon the existing state value, modify the implementation 
	of the toggleShowMembers() function to use the functional syntax for setting the state,
	to avoid possible race conditions.

	Test the application to make sure the display toggling functionality still works properly.
