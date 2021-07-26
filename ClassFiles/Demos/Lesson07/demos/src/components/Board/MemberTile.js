import React from 'react';
import styles from './MemberTile.module.css';

const memberTile = (props) => {
		return (
			<article className={styles.memberTile}>
				<h1>Name</h1>
				<div className={styles.jobTitle}>Title</div>
			</article>
		);
}

export default memberTile;
