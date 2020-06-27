import React from 'react';

import classes from './Menu.module.css';

import MenuItems from './components/MenuItems/MenuItems';

const Menu = (props) => {
  return (
    <div
      className={classes.wrapper}
      role='navigation'
      aria-hidden={props.isOpen ? 'false' : 'true'}
    >
      <MenuItems />
    </div>
  );
};

export default Menu;
