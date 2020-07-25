import React from 'react';

import classes from './Resume.module.css';

const Resume = () => {
  document.title = 'Resume | James Thomas Davey';
  return (
    <div className={classes.wrapper}>
      <main className={classes.wrapper__inner}>
        <h1 className={classes.nameHeading}>James Thomas Davey</h1>
        <section aria-labelledby='webAccessibilitySpecialist'>
          <h2 className={classes.titleHeading} id='webAccessibilitySpecialist'>
            Web Accessibility Specialist
          </h2>
          <ul className={classes.subtitleList}>
            <li>Seattle, WA</li>
            <li>james.davey@fastmail.com</li>
            <li>(415) 307-8703</li>
          </ul>
          <p className={classes.summary}>
            Digital accessibility expert specializing in front-end web
            development, WCAG and Section 508 compliance, and educating
            developers to improve usability in the digital sphere.
          </p>
        </section>
        <section aria-labelledby='workExperience'>
          <h2 className={classes.subHeading} id='workExperience'>
            Work Experience
          </h2>
          <section aria-labelledby='levelAccess'>
            <h3 className={classes.dateRoleWrapper} id='levelAccess'>
              <div className={classes.dateHeading}>Mar, 2019 - Current</div>
              <div className={classes.roleHeading}>
                Level Access, Accessibility Analyst
              </div>
            </h3>
            <div className={classes.expContent}>
              <p>
                Responsibilities include: writing technical reports and other
                documentation, such as handbooks and bulletins, for use by
                engineering staff, management, and customers, analyzing project
                requests and proposals and engineering data to determine
                feasibility, predictability, cost and production time of
                aerospace or aeronautical product.
              </p>
              <ul>
                <li>
                  Here is a description of one thing that I do. It's probably
                  not all that impressive, actually. I don't even know what I'm
                  doing with my life and I probably won't find happiness.
                </li>
                <li>
                  I also do other things. This is going to be two lines. Butt
                  muncher fart face tool bag stuck in the ether for eternity.
                </li>
                <li>
                  Here is a third bullet, because this is the job that is most
                  relevant to me. Maybe this will make all the difference.
                </li>
                <li>
                  Okay I am gonna go out on a limb here and say that I should be
                  allowed to put in a fourth bullet, based on everything that
                  I've done.
                </li>
              </ul>
            </div>
          </section>
          <section aria-labelledby='orangePhotography'>
            <h3 className={classes.dateRoleWrapper} id='orangePhotography'>
              <div className={classes.dateHeading}>Mar, 2016 - Mar, 2018</div>
              <div className={classes.roleHeading}>
                Orange Photography, Digital Tech
              </div>
            </h3>
            <div className={classes.expContent}>
              <ul>
                <li>
                  Edited, organized, and configured online delivery of a high
                  volume of digital assets for delivery including portraits,
                  event coverage, and product photography.
                </li>
                <li>
                  Created documentation for software, camera, and lighting for
                  complex studio setups. Oversaw all levels of the photographic
                  process.
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section aria-labelledby='education'>
          <h2
            className={[classes.subHeading, classes.educationHeading].join(' ')}
            id='education'
          >
            Education
          </h2>
          <section aria-labelledby='ucDavis'>
            <h3 className={classes.roleHeading} id='ucDavis'>
              University of California, Davis
            </h3>
            <div className={classes.educationContent}>
              <p>
                <span>BA in Film and Technocultural Studies (2014)</span>
                <span>Cumulative GPA: 3.72/4.00</span>
              </p>
            </div>
          </section>
        </section>
        <section aria-labelledby='technicalSkills'>
          <h2 className={classes.subHeading} id='technicalSkills'>
            Technical Skills
          </h2>
          <ul className={classes.skillsList}>
            <li>WCAG</li>
            <li>Section 508</li>
            <li>ADA</li>
            <li>User Experience</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Resume;
