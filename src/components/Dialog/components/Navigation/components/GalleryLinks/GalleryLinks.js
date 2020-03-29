import React from 'react';

import GalleryLink from './components/GalleryLink/GalleryLink';

const GalleryLinks = props => {
  const galleryLinks = props.galleries.map((gallery, i) => {
    let isCurrent;
    if (props.page.gallery.isOpen) {
      if (props.page.gallery.currentIndex === i) {
        isCurrent = true;
      }
    }
    return (
      <li key={i}>
        <GalleryLink
          gallery={gallery}
          galleryIndex={i}
          openGallery={props.openGallery}
          isCurrent={isCurrent}
          isFirst={i === 0}
          closeDialog={props.closeDialog}
        />
      </li>
    );
  });
  return <ul>{galleryLinks}</ul>;
};

export default GalleryLinks;
