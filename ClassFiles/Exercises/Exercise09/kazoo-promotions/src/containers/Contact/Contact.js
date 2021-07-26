import React, { Component } from 'react';
import styles from './Contact.module.css';
import withUser from '../../hoc/withUser';

class Contact extends Component {

	render() {
		return (
			<div className={styles.wrapper}>
				<h1>Contact.<span> Get In Touch With Us</span></h1>
				<p>{this.props.user}</p>
				<div className={styles.content}>
					<div className={styles.addressWrapper}>
						<ul className={styles.address}>
							<li><i className="far fa-address-book"></i><span><strong>ADDRESS : </strong>1600 Kazoo Ave, <br /> Pueblo CO 81001</span></li>
							<li><i className="fas fa-phone"></i><span><strong>PHONE : </strong> +91-8097000000</span></li>
							<li><i className="fas fa-fax"></i><span><strong>FAX : </strong> +91-8097000001</span></li>
							<li><i className="far fa-envelope"></i><span><strong>EMAIL : </strong> info@example.com</span></li>
							<li><i className="fas fa-globe"></i><span><strong>WEBSITE : </strong>www.kazoopromotions.com</span></li>
							<li><i className="far fa-clock"></i><span><strong>WEEKDAYS : </strong> 10:00 AM - 5:00 PM </span></li>
						</ul>
					</div>
					<div className={styles.formWrapper}>
						{/* add form here */}
					</div>
				</div>
			</div>
		);
	}

}

export default withUser(Contact);
