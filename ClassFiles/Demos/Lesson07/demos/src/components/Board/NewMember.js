import React, { Component } from 'react';
import styles from './NewMember.module.css';

class NewMember extends Component {
	state = {
		firstName: '',
		lastName: '',
		title: '',
		bio: '',
	}

	render () {
		return (
			<div className={styles.newMember}>
				<h1>Add a Board Member</h1>

				<label>First Name</label>
				<input type="text" value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value})} />

				<label>Last Name</label>
				<input type="text" value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value})} />

				<label>Title</label>
				<input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value})} />

				<label>Bio</label>
				<textarea rows="4" value={this.state.bio} onChange={(event) => this.setState({ bio: event.target.value})} />

				<button>Add Member</button>
			</div>
		);
	}
}

export default NewMember;
