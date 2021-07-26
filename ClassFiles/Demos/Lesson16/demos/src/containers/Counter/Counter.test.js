import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Counter } from './Counter';
import CounterOutput from '../../components/Counter/CounterOutput';
import CounterControl from '../../components/Counter/CounterControl';

configure({ adapter: new Adapter() });

describe('<Counter /> tests', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Counter />);
	});

	it('should render <CounterOutput /> when rendering', () => {
		expect(wrapper.find(CounterOutput)).toHaveLength(1);
	});

	it('should render 5 <CounterControl /> when rendering', () => {
		expect(wrapper.find(CounterControl)).toHaveLength(5);
	});

});
