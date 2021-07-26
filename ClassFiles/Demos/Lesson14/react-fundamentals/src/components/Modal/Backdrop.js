import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props) => {
	const cssClasses = [styles.Backdrop, props.show ? styles.BackdropOpen : styles.BackdropClosed ];

	return (
		<div className={cssClasses.join(' ')} onClick={props.clicked}></div>
	);
};

export default backdrop;
