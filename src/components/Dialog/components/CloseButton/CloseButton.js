import React from 'react';

const CloseButton = props => {
  const handleClick = e => {
    if (!e.nativeEvent.metaKey) {
      e.preventDefault();
      props.closeDialog();
    }
  };
  const handleKeyPress = e => {
    if (e.key === ' ') {
      e.preventDefault();
      props.closeDialog();
    }
  };
  const handleKeyDown = e => {
    if (!e.nativeEvent.shiftKey && e.nativeEvent.key === 'Tab') {
      e.preventDefault();
      document.querySelector("[role='dialog'] a").focus();
    }
  };
  return (
    <a
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
      href={`/${props.currentUrl}`}
      aria-label='Close Main Dialog'
      role='button'
    >
      <span aria-hidden='true'>🅧</span>
    </a>
  );
};

export default CloseButton;
