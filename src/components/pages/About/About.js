// packages
import React from 'react';

// components
import ContactForm from './components/ContactForm/ContactForm';

class About extends React.Component {
  state = {};
  render() {
    document.title = 'About | James Thomas Davey';
    return (
      <main>
        <p>this is the about page</p>
        <ContactForm />
      </main>
    );
  }
}

export default About;
