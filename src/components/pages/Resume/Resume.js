import React from 'react';

import classes from './Resume.module.css';

import downloadicon from './img/downloadicon.svg';
import resumePdf from './pdf/James Thomas Davey - Resume.pdf';

import resumeData from './../../../data/resumeData';

const ResumePrint = () => {
  document.title = 'Resume | James Thomas Davey';
  document
    .querySelector('html')
    .setAttribute('style', 'background-color: #8fd2af;');
  return (
    <div className={classes.wrapper}>
      <main className={classes.wrapper__inner}>
        <h1 className={classes.nameHeading}>{resumeData.name}</h1>
        <div className={classes.downloadLinkWrapper}>
          <a
            className={classes.downloadLink}
            href={resumePdf}
            download='James Thomas Davey - Resume'
          >
            <img alt='Download Resume' src={downloadicon} />
          </a>
        </div>
        <section>
          {/* <h2 className={classes.titleHeading}>{resumeData.jobTitle}</h2> */}
          <ul className={classes.subtitleList}>
            <li>{resumeData.location}</li>
            <li>
              <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
            </li>
            <li>{resumeData.phoneNumber}</li>
          </ul>
          <p className={classes.summary}>{resumeData.summary}</p>
        </section>
        <section aria-labelledby='workExperienceHeading'>
          <h2 id='workExperienceHeading' className={classes.subHeading}>
            Work Experience
          </h2>
          {resumeData.workExperiences.map(workExperience => {
            return (
              <section>
                <h3 className={classes.dateRoleWrapper}>
                  <div className={classes.dateHeading}>
                    {workExperience.dates}
                  </div>
                  <div className={classes.roleHeading} role='text'>
                    {workExperience.company}, {workExperience.title}
                  </div>
                </h3>
                <div className={classes.expContent}>
                  {workExperience.summary && <p>{workExperience.summary}</p>}
                  <ul>
                    {workExperience.responsibilities.map(responsibility => {
                      return <li>{responsibility}</li>;
                    })}
                  </ul>
                </div>
              </section>
            );
          })}
        </section>
        <section
          aria-labelledby='educationHeading'
          className={classes.educationSection}
        >
          <h2
            id='educationHeading'
            className={[classes.subHeading, classes.educationHeading].join(' ')}
          >
            Education
          </h2>
          <section>
            <h3
              className={[classes.roleHeading, classes.schoolHeading].join(' ')}
            >
              {resumeData.education.school}
            </h3>
            <div className={classes.educationContent}>
              <p>
                <span>{resumeData.education.degree}</span>
              </p>
            </div>
          </section>
        </section>
        <section aria-labelledby='technicalSkillsHeading'>
          <h2 id='technicalSkillsHeading' className={classes.subHeading}>
            Technical Skills
          </h2>
          <ul className={classes.skillsList}>
            {resumeData.technicalSkills.map(technicalSkill => {
              return <li>{technicalSkill}</li>;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ResumePrint;
