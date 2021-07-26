Exercise 03 Dynamic Content
===========================

In this exercise you will dynamically display collection content based on state.


## CONDITIONALLY RENDER THE BOARD MEMBERS

1. Do your work in BoardMembers.js. Add a property to the state to control whether to render the
	board members, and a button to the rendered JSX to toggle that state. Add a method that
	mutates the new state property and connect it to the button's click event.


2. Use the new state property to conditionally render the <BoardMember> components. Test and
	verify the correct functioning of the application.


## RENDER THE BOARD MEMBERS FROM AN ARRAY OF DATA

3. Use the existing state "members" property to generate the <BoardMember> components, passing
	the array items' properties to the child components. The HTML content of the bio property
	will need to be passed as a prop.


4. Modify the BoardMember component to render the HTML content from its bio prop instead of 
	from props.children. You will need to use dangerouslySetInnerHTML.


5. When you are finished, the web page should look the same as it did before you started.
