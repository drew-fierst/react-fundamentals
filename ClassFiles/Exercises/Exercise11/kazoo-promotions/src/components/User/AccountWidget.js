import React from 'react';
import styles from './Accountwidget.module.css';
import { Link } from 'react-router-dom';

const accountWidget = (props) => {

	return (
		<div className={styles.wrapper}>
			<Link to={'/account'}>{props.user ? 'Log Out' : 'Log In'}</Link>
		</div>
	);
	
};

export default accountWidget;
