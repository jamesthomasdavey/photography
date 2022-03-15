// packages
import React, { useState } from "react";
import EXIF from "exif-js";
import exifr from "exifr";
import { LazyLoadImage } from "react-lazy-load-image-component";

// css
import classes from "./Image.module.css";

const Image = ({ source }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageMetadata, setImageMetadata] = useState({
    loaded: false,
    alt: "Loading alt text...",
  });

  if (imageLoaded && !imageMetadata.loaded) {
    const imgSrc = document.getElementById(source);
    EXIF.getData(imgSrc, function () {
      const imageDescription = EXIF.getAllTags(this).ImageDescription;
      console.log(imageDescription);
      setImageMetadata({
        loaded: true,
        alt: imageDescription
          ? imageDescription
          : "Error importing caption. Sorry for the inconvenience.",
      });
    });

    // exifr
    //   .parse(source)
    //   .then((metadata) => {
    //     setImageMetadata({
    //       loaded: true,
    //       alt: metadata.ImageDescription
    //         ? metadata.ImageDescription
    //         : "Caption not yet available.",
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setImageMetadata({
    //       loaded: true,
    //       alt: "Unable to load caption. Sorry for the inconvenience.",
    //     });
    //   });
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
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

  const showImage = () => {
    return (
      <img
        src={source}
        className={[
          classes.image,
          imageLoaded ? classes.visibleImage : classes.hiddenImage,
        ].join(" ")}
        alt={imageMetadata.alt}
        id={source}
      />
    );
  };

  return (
    <li className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {hideLoader()}
        {showImage()}
      </div>
    </li>
  );
};

export default Image;
