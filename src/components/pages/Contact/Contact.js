// packages
import React from 'react';

// components
import ContactForm from './components/ContactForm/ContactForm';

class Contact extends React.Component {
  state = {};
  render() {
    document.title = 'Contact | James Thomas Davey';
    return (
      <React.Fragment>
        <ContactForm />
      </React.Fragment>
    );
  }
}

export default Contact;
