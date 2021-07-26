import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadMembersAsync = () => {
	return (dispatch, getState) => {
		const currState = getState();
		if (!currState.board.board.length) {
			return axios.get('/boardmembers')
				.then(resp => dispatch(storeMembers(resp.data)))
		}
		else {
			return Promise.resolve();
		}
	};
};

export const storeMembers = (members) => {
	return {
		type: actionTypes.STORE_MEMBERS,
		payload: members
	};
};

export const addMemberAsync = (newMember) => {
	return dispatch => {
		return axios.post('/boardmembers', newMember)
			.then(resp => dispatch(addMember(resp.data)));
	};
};

export const addMember = (member) => {
	return {
		type: actionTypes.ADD_MEMBER,
		payload: member
	};
};

export const deleteMemberAsync = (member) => {
	return dispatch => {
		return axios.delete('/boardmembers/' + member.Id)
		  .then(resp => dispatch(deleteMember(member)));
	};
};

export const deleteMember = (member) => {
	return {
		type: actionTypes.DELETE_MEMBER,
		payload: member
	};
};
