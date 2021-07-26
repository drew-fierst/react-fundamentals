import React from 'react';
import styles from './Header.module.css';

const header = (props) => {

	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<a href="#">
							<i className="fas fa-home"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fas fa-user"></i>
							<p>Talent</p>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="far fa-question-circle"></i>
							<p>Support</p>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fas fa-user-tie"></i>
							<p>Board</p>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fas fa-envelope"></i>
							<p>Contact</p>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default header;
