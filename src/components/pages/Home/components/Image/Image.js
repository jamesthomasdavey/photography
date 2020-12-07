// packages
import React from 'react';
import ImageFadeIn from 'react-image-fade-in';

// css
import classes from './Image.module.css';

const Image = ({ source, alt }) => (
  <div className={classes.wrapper}>
    <ImageFadeIn
      loadAsBackgroundImage={true}
      style={{
        height: '100%',
        width: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      src={source}
      opacityTransition={2}
      role={alt ? 'img' : false}
    />
  </div>
);

export default Image;
