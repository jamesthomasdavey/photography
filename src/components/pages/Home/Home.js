import React from 'react';
import ImageFadeIn from 'react-image-fade-in';

import classes from './Home.module.css';

import bgImage from './img/000071450007-B.jpg';

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.innerWrapper}>
          <h1 className={classes.heading}>Under construction</h1>
          <div className={classes.noteWrapper}>
            <p className={classes.note}>
              Hello. I am working on some updates. Be back soon.
            </p>
            <p className={classes.date}>11/18/2020</p>
          </div>
        </div>
        <div className={classes.bgCover} />
        <ImageFadeIn
          style={{
            height: '100%',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          loadAsBackgroundImage
          opacityTransition={4}
          src={bgImage}
        />
      </div>
    );
  }
}

export default Home;
