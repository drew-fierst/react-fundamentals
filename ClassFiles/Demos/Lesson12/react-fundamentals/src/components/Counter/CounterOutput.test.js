import React from 'react';
import CounterOutput from './CounterOutput';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<CounterOutput /> tests', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CounterOutput/>);
	})

	it('should render exactly one div', () => {
		// const wrapper = shallow(<CounterOutput/>);
		expect(wrapper.find('div')).toHaveLength(1);
	});

	it('should render props.value in a div', () => {
		// const wrapper = shallow(<CounterOutput value="42"/>);
		wrapper.setProps({ value: 42 });
		expect(wrapper.containsMatchingElement(<div>Current Counter: 42</div>)).toEqual(true);
	});

});
