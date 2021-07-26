import React, { Component } from 'react';
import styles from './BookingForm.module.css';
import formBuilder from '../../formBuilder';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';

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

		if (formBuilder.validateForm(this.state.requestForm)) {
			this.props.clearArtist();
			toast.info('Thank you. Your request has been sent');
		}
		else {
			this.forceUpdate();	//necessary b/c validateForm mutates existing state directly
			toast.error('you must properly fill out the form');
		}
  };

  render() {
		const formContent = formBuilder.buildForm(this.state.requestForm, this.inputChangedHandler);
		let content = (<p>Please <Link to="/talent">select the artist</Link> you wish to perform.</p>);
		if (this.props.selectedArtist) {
			content = <div>
					<h2>for {this.props.selectedArtist.name}</h2>
					<form className={styles.request} onSubmit={this.postDataHandler}>
						{formContent}
						<button>Send Request</button>
					</form>
				</div>;
		}

    return (
      <div>
        <h2>Event Request</h2>
				{content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		selectedArtist: state.bookingRequest.artist
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clearArtist: () => dispatch(actions.clearArtist())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
