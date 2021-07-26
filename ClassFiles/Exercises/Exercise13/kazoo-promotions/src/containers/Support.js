import React, { Component } from 'react';
import customAxios from '../axios';
import { toast } from 'react-toastify';
import Faq from '../components/Support/Faq';
import styles from './Support.module.css';

class Support extends Component {

	state = {
		faqs: []
	}

	componentDidMount() {
		customAxios.get('/support')
			.then(resp => {
				this.setState({faqs: resp.data});
			})
			.catch(err => {
				toast.error(err.message);
			})
	}

	render() {
		const content = this.state.faqs.map((faq, idx) => <Faq key={idx} question={faq.question} answer={faq.answer} />)

		return (
			<div className={styles.wrapper}>
				<h1>Kazoo Promotions.<span> Support</span></h1>
				<div className={styles.content}>
					{content}
				</div>
			</div>
		);
	}

}

export default Support;
