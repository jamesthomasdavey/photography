import React from 'react';

import GalleryLinks from './components/GalleryLinks/GalleryLinks';

const Navigation = props => {
  return (
    <nav aria-label='Galleries'>
      <GalleryLinks
        openGallery={props.openGallery}
        galleries={props.galleries}
        page={props.page}
        closeDialog={props.closeDialog}
      />
    </nav>
  );
};

export default Navigation;
