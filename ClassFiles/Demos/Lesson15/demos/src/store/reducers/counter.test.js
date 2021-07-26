import reducer from './counter';
import * as actionTypes from '../actions/actionTypes';

describe('counter reducer tests', () => {
	let initial;

	beforeEach(() => {
		initial = { counter: 42 };
	});

	it('should increment correctly', () => {
		const action = { type: actionTypes.INCREMENT };
		const result = reducer(initial, action);
		expect(result.counter).toEqual(43);
	});

});
