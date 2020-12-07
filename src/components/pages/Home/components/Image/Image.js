// packages
import React, { useState } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// css
import classes from './Image.module.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Image = ({ source, alt, vert }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const showImage = () => {
    if (imageLoaded) {
      return (
        <ImageFadeIn
          loadAsBackgroundImage={true}
          style={{
            width: '100%',
            height: '100%',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          src={source}
          opacityTransition={2}
          role={alt ? 'img' : undefined}
        />
      );
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {showImage()}
        <LazyLoadImage
          src={source}
          height='0'
          width='0'
          afterLoad={handleImageLoad}
          alt=''
        />
      </div>
    </div>
  );
};

export default Image;
