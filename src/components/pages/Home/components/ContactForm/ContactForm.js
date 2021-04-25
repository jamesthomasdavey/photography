import React from 'react';
import isEmail from 'is-email';
import { useStateWithCallbackLazy as useState } from 'use-state-with-callback';

import submitForm from './submitForm';

const ContactForm = () => {
  const [state, setState] = useState({
    formValues: {
      name: '',
      email: '',
      message: '',
    },
    formErrors: {
      name: '',
      email: '',
      message: '',
    },
    isSubmitting: false,
    hasFailed: false,
    hasSubmitted: false,
  });
  const handleChange = (e, fieldName) => {
    e.preventDefault();
    const newState = { ...state };
    newState.formValues[fieldName] = e.target.value;
    newState.formErrors[fieldName] = '';
    setState(newState);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const superSetState = setState;
    setState({ ...state, isSubmitting: true }, () => {
      const formErrors = { name: '', email: '', message: '' };
      if (!state.formValues.name.trim()) {
        formErrors.name = 'Please enter your name.';
      }
      if (!isEmail(state.formValues.email.trim())) {
        formErrors.email = 'Please enter a valid email address.';
      }
      if (!state.formValues.email.trim()) {
        formErrors.email = 'Please enter your email address.';
      }
      if (state.formValues.message.length < 10) {
        formErrors.message = 'Message must be at least 10 characters.';
      }
      if (!state.formValues.message.trim()) {
        formErrors.message = 'Please enter a message.';
      }
      if (formErrors.name || formErrors.email || formErrors.message) {
        superSetState({ ...state }, () => {
          console.log('why');
        });
      } else {
        console.log('no error here');
        submitForm(
          state.formValues.name,
          state.formValues.email,
          state.formValues.message
        );
      }
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name-field'>Name</label>
        <input
          id='name-field'
          type='text'
          value={state.formValues.name}
          onChange={e => handleChange(e, 'name')}
        />
        <label htmlFor='email-field'>Email</label>
        <input
          id='email-field'
          type='email'
          value={state.formValues.email}
          onChange={e => handleChange(e, 'email')}
        />
        <label htmlFor='message-field'>Message</label>
        <textarea
          id='message-field'
          value={state.formValues.message}
          onChange={e => handleChange(e, 'message')}
        />
        <input type='submit' value='Send' />
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
