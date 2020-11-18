const resumeData = {
  name: 'James Thomas Davey',
  jobTitle: 'Accessibility Analyst',
  location: 'Seattle, WA',
  email: 'james.davey@fastmail.com',
  phoneNumber: '(415)-307-8703',
  summary:
    'Digital accessibility expert with DHS Trusted Tester certification, specializing in front-end web development, WCAG and Section 508 conformance, and educating developers and designers to improve usability across all platforms.',
  workExperiences: [
    {
      dates: 'Jul, 2020 - Present',
      company: 'Kaiser Permanente',
      title: 'Accessibility Design Specialist (Contract)',
      summary:
        "Responsible for design reviews and risk assessment for in-development components on Kaiser's front page and sitewide, to be used by millions of current and future members.",
      responsibilities: [
        'Collaborated with the design team to maximize accessibility and usability of components before handing off to the development team.',
        "Defined new accessibility optimizations for Kaiser's design system documentation, upholding their standards as a healthcare industry leader.",
      ],
    },
    {
      dates: 'Mar, 2019 - Present',
      company: 'Level Access',
      title: 'Senior Accessibility Analyst',
      summary:
        'Responsible for conducting accessibility audits to comply with legal standards, helping organizations to minimize risk for their websites, mobile applications, and software.',
      responsibilities: [
        //and showcase their accessibility awareness.
        'Oversaw long-term projects and maintained strong client relationships, resulting in multiple future sales and service product renewals.',
        'Led remediation efforts to meet WCAG success criteria, providing guidance ranging from high-level direction to code-level recommendations.',
        'Authored VPAT documents following comprehensive audits within tight deadlines, enabling organizations to sell into the federal government',
        'Conducted training sessions for developers and designers from Fortune 500 companies.', // of varying industries?
      ],
    },
    {
      dates: 'Mar, 2018 - Mar, 2019',
      company: 'Freelance',
      title: 'Web Developer',
      // summary:
      //   'Designed and launched web applications using modern front-end technology for businesses and personal commissions.',
      responsibilities: [
        'Built websites using VanillaJS and JavaScript frameworks and libraries such as React, Mongoose, and Express with Node.js.',
        'Implemented advanced JavaScript concepts such as promises, async/await, callbacks, recursion, and closures.',
      ],
    },
    {
      dates: 'Mar, 2016 - Mar, 2018',
      company: 'Orange Photography',
      title: 'Digital Tech',
      // summary:
      //   'Responsible for designing photo templates, configuring image software, and supporting a team of photographers, videographers, and technicians.',
      responsibilities: [
        // 'Edited, organized, and optimized digital assets for online and print delivery in large volumes.',
        'Designed photo templates, configured image software, and supported a team of photographers, videographers, and technicians.',
        'Wrote documentation for software, camera, and lighting of complex studio setups, streamlining the creation of marketable photo products.',
      ],
    },
  ],
  education: {
    school: 'University of California, Davis',
    degree: 'B.A. in Film and Technocultural Studies (2014)',
  },
  technicalSkills: [
    'WCAG',
    'Section 508',
    'ADA',
    'User Experience',
    'Inclusive Design',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
  ],
};

export default resumeData;
