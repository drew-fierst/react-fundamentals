import React, { Component } from 'react';
import styles from './MemberDetail.module.css';

class MemberDetail extends Component {
	render() {
		let content = <p className={styles.instructions}>Please select a Board Member!</p>;
		content = (
			<div className={styles.memberDetail}>
				<h1>Name</h1>
				<p className={styles.jobTitle}>Title</p>
				<div>Bio</div>
				<div className={styles.edit}>
					<button className="Delete">Delete</button>
				</div>
			</div>
		);
		return content;
	}
}

export default MemberDetail;
