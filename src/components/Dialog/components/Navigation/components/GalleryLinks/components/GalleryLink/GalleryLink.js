import React from 'react';

const GalleryLink = props => {
  const keyDownHandler = e => {
    if (props.isFirst) {
      if (e.nativeEvent.shiftKey && e.nativeEvent.key === 'Tab') {
        e.preventDefault();
        document.querySelector("[aria-label='Close Main Dialog']").focus();
      }
    }
  };
  const clickHandler = e => {
    e.preventDefault();
    if (props.isCurrent) {
      props.closeDialog();
    } else {
      props.openGallery(props.galleryIndex);
    }
  };
  return (
    <a
      href={`/${props.gallery.url}`}
      onKeyDown={keyDownHandler}
      aria-current={props.isCurrent}
      onClick={clickHandler}
    >
      {props.isCurrent && '-'}
      {props.gallery.name}
      {props.isCurrent && '-'}
    </a>
  );
};

export default GalleryLink;
