import React from 'react';
import styles from './BoardMember.module.css';

export default function(props) {
	return (
		<div className={styles.detail}>
		<h2>{props.firstName} {props.lastName}, {props.title}</h2>
		<img src={props.photo} alt="board member" />
		<div className={styles.bio} dangerouslySetInnerHTML={{__html: props.bio}}></div>
	</div>
	);
}
