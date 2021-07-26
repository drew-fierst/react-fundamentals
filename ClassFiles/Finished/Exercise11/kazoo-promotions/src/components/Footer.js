import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const footer = (props) => {
	const year = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div>Copyright &copy;{year} <span>Kazoo Promotions</span></div>
			<div>
				<Link to={'/'}>About</Link>
				<Link to={'/'}>Privacy</Link>
				<Link to={'/'}>Terms</Link>
			</div>
		</footer>
	);
};

export default footer;
