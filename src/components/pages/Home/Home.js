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
import img0024 from './img/0024.jpg';
import img0025 from './img/0025.jpg';
import img0026 from './img/0026.jpg';
import img0028 from './img/0027.jpg';
import img0027 from './img/0028.jpg';
import img0029 from './img/0029.jpg';
import img0030 from './img/0030.jpg';
import img0031 from './img/0031.jpg';
import img0032 from './img/0032.jpg';
import img0033 from './img/0033.jpg';
import img0034 from './img/0034.jpg';

const images = [
  {
    src: img0001,
  },
  {
    src: img0002,
  },
  {
    src: img0003,
  },
  {
    src: img0004,
  },
  {
    src: img0005,
  },
  {
    src: img0006,
  },
  {
    src: img0007,
  },
  {
    src: img0008,
  },
  {
    src: img0009,
  },
  {
    src: img0010,
  },
  {
    src: img0011,
  },
  {
    src: img0012,
  },
  {
    src: img0013,
  },
  {
    src: img0014,
  },
  {
    src: img0015,
  },
  {
    src: img0016,
  },
  {
    src: img0017,
  },
  {
    src: img0018,
  },
  {
    src: img0019,
  },
  {
    src: img0020,
  },
  {
    src: img0021,
  },
  {
    src: img0022,
  },
  {
    src: img0023,
  },
  {
    src: img0024,
  },
  {
    src: img0025,
  },
  {
    src: img0026,
  },
  {
    src: img0027,
  },
  {
    src: img0028,
  },
  {
    src: img0029,
  },
  {
    src: img0030,
  },
  {
    src: img0031,
  },
  {
    src: img0032,
  },
  {
    src: img0033,
  },
  {
    src: img0034,
  },
];

const Home = () => {
  return (
    <main className={classes.wrapper}>
      <h1 className={classes.visuallyHidden}>
        Photographs by James Thomas Davey
      </h1>
      <ul className={classes.innerWrapper}>
        {images.map((image, index) => (
          <Image key={index} source={image.src} />
        ))}
      </ul>
    </main>
  );
};

export default Home;
