function submitForm(name, email, message) {
  var destinationEmail = 'xpzyownj';
  var form = document.createElement('form');
  form.setAttribute('action', 'https://formspree.io/' + destinationEmail);
  form.setAttribute('method', 'POST');

  // Subject for your email
  var field = document.createElement('input');
  field.setAttribute('type', 'hidden');
  field.setAttribute('name', '_subject');
  field.setAttribute('value', 'Contact form submitted');
  form.appendChild(field);

  // Contact email address
  field = document.createElement('input');
  field.setAttribute('type', 'hidden');
  field.setAttribute('name', 'email');
  field.setAttribute('value', email);
  form.appendChild(field);

  // Your user's name
  field = document.createElement('input');
  field.setAttribute('type', 'hidden');
  field.setAttribute('name', 'name');
  field.setAttribute('value', name);
  form.appendChild(field);

  // The text message
  field = document.createElement('input');
  field.setAttribute('type', 'hidden');
  field.setAttribute('name', 'message');
  field.setAttribute('value', message);
  form.appendChild(field);

  document.body.appendChild(form);
  form.submit();
}

export default submitForm;
