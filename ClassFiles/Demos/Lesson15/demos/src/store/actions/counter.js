import * as actionTypes from './actionTypes';

export const increment = () => {
	return {
		type: actionTypes.INCREMENT
	};
};

export const decrement = () => {
	return {
		type: actionTypes.DECREMENT
	};
};

export const add = (amt) => {
	return {
		type: actionTypes.ADD,
		payload: amt
	};
};

export const subtract = (amt) => {
	return {
		type: actionTypes.SUBTRACT,
		payload: amt
	};
};

export const delayAdd = (amt) => {
	return dispatch => {
			setTimeout(() => {
			dispatch({type: actionTypes.ADD, payload: amt});
		}, 3000);
	};
};
