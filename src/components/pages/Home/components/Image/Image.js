// packages
import React, { useState } from "react";
import EXIF from "exif-js";
import exifr from "exifr";
import { LazyLoadImage } from "react-lazy-load-image-component";

// css
import classes from "./Image.module.css";

const Image = ({ source }) => {
  const [imageScrolled, setImageScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageMetadata, setImageMetadata] = useState({
    loaded: false,
    alt: "Loading alt text...",
  });

  if (imageLoaded && !imageMetadata.loaded) {
    const imgSrc = document.getElementById(source);
    EXIF.getData(imgSrc, function () {
      const imageDescription = EXIF.getAllTags(this).ImageDescription;
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

  const handleImageScrolled = () => {
    setImageScrolled(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const hideLoaderOnScroll = () => {
    if (!imageScrolled) {
      return (
        <LazyLoadImage
          src={source}
          height="0"
          width="0"
          afterLoad={handleImageScrolled}
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
          imageScrolled ? classes.visibleImage : classes.hiddenImage,
        ].join(" ")}
        alt={imageMetadata.alt}
        id={source}
        onLoad={handleImageLoad}
      />
    );
  };

  return (
    <li className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {hideLoaderOnScroll()}
        {showImage()}
      </div>
    </li>
  );
};

export default Image;
