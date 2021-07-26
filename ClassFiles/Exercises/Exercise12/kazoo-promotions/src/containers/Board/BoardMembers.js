import React, { Component } from 'react';
import BoardMember from '../../components/Board/BoardMember';
import styles from './BoardMembers.module.css';
import ErrorBoundary from '../../ErrorBoundary';
import customAxios from '../../axios';
import { toast } from 'react-toastify';

class BoardMembers extends Component {

	state = {
		members: [],
		showMembers: false
	}

	componentDidMount() {
		customAxios.get('/boardmembers')
			.then(resp => {
				this.setState({members: resp.data})
				toast.success('Board members loaded');
			})
			.catch(err => {
				toast.error(err.message);
			});
	}

	toggleShowMembers = () => {
		this.setState((state) => {
			return { showMembers: !state.showMembers };
		})
	};

	render() {
		const members = this.state.members.map(member => {
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
				<p><button className={styles.button} onClick={this.toggleShowMembers}>Toggle Members</button></p>
				{this.state.showMembers && members }
			</div>
		);
	}
}

export default BoardMembers;
