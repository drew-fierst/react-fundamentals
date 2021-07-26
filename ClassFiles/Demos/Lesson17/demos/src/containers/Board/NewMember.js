import React, { Component } from 'react';
import styles from './NewMember.module.css';
import { toast } from 'react-toastify';
import formBuilder from '../../formBuilder';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class NewMember extends Component {
	state = {
		memberForm: {
			firstName: formBuilder.configInput('input', 'text', 'First Name', null, {required: true}),
			lastName: formBuilder.configInput('input', 'text', 'Last Name', null, {required: true, minLength: 2}),
			title: formBuilder.configInput('input', 'text', 'Title', null, {required: true}),
			email: formBuilder.configInput('input', 'email', 'Email'),
			hireDate: formBuilder.configInput('input', 'date', 'Hire Date'),
			bio: formBuilder.configInput('textarea', '', 'Bio', 'summarize professional experience')
		}
	}

	componentDidMount() {
		this.props.onLoad();
	}

	inputChangedHandler = (evt, id) => {
		const updatedForm = { ...this.state.memberForm };
		
		const updatedElement = updatedForm[id];
		updatedElement.value = evt.target.value;
		formBuilder.checkValidity(updatedElement);

		updatedForm[id] = updatedElement;
		this.setState({ memberForm: updatedForm });
	};

	postDataHandler = (evt) => {
		evt.preventDefault();

		let hasError = false;
		for (let elt in this.state.memberForm) {
			formBuilder.checkValidity(this.state.memberForm[elt]);
			if (!this.state.memberForm[elt].valid) {
				hasError = true;
			}
		}
		if (hasError) {
			this.forceUpdate();
			toast.error('you must properly fill out the form');
			return;
		}

		const data = {
			firstName: this.state.memberForm.firstName.value,
			lastName: this.state.memberForm.lastName.value,
			title: this.state.memberForm.title.value,
			bio: this.state.memberForm.bio.value
		};

		this.props.onSave(data)
			.then(() => {
				this.props.history.push('/board');
			}).catch(err => 
				toast.error(err.toString())
			);
	};

	render () {
		const formContent = formBuilder.buildForm(this.state.memberForm, this.inputChangedHandler);

		return (
			<div className={styles.newMember}>
				<h1>Add a Board Member</h1>
				<form onSubmit={this.postDataHandler}>
					{formContent}
					<button>Add Member</button>
				</form>

			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSave: (member) => dispatch(actions.addMemberAsync(member)),
		onLoad: () => dispatch(actions.loadMembersAsync())
	}
}
export default connect(null, mapDispatchToProps)(NewMember);
