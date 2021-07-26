import React from 'react';
import styles from './Home.module.css';

const home = (props) => {

	return (
		<div className={styles.wrapper}>
			<h1>Kazoo Promotions.<span> Your Event Planning Specialists</span></h1>
			<div className={styles.content}>
				<p>Kazoo Promotions is the premier agency for organizing events from backyard barmitzvahs to multi-day conventions. Whatever your entertainment and production needs are, we can make your event a complete success!</p>
				<p>Duis aliquet ante eget ipsum sodales, nec tempor massa sagittis. Aliquam molestie aliquam dignissim. Maecenas at dui odio. Mauris at fringilla metus. Nulla vel tincidunt felis. Fusce porta libero libero, at euismod sapien pretium ac. Nulla faucibus cursus interdum. Vivamus et ullamcorper ante. Donec tincidunt ante eu cursus imperdiet. Nunc tincidunt sodales orci, rhoncus varius mi congue eget. Proin at ligula mi. Curabitur viverra condimentum est, et dapibus mauris laoreet at. In pellentesque massa risus, vitae condimentum nisl vestibulum ac. Cras vel ex sit amet velit malesuada feugiat fermentum eu lorem. Vestibulum risus nunc, faucibus eget mi non, molestie tempus purus.</p>
			</div>
		</div>
	);
};

export default home;
