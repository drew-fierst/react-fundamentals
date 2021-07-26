import * as actionTypes from './actionTypes';
import customAxios from '../../axios';

export const setUser = (artist) => {
	return {
		type: actionTypes.SET_USER,
		payload: artist
	};
};

export const logoutUser = () => {
	return {
		type: actionTypes.LOGOUT_USER
	};
};

export const loginUser = (login, password) => {
	return dispatch => {
		return customAxios.post('/login', { login, password })
			.then(resp => {
				if (resp.data && resp.data.id) {
					dispatch(setUser(resp.data));
				}
				else {
					throw new Error('invalid login');
				}
			})
	};
};
