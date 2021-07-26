import React, { Component } from 'react';
import BoardMember from '../components/Board/BoardMember';
import styles from './BoardMembers.module.css';
import ErrorBoundary from '../ErrorBoundary';
import withUser from '../hoc/withUser';

class BoardMembers extends Component {

	state = {
		members: [],
		showMembers: false
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
			<div>
				<h1>Kazoo Promotions Board of Directors</h1>
				<p>{this.props.user}</p>
				<p><button className={styles.button} onClick={this.toggleShowMembers}>Toggle Members</button></p>
				{this.state.showMembers && members }
			</div>
		);
	}
}

export default withUser(BoardMembers);
