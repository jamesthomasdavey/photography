// packages
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// css
import classes from './Image.module.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Image = ({ source, alt, vert }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFaded, setImageFaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const showImage = () => {
    if (imageLoaded) {
      return (
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${source})`,
          }}
        ></div>
      );
    }
  };
  const hideLoader = () => {
    if (!imageLoaded) {
      return (
        <LazyLoadImage
          src={source}
          height='0'
          width='0'
          afterLoad={handleImageLoad}
          alt=''
        />
      );
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {showImage()}
        {hideLoader()}
      </div>
    </div>
  );
};

export default Image;
