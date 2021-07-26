import React from 'react';
import styles from './MemberDetail.module.css';
import { CSSTransition } from 'react-transition-group';

const animationTiming = {
	enter: 400,
	exit: 1000
}

const memberDetail = (props) => {

	let content = <p className={styles.instructions}>Please select a Board Member!</p>;
	if (props.member) {
		content = (
			<CSSTransition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit appear classNames={{...styles}}>
				<div className={styles.memberDetail} onClick={props.clicked}>
					<img src={"https://www.kazoopromotions.com" + props.member.imageUrl}
						alt={'photo of ' + props.member.firstName + ' ' + props.member.lastName} />
					<h1>
						{props.member.firstName}{' '}
						{props.member.lastName}
					</h1>
					<p className={styles.jobTitle}>{props.member.title}</p>
					<div
						dangerouslySetInnerHTML={{ __html: props.member.bio }}
					/>
				</div>
			</CSSTransition>
		);
	}
	return content;
  
}

export default memberDetail;
