import React, { useEffect, useReducer } from 'react';
import BoardMember from '../../components/Board/BoardMember';
import styles from './BoardMembers.module.css';
import ErrorBoundary from '../../ErrorBoundary';
import customAxios from '../../axios';
import { toast } from 'react-toastify';
import { Transition } from 'react-transition-group';
import BusySpinner from '../../components/UI/BusySpinner';
import useHttpState from '../../hooks/httpState';

const memberReducer = (state, action) => {
	switch (action.type) {
		case 'SET':
			return {
				...state,
				members: action.payload
			}
		case 'TOGGLE':
			return {
				...state,
				showMembers: !state.showMembers
			}
		default:
			return state;
	}
};



const BoardMembers = () => {

	const [state, dispatch] = useReducer(memberReducer, { members: [], show: false});
	const httpState = useHttpState();

	useEffect(() => {
		if (state.showMembers && !state.members.length) {
			// dispatchHttp({type: 'SENT'});
			httpState.sentRequest();
			customAxios.get('/boardmembers')
				.then(resp => {
					// dispatchHttp({type: 'RESPONSE'});
					httpState.receivedResponse();
					dispatch({type: 'SET', payload: resp.data})
					toast.success('Board members loaded');
				})
				.catch(err => {
					// dispatchHttp({type: 'ERROR', payload: err.message});
					httpState.threwError(err);
				});
		}
	}, [state]);

	const toggleShowMembers = () => {
		dispatch({ type: 'TOGGLE' })
	};


	const memberContent = state.members.map(member => {
		return <ErrorBoundary key={member.id} ><BoardMember 
					firstName={member.firstName}
					lastName={member.lastName}
					title={member.title}
					photo={member.photo}
					bio={member.bio}
					/></ErrorBoundary >
	});

	return (
		<div className={styles.wrapper}>
			<h1>
				Kazoo Promotions. <span>Board of Directors</span>
				{httpState.loading && <BusySpinner></BusySpinner>}
			</h1>
			<p><button className={styles.button} onClick={toggleShowMembers}>Toggle Members</button></p>
			{httpState.error && <div class="danger">{httpState.error}</div>}
			<Transition in={state.showMembers} timeout={800}>
				{state => <div style={{
					overflow: 'hidden',
					transition: 'all 0.8s ease',
					maxHeight: state === 'exited' ? '0px' : '2000px'
				}}>{memberContent}</div>}
			</Transition>
		</div>
	);
	
}

export default BoardMembers;
