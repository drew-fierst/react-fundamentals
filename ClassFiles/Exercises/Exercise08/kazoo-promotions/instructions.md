Exercise 08 Routing
===================

In this exercise you will work with React Router to create a single-page application.


## CONFIGURE ROUTING

1. In App.js import and configure the application to use BrowserRouter.



## CONFIGURE ROUTES

2. Still in App.js import and configure the routes. Below are the routes and components
	to be mapped:

	| Route    	| Component    	|
	|----------	|--------------	|
	| /        	| Home         	|
	| /talent  	| Talent       	|
	| /support 	| Support      	|
	| /board   	| BoardMembers 	|
	| /contact 	| Contact      	|


3. In Header.js modify the <a> tags to be router links to the appropriate URLs. Start
	the application and test the main menu navigation.


## ADD A DYNAMIC ROUTE

4. Add a new route in App.js to map URLs like /talent/101 to the Artist component with
	the second URL segment being a parameter.


5. Modify the Talent component to have the individual tiles link to this new route.


6. Modify the Artist component to use the URL parameter value when loading artist details.
