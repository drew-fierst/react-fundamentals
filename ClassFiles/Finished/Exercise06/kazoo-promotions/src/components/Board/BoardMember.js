import React from 'react';
import styles from './BoardMember.module.css';
import PropTypes from 'prop-types';

function boardMember(props) {
	return (
		<div className={styles.detail}>
		<h2>{props.firstName} {props.lastName}, {props.title}</h2>
		<img src={props.photo} alt="board member" />
		<div className={styles.bio} dangerouslySetInnerHTML={{__html: props.bio}}></div>
	</div>
	);
}

boardMember.propTypes = {
	title: PropTypes.string.isRequired
};

boardMember.defaultProps = {
	photo: 'images/person.svg'
}

export default boardMember;
