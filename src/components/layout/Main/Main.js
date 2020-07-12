// packages
import React from 'react';

// css
import classes from './Main.module.css';

const Main = (props) => {
  return (
    <div role='main' className={classes.wrapper}>
      {props.children}
    </div>
  );
};

export default Main;
