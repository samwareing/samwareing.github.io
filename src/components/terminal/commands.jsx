import cvData from '../../data/cvData.json';

const commands = {
  about: (key) => {
    const { name, title, location, summary } = cvData.about;
    return [
      name,
      <br key={key + 1} />,
      title,
      <br key={key + 2} />,
      location,
      <br key={key + 3} />,
      summary,
      <br key={key + 4} />,
    ];
  },

  clear: (key) => {
    return [""];
  },

  education: (key) => {
    const result = [];
    let keyCounter = 1;

    cvData.education.forEach((edu, index) => {
      result.push(
        `${edu.degree} - ${edu.institution}`,
        <br key={key + keyCounter++} />,
        `  ${edu.period} - ${edu.location}`,
        <br key={key + keyCounter++} />,
        `  ${edu.grade}`,
        <br key={key + keyCounter++} />,
        `  ${edu.department}`,
        <br key={key + keyCounter++} />
      );

      // Add extra line break between entries (except for the last one)
      if (index < cvData.education.length - 1) {
        result.push(<br key={key + keyCounter++} />);
      }
    });

    return result;
  },

  email: (key) => {
    return [
      "Email me at: ",
      <a href={`mailto:${cvData.contact.email}`} key={key + 1}>
        {cvData.contact.email}
      </a>,
    ];
  },

  experience: (key) => {
    const result = [];
    let keyCounter = 1;

    cvData.experience.forEach((job, jobIndex) => {
      result.push(
        `${job.company} - ${job.title}`,
        <br key={key + keyCounter++} />,
        `  ${job.period}, ${job.location}`,
        <br key={key + keyCounter++} />
      );

      job.description.forEach((paragraph, paraIndex) => {
        result.push(
          `  ${paragraph}`,
          <br key={key + keyCounter++} />
        );
      });

      // Add extra line break between jobs (except for the last one)
      if (jobIndex < cvData.experience.length - 1) {
        result.push(<br key={key + keyCounter++} />);
      }
    });

    return result;
  },

  github: (key) => {
    return [
      "Check out my github at: ",
      <a
        href={cvData.contact.github}
        key={key + 1}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cvData.contact.github}
      </a>,
    ];
  },

  help: (key) => {
    const result = [];
    let keyCounter = 1;

    result.push(
      cvData.helpText.description,
      <br key={key + keyCounter++} />,
      <br key={key + keyCounter++} />
    );

    result.push(
      "Usage:",
      <br key={key + keyCounter++} />,
      `  ${cvData.helpText.usage}`,
      <br key={key + keyCounter++} />,
      <br key={key + keyCounter++} />
    );

    result.push(
      "Available Commands:",
      <br key={key + keyCounter++} />
    );

    const maxLength = Math.max(...cvData.helpText.commands.map(cmd => cmd.name.length));

    cvData.helpText.commands.forEach((cmd) => {
      const padding = ' '.repeat(maxLength - cmd.name.length + 2);
      result.push(
        `  ${cmd.name}${padding}${cmd.description}`,
        <br key={key + keyCounter++} />
      );
    });

    result.push(
      <br key={key + keyCounter++} />,
      cvData.helpText.footer
    );

    return result;
  },

  misc: (key) => {
    const result = [];
    let keyCounter = 1;

    cvData.misc.forEach((item, index) => {
      result.push(item);
      if (index < cvData.misc.length - 1) {
        result.push(<br key={key + keyCounter++} />);
      }
    });

    return result;
  },

  references: (key) => {
    return [cvData.references];
  },

  skills: (key) => {
    const result = [];
    let keyCounter = 1;

    result.push(
      "Programming Languages and Databases:",
      <br key={key + keyCounter++} />
    );
    cvData.skills.programmingLanguagesAndDatabases.forEach((item) => {
      result.push(
        `  ${item}`,
        <br key={key + keyCounter++} />
      );
    });
    result.push(<br key={key + keyCounter++} />);

    result.push(
      "Technologies and Libraries:",
      <br key={key + keyCounter++} />
    );
    cvData.skills.technologiesAndLibraries.forEach((item) => {
      result.push(
        `  ${item}`,
        <br key={key + keyCounter++} />
      );
    });
    result.push(<br key={key + keyCounter++} />);

    result.push(
      "Methodologies:",
      <br key={key + keyCounter++} />
    );
    cvData.skills.methodologies.forEach((item) => {
      result.push(
        `    ${item}`,
        <br key={key + keyCounter++} />
      );
    });

    return result;
  },

  training: (key) => {
    const result = [];
    let keyCounter = 1;

    cvData.training.forEach((org, orgIndex) => {
      result.push(
        `${org.organization}:`,
        <br key={key + keyCounter++} />
      );

      org.courses.forEach((course) => {
        result.push(
          `  ${course.name} - ${course.date}`,
          <br key={key + keyCounter++} />
        );
      });

      // Add extra line break between organisations (except for the last one)
      if (orgIndex < cvData.training.length - 1) {
        result.push(<br key={key + keyCounter++} />);
      }
    });

    return result;
  },

  hello: (key) => {
    return [cvData.easterEggs.hello];
  },
  goodbye: (key) => {
    return [cvData.easterEggs.goodbye];
  },
  more: (key) => {
    return [cvData.easterEggs.more];
  },
  less: (key) => {
    return [cvData.easterEggs.less];
  },
  pwd: (key) => {
    return [cvData.easterEggs.pwd];
  },
  ls: (key) => {
    return [cvData.easterEggs.ls];
  },
  dir: (key) => {
    return [cvData.easterEggs.dir];
  },
  git: (key) => {
    return [cvData.easterEggs.git];
  },
  cp: (key) => {
    return [cvData.easterEggs.cp];
  },
  mv: (key) => {
    return [cvData.easterEggs.mv];
  },
  rm: (key) => {
    return [cvData.easterEggs.rm];
  },
  python: (key) => {
    return [cvData.easterEggs.python];
  },
  go: (key) => {
    return [cvData.easterEggs.go];
  },
  sudo: (key) => {
    return [cvData.easterEggs.sudo];
  }
};

export { commands };
