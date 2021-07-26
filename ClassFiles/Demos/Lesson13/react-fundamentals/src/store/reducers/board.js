import * as actionTypes from '../actions/actionTypes';

const initialState = {
	board: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_MEMBERS:
			return { ...state, board: action.payload };
		case actionTypes.ADD_MEMBER:
			return { ...state, board: state.board.concat(action.payload) };
		case actionTypes.DELETE_MEMBER:
			return { ...state, board: state.board.filter(elt => elt.Id !== action.payload.Id)};
		default:
			return state;
	}
};

export default reducer;
