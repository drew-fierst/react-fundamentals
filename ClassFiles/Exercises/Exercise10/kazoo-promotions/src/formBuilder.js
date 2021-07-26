import React from 'react';
import Input from './components/Forms/Input';

const formBuilder = {
	configInput(kind, type, label, placeholder, validation={}, value='') {
		const settings = {
			kind,
			label,
			value,
			validation,
			attrs: {}
		}
		
		if (typeof type !== 'undefined') {
			settings.attrs.type = type;
		}
		if (placeholder !== null && typeof placeholder !== 'undefined') {
			settings.attrs.placeholder = placeholder;
		} else {
			settings.attrs.placeholder = 'enter ' + label.toLowerCase();
		}

		return settings;
	},

	buildForm(settings, handler) {
		const elements = [];
		for (let key in settings) {
			elements.push({
				id: key,
				config: settings[key]
			});
		}

		const content = elements.map(elem => (
			<Input key={elem.id}
				label={elem.config.label}
				kind={elem.config.kind}
				value={elem.config.value}
				attrs = {elem.config.attrs}
				valid = {elem.config.valid}
				errors = {elem.config.errors}
				changed={(event) => handler(event, elem.id)}
				 />
		));

		return content;
	},

	checkValidity(inputConfig) {
		inputConfig.valid = true;
		inputConfig.errors = {};

		if (inputConfig.validation.required) {
			if (inputConfig.value.trim() === '') {
				inputConfig.valid = false;
				inputConfig.errors.required = `You must enter a value for ${inputConfig.label}`;
			}
		}

		if (inputConfig.validation.minLength) {
			if (inputConfig.value.trim().length < inputConfig.validation.minLength) {
				inputConfig.valid = false;
				inputConfig.errors.minLength = `${inputConfig.label} must be at least ${inputConfig.validation.minLength} characters`;
			}
		}

		if (inputConfig.attrs.type === 'email' && inputConfig.value) {
			let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
			if (!re.test(inputConfig.value.toLowerCase())) {
				inputConfig.valid = false;
				inputConfig.errors.email = `${inputConfig.label} must be a valid email address`;
			}
		}

		if (inputConfig.validation.minValue && inputConfig.attrs.type === 'number') {
			let threshold = +(inputConfig.validation.minValue);
			let value = +(inputConfig.value);
			if (value < threshold) {
				inputConfig.valid = false;
				inputConfig.errors.minValue = `${inputConfig.label} must be no less than ${inputConfig.validation.minValue}`;
			}
		}

		if (inputConfig.validation.minValue && inputConfig.attrs.type === 'date') {
			let threshold = new Date(inputConfig.validation.minValue);
			let value = new Date(inputConfig.value);
			if (value < threshold) {
				inputConfig.valid = false;
				inputConfig.errors.minValue = `${inputConfig.label} must be no less than ${threshold.toDateString()}`;
			}
		}

	}

};

export default formBuilder;
