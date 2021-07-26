import * as actionTypes from './actionTypes';

export const selectArtist = (artist) => {
	return {
		type: actionTypes.SELECT_ARTIST,
		payload: artist
	};
};

export const clearArtist = () => {
	return {
		type: actionTypes.CLEAR_ARTIST
	};
};
