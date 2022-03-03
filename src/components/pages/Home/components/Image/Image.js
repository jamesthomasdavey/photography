// packages
import React, { useState } from 'react';
import exifr from 'exifr';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// css
import classes from './Image.module.css';

const Image = ({ source }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageMetadata, setImageMetadata] = useState({ loaded: false });
  if (!imageMetadata.loaded) {
    exifr
      .parse(source)
      .then(metadata => {
        setImageMetadata({
          loaded: true,
          alt: metadata.ImageDescription
            ? metadata.ImageDescription
            : 'Caption not yet available.',
        });
      })
      .catch(err => console.log(err));
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const showImage = () => {
    if (imageLoaded && imageMetadata.loaded) {
      return (
        <React.Fragment>
          {/* <div
            className={classes.img}
            style={{
              backgroundImage: `url(${source})`,
            }}
            role='img'
            aria-label={imageMetadata.alt}
          /> */}
          <img src={source} className={classes.image} alt={imageMetadata.alt} />
        </React.Fragment>
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
    <li className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {showImage()}
        {hideLoader()}
      </div>
    </li>
  );
};

export default Image;
