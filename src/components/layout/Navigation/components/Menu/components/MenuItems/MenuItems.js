import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MenuItems = (props) => {
  const blur = () => {
    document.body.focus();
    props.toggleMenu();
  };
  return (
    <ul>
      <li>
        <Link to='/contact' onClick={blur}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default withRouter(MenuItems);
