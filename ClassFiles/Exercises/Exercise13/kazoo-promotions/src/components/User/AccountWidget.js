import React from 'react';
import styles from './Accountwidget.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const accountWidget = (props) => {
	
	return (
		<div className={styles.wrapper}>
			<Link to={'/account'}>{props.user ? 'Log Out' : 'Log In'}</Link>
		</div>
	);
	
};

const mapStateToProps = (state) => {
	return {
		user: state.account.user
	}
}

export default connect(mapStateToProps)(accountWidget);
