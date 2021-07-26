import React from 'react';
import styles from './Footer.module.css';

const footer = (props) => {
	const year = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div>Copyright &copy;{year} <span>Kazoo Promotions</span></div>
			<div>
				<a href="#">About</a>
				<a href="#">Privacy</a>
				<a href="#">Terms</a>
			</div>
		</footer>
	);
};

export default footer;
