import React from 'react';

const MenuTrigger = props => {
  let currentUrl;
  if (props.page.gallery.isOpen) {
    currentUrl = props.galleries[props.page.gallery.currentIndex].url;
  }
  const handleClick = e => {
    if (!e.nativeEvent.metaKey) {
      e.preventDefault();
      props.openDialog();
    }
  };
  const handleKeyPress = e => {
    if (e.key === ' ') {
      e.preventDefault();
      props.openDialog();
    }
  };
  return (
    <a
      href={`/${currentUrl}#hud`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      aria-label='Open Main Dialog'
      role='button'
    >
      <span aria-hidden='true'>🍔</span>
    </a>
  );
};

export default MenuTrigger;
