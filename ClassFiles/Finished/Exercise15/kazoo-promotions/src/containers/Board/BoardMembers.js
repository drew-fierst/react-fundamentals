import React, { useState, useEffect } from 'react';
import BoardMember from '../../components/Board/BoardMember';
import styles from './BoardMembers.module.css';
import ErrorBoundary from '../../ErrorBoundary';
import customAxios from '../../axios';
import { toast } from 'react-toastify';
import { Transition } from 'react-transition-group';

const BoardMembers = () => {

	const [members, setMembers] = useState([]);
	const [showMembers, setShowMembers] = useState(false);
	
	useEffect(() => {
		customAxios.get('/boardmembers')
			.then(resp => {
				setMembers(resp.data);
				toast.success('Board members loaded');
			})
			.catch(err => {
				toast.error(err.message);
			});
	}, [setMembers]);

	const toggleShowMembers = () => {
		setShowMembers(prevShow => !prevShow);
	};


	const memberContent = members.map(member => {
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
			<h1>Kazoo Promotions. <span>Board of Directors</span></h1>
			<p><button className={styles.button} onClick={toggleShowMembers}>Toggle Members</button></p>
			<Transition in={showMembers} timeout={800}>
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
