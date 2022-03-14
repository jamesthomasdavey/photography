// packages
import React, { useState } from "react";
import exifr from "exifr";
import { LazyLoadImage } from "react-lazy-load-image-component";

// css
import classes from "./Image.module.css";

const Image = ({ source }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageMetadata, setImageMetadata] = useState({ loaded: false });
  if (!imageMetadata.loaded) {
    exifr
      .parse(source)
      .then((metadata) => {
        setImageMetadata({
          loaded: true,
          alt: metadata.ImageDescription
            ? metadata.ImageDescription
            : "Caption not yet available.",
        });
      })
      .catch((err) => {
        console.log(err);
        setImageMetadata({
          loaded: true,
          alt: "Unable to load caption. Sorry for the inconvenience.",
        });
      });
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const showImage = () => {
    if (imageMetadata.loaded) {
      return (
        <img
          src={source}
          className={[
            classes.image,
            imageLoaded ? classes.visibleImage : classes.hiddenImage,
          ].join(" ")}
          alt={imageMetadata.alt}
        />
      );
    }
  };

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
    <li className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {showImage()}
        {hideLoader()}
      </div>
    </li>
  );
};

export default Image;
