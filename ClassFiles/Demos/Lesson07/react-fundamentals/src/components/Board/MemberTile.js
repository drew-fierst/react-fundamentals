import React from 'react';
import styles from './MemberTile.module.css';

const memberTile = (props) => {
		return (
			<article className={styles.memberTile} onClick={props.clicked}>
				<h1>{props.firstName} {props.lastName}</h1>
				<div className={styles.jobTitle}>{props.title}</div>
			</article>
		);
}

export default memberTile;
