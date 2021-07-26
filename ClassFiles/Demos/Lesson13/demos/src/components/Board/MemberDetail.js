import React from 'react';
import styles from './MemberDetail.module.css';

const memberDetail = (props) => {

	const cssClasses = [styles.memberDetail, props.show ? styles.modalOpen : styles.modalClosed ];

	let content = <p className={styles.instructions}>Please select a Board Member!</p>;
	if (props.member) {
		content = (
			<div className={cssClasses.join(' ')} onClick={props.clicked}>
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
		);
	}
	return content;

}

export default memberDetail;
