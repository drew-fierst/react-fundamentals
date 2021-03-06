import * as actionTypes from '../actions/actionTypes';

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case actionTypes.ADD:
			return { ...state, counter: state.counter + action.payload };
		case actionTypes.DECREMENT:
			return { ...state, counter: state.counter - 1 };
		case actionTypes.SUBTRACT:
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
}

export default reducer;
