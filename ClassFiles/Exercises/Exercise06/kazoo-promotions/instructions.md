Exercise 06 Components
======================

In this exercise you will work with components, adding props validation and defaults
and creating a higher-order-component.


## FIX BOARD MEMBER PROPS

1. Currently the title and photo properties are not quite working right for the 
	Member Detail component. The title property is not being passed at all and that
	should not happen. In the BoardMember component make the title prop required.
	This will at least create a warning to let users of the component know when they
	are not using it correctly. Then fix the problem by providing the title prop
	when invoking BoardMember from the BoardMembers control.


2. In addition, one of the board members is missing their photo property, so a broken
	image tag is showing for that board member. In the BoardMember component provide 
	a default value of 'images/person.svg' for the photo property. That will more 
	gracefully handle that situation.


## CREATE A HIGHER-ORDER-COMPONENT

3. As the application develops it will be helpful to be able to provide the current
	user to various components. A Higher-Order-Component would be a convenient way
	to do that. Create a Higher-Order-Component called withUser.

	a. Give the component a state property to track the current user
	b. In the componentDidMount assign that state property a hard-coded value for now
	c. When rendering the wrapped component provide the state value to the wrapped component as a prop
	d. Do not forget to spread any other props the HOC may receive on to the wrapped component


4. When finished, wrap the BoardMembers control with the HOC and render the username
	in a <p> somewhere on the page.
	
