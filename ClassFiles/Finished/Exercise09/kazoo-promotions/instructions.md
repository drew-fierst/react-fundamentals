Exercise 09 Forms
=================

In this exercise you will build, validate and process a form.

The custom Input component and the formBuilder module from the lesson have been
included in the starter files for this exercise. The formBuilder module has been
enhanced to include support for automatic email validation via RegEx and for a
"minValue" validation for dates and numbers.


## BUILD A FORM

1. Create a new component to contain a form for users to request booking an artist
	to perform at an event. Include the following fields:


| Field     	| Kind     	| Type   	|
|-----------	|----------	|--------	|
| name      	| input    	| text   	|
| email     	| input    	| email  	|
| eventType 	| input    	| text   	|
| eventDate 	| input    	| date   	|
| numGuests 	| input    	| number 	|
| requests  	| textarea 	|        	|


2. The form should validate each field as the data is being entered, as well as
	validating the entire form upon submit. If the form fails validation the user 
	should be prompted via a toaster message. If the form passes validation, do not
	do anything with the form data as of yet, simply notify the user via a toaster
	message that their request has been submitted.


3. Include the form in the Contact.js container component (there is a comment in
	the file indicating where to include it). Run the application and test the functionality.
	
