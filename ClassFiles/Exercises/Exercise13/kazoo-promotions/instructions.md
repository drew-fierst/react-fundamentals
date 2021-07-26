Exercise 13 Transitions and Animations
======================================

In this exercise you will implement animation for the application.


## ANIMATE THE ROUTER TRANSITIONS

1. Modify the ContentContainer.js file to enable router transition animation.

	- You will need to import TransitionGroup and CSSTransition

2. The Switch element returned by the component will need to be wrapped in three
	new layers of elements.

	- The first layer should be a TransitionGroup element that renders as a <div>.
		It should also set its class name to the transitionWrapper value imported 
		from the styles.
	- The second layer should be a CSSTransition element. It should have a timeout 
		of 800, its classnames should have all of the imported styles spread onto it,
		and it should have a key set from the key of the location props.
	- The third layer should be a simple <div> element, whose classname is set from
		the transitionSection value from the imported styles.

3. The Switch element needs a location attribute set to the location props value.

	Test your application. The router transitions should now be animated.


## ANIMATE THE APPEARANCE/DISAPPEARANCE OF THE BOARD MEMBERS

3. Import Transition from react-transition-group

4. In the returned JSX, replace the conditional display of the members content with
	a Transition element. Its "in" attribute should be provided a value from the
	component's showMembers state value. It should also have a timeout of 800.

	The content of the Transition element should be an arrow function that receives 
	the state and returns a <div> element wrapped around the members content.

	The div element should have the following style properties set:

		overflow: 'hidden',
		transition: 'all 0.8s ease',
		maxHeight: state === 'exited' ? '0px' : '2000px'


	Test your application and verify that the appearance/disappearance of the 
	board member content is animated.
