// packages
import React, { useState } from "react";
import exifr from "exifr";
import { LazyLoadImage } from "react-lazy-load-image-component";

// css
import classes from "./Image.module.css";

const Image = ({ source }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageMetadata, setImageMetadata] = useState({
    loaded: false,
    alt: "",
    landscape: false,
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const showImage = () => {
    if (imageLoaded && imageMetadata.loaded) {
      return (
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${source})`,
          }}
          aria-hidden={imageMetadata.alt ? undefined : "true"}
          aria-label={imageMetadata.alt}
        />
      );
    }
  };

  if (!imageMetadata.loaded) {
    exifr
      .parse(source)
      .then((metadata) => {
        setImageMetadata({
          loaded: true,
          alt: metadata.ImageDescription ? metadata.ImageDescription : "",
          landscape: metadata.ExifImageHeight < metadata.ExifImageWidth,
        });
      })
      .catch((err) => console.log(err));
  }

  const hideLoader = () => {
    if (!imageLoaded) {
      return (
        <LazyLoadImage
          src={source}
          height="0"
          width="0"
          afterLoad={handleImageLoad}
          alt=""
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
