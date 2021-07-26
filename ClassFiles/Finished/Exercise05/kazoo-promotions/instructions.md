Exercise 05 Handling Errors
===========================

In this exercise you will apply error-handling techniques.


## FIND THE FIRST ERROR

1. Start the application and notice that clicking the button does not display the 
	board members. Use the Vue devtools to find the error and fix it so that the
	board members will display when the button is clicked.

	Once this first problem is fixed you may encounter a run-time error (it is random).


## HANDLE THE SECOND ERROR

2. The BoardMember component is randomly throwing an error. Create an error boundary
	control to wrap around the BoardMember control and handle any thrown errors.

