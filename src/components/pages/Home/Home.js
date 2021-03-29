// packages
import React from 'react';

// components
import Image from './components/Image/Image';

// css
import classes from './Home.module.css';

// img
import img0001 from './img/0001.jpg';
import img0002 from './img/0002.jpg';
import img0003 from './img/0003.jpg';
import img0004 from './img/0004.jpg';
import img0005 from './img/0005.jpg';
import img0006 from './img/0006.jpg';
import img0007 from './img/0007.jpg';
import img0008 from './img/0008.jpg';
import img0009 from './img/0009.jpg';
import img0010 from './img/0010.jpg';
import img0011 from './img/0011.jpg';
import img0012 from './img/0012.jpg';
import img0013 from './img/0013.jpg';
import img0014 from './img/0014.jpg';
import img0015 from './img/0015.jpg';
import img0016 from './img/0016.jpg';
import img0017 from './img/0017.jpg';
import img0018 from './img/0018.jpg';
import img0019 from './img/0019.jpg';
import img0020 from './img/0020.jpg';
import img0021 from './img/0021.jpg';
import img0022 from './img/0022.jpg';
import img0023 from './img/0023.jpg';

const images = [
  {
    src: img0001,
    alt: '',
  },
  {
    src: img0002,
    alt: '',
  },
  {
    src: img0003,
    alt: '',
  },
  {
    src: img0004,
    alt: '',
  },
  {
    src: img0005,
    alt: '',
  },
  {
    src: img0006,
    alt: '',
  },
  {
    src: img0007,
    alt: '',
  },
  {
    src: img0008,
    alt: '',
  },
  {
    src: img0009,
    alt: '',
  },
  {
    src: img0010,
    alt: '',
  },
  {
    src: img0011,
    alt: '',
  },
  {
    src: img0012,
    alt: '',
  },
  {
    src: img0013,
    alt: '',
  },
  {
    src: img0014,
    alt: '',
  },
  {
    src: img0015,
    alt: '',
  },
  {
    src: img0016,
    alt: '',
  },
  {
    src: img0017,
    alt: '',
  },
  {
    src: img0018,
    alt: '',
  },
  {
    src: img0019,
    alt: '',
  },
  {
    src: img0020,
    alt: '',
  },
  {
    src: img0021,
    alt: '',
  },
  {
    src: img0022,
    alt: '',
  },
  {
    src: img0023,
    alt: '',
  },
];

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image.src}
            alt={image.alt}
            vert={image.vert}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
