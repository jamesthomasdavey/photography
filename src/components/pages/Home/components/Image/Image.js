// packages
import React from 'react';
import ImageFadeIn from 'react-image-fade-in';

// css
import classes from './Image.module.css';

const Image = ({ source, alt }) => (
  <div className={classes.wrapper}>
    <div className={classes.innerWrapper}>
      {/* <div className={classes.blank} /> */}
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
  </div>
);

export default Image;
