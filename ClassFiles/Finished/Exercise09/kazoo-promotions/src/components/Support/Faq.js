import React, { Component } from 'react';
import styles from './Faq.module.css';

class Faq extends Component {
	state = {
		open: false
	}

	toggleState = () => {
		this.setState((state, props) => {
			return { open: !state.open}
		});
	}

	render() {
		const headClasses = [styles.question];
		const bodyClasses = [styles.answer];

		if (this.state.open) {
			headClasses.push(styles.open);
			bodyClasses.push(styles.open);
		}
		else {
			headClasses.push(styles.closed);
			bodyClasses.push(styles.closed);
		}
		return (
			<div>
				<h2 className={headClasses.join(' ')} onClick={this.toggleState}>{this.props.question}</h2>
				<div dangerouslySetInnerHTML={{__html: this.props.answer}} className={bodyClasses.join(' ')}></div>
			</div>
		);
	}

}

export default Faq;
