import React, { Component } from 'react';
import styles from './LogInOut.module.css';
import formBuilder from '../../formBuilder';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class LogInOut extends Component {

	state = {
		loginForm: {
			userName: formBuilder.configInput('input', 'text', 'User Name', null, {required: true}),
			password: formBuilder.configInput('input', 'password', 'Password', null, {required: true})
		}
	}

	inputChangedHandler = (evt, id) => {
    const updatedForm = { ...this.state.loginForm };

    const updatedElement = updatedForm[id];
    updatedElement.value = evt.target.value;
    formBuilder.checkValidity(updatedElement);

    updatedForm[id] = updatedElement;
    this.setState({ loginForm: updatedForm });
	};

	handleLogIn = (evt) => {
		evt.preventDefault();
		if (formBuilder.validateForm(this.state.loginForm)) {
			//dispatch the login action with appropriate data
			this.props.onLogin(this.state.loginForm.userName.value, this.state.loginForm.password.value)
				.then(() => this.props.history.push('/'))
				.catch(err => {
					toast.error('invalid login');
				})
		}
		else {
			this.forceUpdate();	//necessary b/c validateForm() mutates existing state directly
			toast.error('you must properly fill out the form');
		}
	}

	render() {
		const formContent = formBuilder.buildForm(this.state.loginForm, this.inputChangedHandler);
		let content = <form className={styles.login} onSubmit={this.handleLogIn}>
			{formContent}
			<button>Log In</button>
		</form>;

		if (this.props.currentUser) {
			content = <p className={styles.login}><button onClick={this.props.onLogout}>Log Out</button></p>;
		}

		return (
			<div className={styles.wrapper}>
				<h1>Kazoo Promotions.<span> Account</span></h1>
				<div className={styles.content}>
					{content}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.account.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: () => dispatch(actions.logoutUser()),
		onLogin: (login, pwd) => dispatch(actions.loginUser(login, pwd)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInOut);
