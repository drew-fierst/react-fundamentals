import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CounterControl from './CounterControl';

configure({adapter: new Adapter()});

describe('<CounterControl /> tests', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<CounterControl/>);
	});

	it('should execute its clicked fn when clicked', () => {
		let fn = jest.fn();
		wrapper.setProps({ clicked: fn });
		let elt = wrapper.find('div');
		elt.simulate('click');
		expect(fn).toHaveBeenCalled();
	});

})
