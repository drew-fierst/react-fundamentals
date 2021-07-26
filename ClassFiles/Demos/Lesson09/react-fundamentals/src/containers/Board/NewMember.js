import React, { Component } from 'react';
import styles from './NewMember.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
// import Input from '../../components/Forms/Input';
import formBuilder from '../../formBuilder';

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
		axios.post('/boardmembers', data)
			.then(resp => {
				console.log(resp);
			})
			.catch(err => {
			  toast.error(err.toString());
			});
	};

	render () {
		const formContent = formBuilder.buildForm(this.state.memberForm, this.inputChangedHandler);

		return (
			<div className={styles.newMember}>
				<h1>Add a Board Member</h1>

				{/* <label>First Name</label>
				<input type="text" value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value})} />
				<label>Last Name</label>
				<input type="text" value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value})} />
				<label>Title</label>
				<input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value})} />
				<label>Bio</label>
				<textarea rows="4" value={this.state.bio} onChange={(event) => this.setState({ bio: event.target.value})} /> */}

				{/* <Input label="First Name" />
				<Input label="Last Name" />
				<Input label="Title" />
				<Input label="Email" type="email" />
				<Input label="Hire Date" type="date" />
				<Input label="Bio" kind="textarea" placeholder="summarize professional experience" /> */}

				<form onSubmit={this.postDataHandler}>
					{formContent}
					<button>Add Member</button>
				</form>

			</div>
		);
	}
}

export default NewMember;
