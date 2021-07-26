import * as actionTypes from '../actions/actionTypes';

const initialState = {
	artist: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_ARTIST:
			return { ...state, artist: action.payload };
		case actionTypes.CLEAR_ARTIST:
			return { ...state, artist: null };
		default:
			return state;
	}
}

export default reducer;
