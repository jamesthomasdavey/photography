import React from 'react';

import classes from './ResumePrint.module.css';

import externalicon from './img/externalicon.svg';

import resumeData from '../../../data/resumeData';

const Resume = () => {
  document.title = 'Resume | James Thomas Davey';
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.nameHeading}>
        <a href='https://jamesthomasdavey.com/resume'>
          {resumeData.name}{' '}
          <img
            className={classes.externalLinkIcon}
            src={externalicon}
            alt='external link'
          />
        </a>
      </h1>
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
      <section>
        <h2 className={classes.subHeading}>Work Experience</h2>
        {resumeData.workExperiences.map(workExperience => {
          return (
            <section>
              <h3 className={classes.dateRoleWrapper}>
                <div className={classes.dateHeading}>
                  {workExperience.dates}
                </div>
                <div className={classes.roleHeading}>
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
      <section className={classes.educationSection}>
        <h2
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
      <section>
        <h2 className={classes.subHeading}>Technical Skills</h2>
        <ul className={classes.skillsList}>
          {resumeData.technicalSkills.map(technicalSkill => {
            return <li>{technicalSkill}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
