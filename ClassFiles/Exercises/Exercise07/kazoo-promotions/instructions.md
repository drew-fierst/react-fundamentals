Exercise 07 Web Server Interactions
===================================

In this exercise you will work Axios to make AJAX calls to a web server.


## CONFIGURE AND USE AXIOS

1. Create a global Axios configuration file and set the baseURL to
	https://www.kazoopromotions.com/api
	

2. Import this Axios instance into the BoardMembers component and use it
	in the componentDidMount event hook to load the board members into state.
	The url for the board members is /boardmembers


## CONFIGURE AND USE TOASTIFY

3. React-toastify is already installed. Configure the app root component to use
	react-toastify.


4. In the BoardMembers control, handle any AJAX errors from Axios and use a
	toaster message to tell the user about it. Modify the URL to cause an error
	to test the toater message.
