import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Faq from './Faq';

configure({adapter: new Adapter()});

describe('<CounterControl /> tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Faq />);
	});
	
	it('should render an <h2>', () => {
		expect(wrapper.find('h2')).toHaveLength(1);
	});

	it('should render a "closed" class on the <h2>', () => {
		expect(wrapper.find('h2').hasClass('closed')).toEqual(true);
	})

	it('should render an "open" class on the <h2> after being clicked', () => {
		wrapper.find('h2').simulate('click');
		expect(wrapper.find('h2').hasClass('open')).toEqual(true);
		expect(wrapper.find('h2').hasClass('closed')).toEqual(false);
	});

})
