import React from 'react';

import classes from './MenuButton.module.css';

const MenuButton = (props) => {
  const handleClick = (e, cb) => {
    e.preventDefault();
    cb();
  };
  const handleKeyPress = (e, cb) => {
    if (e.key === ' ') {
      e.preventDefault();
      cb();
    }
  };
  let innerContent = (
    <React.Fragment>
      <span
        aria-hidden='true'
        class={[
          classes.bar,
          classes.topBar,
          props.isOpen ? classes.closeBar : '',
          !props.isOpen && props.hasBeenOpened ? classes.openBar : '',
        ].join(' ')}
      ></span>
      <span
        aria-hidden='true'
        class={[
          classes.bar,
          classes.middleBar,
          props.isOpen ? classes.closeBar : '',
          !props.isOpen && props.hasBeenOpened ? classes.openBar : '',
        ].join(' ')}
      ></span>
      <span
        aria-hidden='true'
        class={[
          classes.bar,
          classes.bottomBar,
          props.isOpen ? classes.closeBar : '',
          !props.isOpen && props.hasBeenOpened ? classes.openBar : '',
        ].join(' ')}
      ></span>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {/* eslint-disable-next-line */}
      <a
        href='#'
        onClick={(e) => handleClick(e, props.toggleMenu)}
        onKeyPress={(e) => handleKeyPress(e, props.toggleMenu)}
        aria-expanded={props.isOpen ? 'true' : 'false'}
        aria-label='Navigation'
        className={classes.wrapper}
        role='button'
      >
        {innerContent}
      </a>
    </React.Fragment>
  );
};

export default MenuButton;
