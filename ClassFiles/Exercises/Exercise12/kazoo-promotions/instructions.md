Exercise 12 Unit Testing with Jest and Enzyme
=============================================

In this exercise you will create some unit tests for the Faq component.


## CREATE THE UNIT TESTS

1. The Faq component is supposed to render one <h2> element, initially with a class
	of "closed". Once it is clicked the "closed" class should be replaced with an
	"open" class. Create unit tests for the following cases:

	- after creation the component should render an <h2> element
	- after creation the component's <h2> element should have a class of "closed"
	- after the <h2> element is clicked it should no longer have a class of "closed" but 
			should have a class of "open"


	REMEMBER: after the state of a component changes, you should re-search the wrapper for content.
	If you invoke wrapper.find() and save the results into a variable, then change the state
	of the component, often that saved variable will not reflect the state of the content.
	At that point, if you invoke wrapper.find() again, the new result will reflect the current
	state of the content.
