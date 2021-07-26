import React from 'react';
import styles from './BoardMember.module.css';

export default function(props) {
	if (Math.random() < 0.15) throw new Error('Houston, we have a problem');
	return (
		<div className={styles.detail}>
		<h2>{props.firstName} {props.lastName}, {props.title}</h2>
		<img src={props.photo} alt="board member" />
		<div className={styles.bio} dangerouslySetInnerHTML={{__html: props.bio}}></div>
	</div>
	);
}
