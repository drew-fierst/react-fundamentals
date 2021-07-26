import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const header = (props) => {

	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>
							<i className="fas fa-home"></i>
						</Link>
					</li>
					<li>
						<Link to={"/talent"}>
							<i className="fas fa-user"></i>
							<p>Talent</p>
						</Link>
					</li>
					<li>
						<Link to={"/support"}>
							<i className="far fa-question-circle"></i>
							<p>Support</p>
						</Link>
					</li>
					<li>
						<Link to={"/board"}>
							<i className="fas fa-user-tie"></i>
							<p>Board</p>
						</Link>
					</li>
					<li>
						<Link to={"/contact"}>
							<i className="fas fa-envelope"></i>
							<p>Contact</p>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default header;
