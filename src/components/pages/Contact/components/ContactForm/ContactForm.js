// packages
import React from 'react';
import isEmail from 'is-email';

// css
import classes from './ContactForm.module.css';

// functions
import submitForm from './functions/submitForm';
import isEmpty from './functions/isEmpty';

// img
import errorIcon from './img/error-icon.svg';

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    errors: {},
    focus: '',
    isSubmitting: false,
    hasFailed: false,
    hasSubmitted: false,
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true }, () => {
      this.checkForErrors(() => {
        this.setState(
          {
            errors: {},
            focus: '',
            hasFailed: false,
            hasSubmitted: true,
          },
          () => {
            submitForm(this.state.name, this.state.email, this.state.message);
          }
        );
      });
    });
  };
  handleChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.setState({ [fieldName]: fieldValue });
  };
  refocus = () => {
    if (this.state.focus === 'name') {
      this.nameInput.focus();
    } else if (this.state.focus === 'email') {
      this.emailInput.focus();
    } else if (this.state.focus === 'message') {
      this.messageTextarea.focus();
    }
  };
  checkForErrors = (cb) => {
    const errors = {};
    if (!this.state.name) {
      errors.name = 'Please enter your name.';
    }
    if (!isEmail(this.state.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!this.state.email) {
      errors.email = 'Please enter your email address.';
    }
    if (this.state.message.length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }
    if (!this.state.message) {
      errors.message = 'Please enter a message.';
    }
    let hasFailed = !isEmpty(errors);
    if (this.state.hasFailed) {
      hasFailed = true;
    }
    let focus;
    if (cb) {
      if (errors.message) {
        focus = 'message';
      }
      if (errors.email) {
        focus = 'email';
      }
      if (errors.name) {
        focus = 'name';
      }
    }
    let isSubmitting = false;
    if (cb) {
      if (isEmpty(errors)) {
        isSubmitting = true;
      }
    }
    this.setState({ errors, hasFailed, isSubmitting, focus }, () => {
      if (isEmpty(errors)) {
        if (cb) {
          cb();
        }
      } else {
        this.refocus();
      }
    });
  };
  render() {
    let errorIconImage;
    if (!isEmpty(this.state.errors)) {
      errorIconImage = (
        <img src={errorIcon} alt='error' className={classes.errorIconImage} />
      );
    }
    return (
      <div className={classes.wrapper}>
        <form onSubmit={this.handleFormSubmit} autocomplete='on'>
          <fieldset>
            <legend>Send a Message</legend>
            <div>
              <label for='name'>Name</label>
              <input
                ref={(input) => {
                  this.nameInput = input;
                }}
                id='name'
                name='name'
                type='text'
                aria-describedby={this.state.errors.name ? 'name-error' : ''}
                value={this.state.name}
                onChange={this.handleChangeInput}
              />
              {this.state.errors.name && (
                <span id='name-error'>
                  {errorIconImage}
                  {this.state.errors.name}
                </span>
              )}
            </div>
            <div>
              <label for='email'>Email</label>
              <input
                ref={(input) => {
                  this.emailInput = input;
                }}
                id='email'
                name='email'
                type='email'
                aria-describedby={this.state.errors.email ? 'email-error' : ''}
                value={this.state.email}
                onChange={this.handleChangeInput}
              />
              {this.state.errors.email && (
                <span id='email-error'>
                  {errorIconImage}
                  {this.state.errors.email}
                </span>
              )}
            </div>
            <div>
              <label for='message'>Message</label>
              <textarea
                ref={(textarea) => {
                  this.messageTextarea = textarea;
                }}
                id='message'
                name='message'
                aria-describedby={
                  this.state.errors.message ? 'message-error' : ''
                }
                value={this.state.message}
                onChange={this.handleChangeInput}
              />
              {this.state.errors.message && (
                <span id='message-error'>
                  {errorIconImage}
                  {this.state.errors.message}
                </span>
              )}
            </div>
          </fieldset>
          <input type='submit' value='Send' />
        </form>
      </div>
    );
  }
}

export default ContactForm;
