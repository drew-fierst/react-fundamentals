Exercise 02 React Syntax and Basics
===================================

In this exercise you will create React components and work with props.


## REFACTOR THE APPLICATION TO UTILIZE REACT COMPONENTS

1. Start the application and view it in your browser to familiarize yourself with the content.

	At a command prompt in the exercise directory, execute

	npm start


2. The application was created with create-react-app, and all of the main application content
	is currently in the App.js component. Your task is to move that content out into other
	React components.


3. Create a BoardMember component and copy the relevant content into it to display one
	board member. Use props for the board member data.


4. Create a BoardMembers component that makes use of four instances of the BoardMember component
	and passes the data currently displayed in App.js to those four instances.


5. Replace the hard-coded content in App.js with an instance of the BoardMembers component. 
	The application should now display exactly the same as it did before your refactoring.
