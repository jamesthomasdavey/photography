import React from 'react';

import classes from './Resume.module.css';

import downloadicon from './img/downloadicon.svg';

const Resume = () => {
  document.title = 'Resume | James Thomas Davey';
  const downloadResume = () => {
    alert("I haven't added this functionality yet. Sorry dude.");
  };
  const linkHandler = (e, cb) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      cb();
    }
  };
  return (
    <div className={classes.wrapper}>
      <main className={classes.wrapper__inner}>
        <h1 className={classes.nameHeading}>James Thomas Davey</h1>
        <div className={classes.downloadLinkWrapper}>
          <a
            role='button'
            onClick={downloadResume}
            className={classes.downloadLink}
            href='#'
            onKeyPress={(e) => linkHandler(e, downloadResume)}
            onKeyDown={(e) => linkHandler(e, downloadResume)}
          >
            <img alt='Download Resume' src={downloadicon} />
          </a>
        </div>
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
                Responsible for conducting accessibility audits and design
                reviews to comply with a multitude of legal standards. Provided
                consultation services for organizations to minimize risk of
                their websites, mobile apps, and software.
              </p>
              <ul>
                <li>
                  Authored VPAT documents following comprehensive audits within
                  tight deadlines, enabling organizations to sell into the
                  federal government and showcase their accessibility awareness.
                </li>
                <li>
                  Coached large teams of developers and designers from Fortune
                  500 companies of varying industries.
                </li>
                <li>
                  Led remediation efforts to meet WCAG criteria by collaborating
                  with developers, providing guidance ranging from high-level
                  direction to code-level recommendations.
                </li>
                <li>
                  Oversaw long-term projects and maintained strong client
                  relationships, often resulting in future sales and product
                  renewals.
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
              <p>
                Responsible for designing photo templates, configuring image
                software, and supporting a team of photographers, videographers,
                and technicians.
              </p>
              <ul>
                <li>
                  Edited and organized images and videos ranging from portraits,
                  event coverage, and product photography. Optimized digital
                  assets for online and print delivery in large volumes.
                </li>
                <li>
                  Wrote documentation for software, camera, and lighting of
                  complex studio setups, streamlining the creation of marketable
                  photo products.
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section
          className={classes.educationSection}
          aria-labelledby='education'
        >
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
                <span>B.A. in Film and Technocultural Studies (2014)</span>
                <span>Cumulative GPA: 3.72/4.00</span>
                <span>
                  Placed on the Dean's Honors List for five consecutive
                  quarters.
                </span>
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
            <li>Inclusive Design</li>
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
