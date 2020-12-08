// packages
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// css
import classes from './Image.module.css';

const Image = ({ source, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
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
          aria-label={alt ? alt : undefined}
        />
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
