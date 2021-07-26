import React, { Component } from 'react';
import styles from './BookingForm.module.css';
import formBuilder from '../../formBuilder';
import { toast } from 'react-toastify';

class BookingForm extends Component {
  state = {
    requestForm: {
      name: formBuilder.configInput('input', 'text', 'Name', null, {required: true}),
      email: formBuilder.configInput('input', 'email', 'Email', null, {required: true}),
      eventType: formBuilder.configInput('input', 'text', 'Type of Event', null, {required: true}),
			eventDate: formBuilder.configInput('input', 'date', 'Event Date', null, { required: true, minValue: new Date()}),
      numGuests: formBuilder.configInput('input', 'number', '# Guests', null, {required: true, minValue: 10}),
      requests: formBuilder.configInput('textarea', '', 'Special Requests')
    }
  };

  inputChangedHandler = (evt, id) => {
    const updatedForm = { ...this.state.requestForm };

    const updatedElement = updatedForm[id];
    updatedElement.value = evt.target.value;
    formBuilder.checkValidity(updatedElement);

    updatedForm[id] = updatedElement;
    this.setState({ requestForm: updatedForm });
  };

  postDataHandler = evt => {
    evt.preventDefault();

    let hasError = false;
    for (let elt in this.state.requestForm) {
			formBuilder.checkValidity(this.state.requestForm[elt]);
			if (!this.state.requestForm[elt].valid) {
        hasError = true;
      }
    }
    if (hasError) {
      this.forceUpdate();
      toast.error('you must properly fill out the form');
      return;
    }

		toast.info('Thank you. Your request has been sent');
		
  };

  render() {
		const formContent = formBuilder.buildForm(this.state.requestForm, this.inputChangedHandler);

    return (
      <div>
        <h2>Event Request</h2>

				<form className={styles.request} onSubmit={this.postDataHandler}>
					{formContent}
					<button>Send Request</button>
				</form>
      </div>
    );
  }
}

export default BookingForm;
