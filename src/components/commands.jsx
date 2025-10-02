const commands = {
  about: (key) => {
    return [
      "Sam Wareing",
      <br key={key + 1} />,
      "Senior Full Stack Developer",
      <br key={key + 2} />,
      "Coventry, UK",
      <br key={key + 3} />,
      "Highly skilled and results driven Senior Software Developer with 7 years of experience in full stack web development. Recently delivered a microservices platform that improved throughput by 100,000x while reducing costs by £10k/month. Expert in Python, Go, and modern DevOps practices, seeking a new challenge.",
      <br key={key + 3} />,
    ];
  },

  clear: (key) => {
    return [""];
  },

  // cv: (key) => {
  //   return ["If you would like to download my CV as a .pdf click here."];
  // },

  education: (key) => {
    return [
      "Physics and Technology of Nuclear Reactors MSc. - University of Birmingham",
      <br key={key + 1} />,
      "  Sep 2017 - Dec 2018 - Birmingham, UK",
      <br key={key + 2} />,
      "  Distinction",
      <br key={key + 3} />,
      "  School of Physics and Astronomy",
      <br key={key + 4} />,
      <br key={key + 5} />,
      "Nuclear Science and Materials BSc.- University of Birmingham",
      <br key={key + 6} />,
      "  Sep 2014 - Jun 2017 - Birmingham, UK",
      <br key={key + 7} />,
      "  2:1",
      <br key={key + 8} />,
      "  School of Metallurgy and Materials",
      <br key={key + 9} />,
    ];
  },

  email: (key) => {
    return [
      "Email me at: ",
      <a href="mailto:samwareing@outlook.com" key={key + 1}>
        samwareing@outlook.com
      </a>,
    ];
  },

  experience: (key) => {
    return [
      "Colorifix - Senior Full Stack Developer",
      <br key={key + 1} />,
      "  Oct 2023 – Present, Coventry, UK",
      <br key={key + 2} />,
      "  Led full stack development and delivery of the Webclient product, using Python (FastAPI, Neo4J), Go (PostgreSQL) and VueJS. Webclient is a web service and portal allowing customers to analyse large amounts of scientific IoT data originating from Colorifix biofermentors, as well as creating scientific reports and tracking inventory.",
      <br key={key + 3} />,
      "Took full ownership of the project, and provided technical leadership to junior colleagues. Directed system architecture and DevOps strategy, overseeing GitLab CI/CD, and k6 load testing. Responsible for stakeholder management with international clients, leading team meetings, and delivering presentations to the company at large.",
      <br key={key + 4} />,
      "Spearheaded the release of Webclient to global customers, via Google Cloud Platform (GCP). Redesigned the system into a cloud-native microservice architecture, building a new high performance service in Go with Kafka. Write throughput was improved by over 5 orders of magnitude - allowing the company to achieve real-time data analytics, scaling up from 3 to 100s of fermentors, whilst simultaneously reducing occurrences of data loss to zero, and saving over £10,000 per month on cloud costs.",
      <br key={key + 5} />,
      <br key={key + 6} />,
      "Black Cow Technology - Software Developer",
      <br key={key + 7} />,
      "  Sep 2022 – Sep 2023, Reading, UK",
      <br key={key + 8} />,
      "  Backend software development for the Multiplayer Server (MPS) and Authentication Service projects. Development using Python, FastAPI, SQLAlchemy, Redis and AWS. Implemented features for the MPS library code for multiple player connection, delivering a scalable, high-performance multiplayer platform capable of supporting large concurrent player sessions. Designed developer friendly APIs, allowing game developers to implement multiplayer functionality with ease, reducing typical time to market by 60%. Implemented a comprehensive load testing suite (k6) and CLI tooling (Rust) to support rapid development cycles.",
      <br key={key + 9} />,
      <br key={key + 10} />,
      "Defence Contractor - Computational Physicist",
      <br key={key + 11} />,
      "  Oct 2018 – Sep 2022, Reading, UK",
      <br key={key + 12} />,
      "  Confidential scientific software development work. Software development on a novel Monte Carlo radiation physics code for GPU (C++), an interface for deterministic radiation physics code (Python), and an internal web portal (PHP/MariaDB) serving 50+ users across 4 departments. Agile collaboration with developers in the UK and the US.",
      <br key={key + 13} />,
      <br key={key + 14} />,
      "Culham Centre for Fusion Energy (CCFE) - Industrial project",
      <br key={key + 15} />,
      "  Jun 2018 – Sep 2018, Abingdon, UK",
      <br key={key + 16} />,
      "  An industrial research project in the Neutronics Team. Software development work on the integration of a custom module (Fortran95) within the Serpent Monte Carlo Reactor Physics code (C).",
      <br key={key + 17} />,
    ];
  },

  github: (key) => {
    return [
      "Check out my github at: ",
      <a
        href="https://github.com/samwareing"
        key={key + 1}
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/samwareing
      </a>,
    ];
  },

  help: (key) => {
    return [
      "Help:",
      <br key={key + 1} />,
      "  Type one of the following commands and press enter:",
      <br key={key + 2} />,
      '    "about" : prints a message about me',
      <br key={key + 3} />,
      '    "clear" : clears the display',
      // <br key={key + 4} />,
      // '    "cv" : prints a link to download my curriculum vitae',
      <br key={key + 5} />,
      '    "education" : prints a message about my education',
      <br key={key + 6} />,
      '    "email" : prints my email address',
      <br key={key + 7} />,
      '    "experience" : prints a message about my career experience',
      <br key={key + 8} />,
      '    "github" : prints my github site',
      <br key={key + 9} />,
      '    "help" : prints this help message',
      <br key={key + 10} />,
      '    "misc" : prints a message about me as a person',
      <br key={key + 11} />,
      '    "phone" : prints my phone number',
      <br key={key + 12} />,
      '    "references" : prints a message about my references',
      <br key={key + 13} />,
      '    "skills" : prints a message about my developer skills',
      <br key={key + 14} />,
      '    "training" : prints a message about my professional training qualifications',
      <br key={key + 15} />,
    ];
  },

  misc: (key) => {
    return [
      "Music lover",
      <br key={key + 1} />,
      "15+ years of experience with the guitar and the piano",
      <br key={key + 2} />,
      "Plays in an indie rock band ",
      <br key={key + 3} />,
      "Enjoys the gym",
      <br key={key + 4} />,
      "Full UK drivers license",
    ];
  },

  phone: (key) => {
    return [
      "Phone me at: ",
      <a href="tel:+447903633897" key={key + 1}>
        +44 (0)7903 633897
      </a>,
    ];
  },

  references: (key) => {
    return ["References are available upon request, try typing \"email\"."];
  },

  skills: (key) => {
    return [
      "Programming Languages and Databases:",
      <br key={key + 1} />,
      "  Go, Python, VueJS (TypeScript, JavaScript, HTML and CSS)",
      <br key={key + 2} />,
      "  PostgreSQL, Neo4J",
      <br key={key + 3} />,
      "  Bash, C/C++, Rust",
      <br key={key + 4} />,
      <br key={key + 5} />,
      "Technologies and Libraries:",
      <br key={key + 6} />,
      "  Linux, git, Docker, ",
      <br key={key + 7} />,
      "  FastAPI, Neomodel, SQLAlchemy, Alembic, Pydantic, Pytest,",
      <br key={key + 8} />,
      "  ReactJS, Postman, k6, GCP, Kafka, AWS",
      <br key={key + 9} />,
      <br key={key + 10} />,
      "Methodologies:",
      <br key={key + 11} />,
      "    Test Driven Development, ShapeUp, Agile, Scrum, Kanban",
      <br key={key + 12} />,
    ];
  },

  training: (key) => {
    return [
      "Learning Tree International - London, UK:",
      <br key={key + 1} />,
      "  HTML5, CSS3 and JavaScript: Platform-Independent Web Development - Feb 2022",
      <br key={key + 2} />,
      "  Introduction to SQL Programming - Dec 2021",
      <br key={key + 3} />,
      "  Introduction to Data Science, Machine Learning & AI using Python - Mar 2021",
      <br key={key + 4} />,
      "  DevOps Foundation® (DOFD) - Nov 2020",
      <br key={key + 5} />,
      "  Advanced Python: Best Practices and Design Patterns - Apr 2020",
      <br key={key + 6} />,
      "  Agile Fundamentals - Sep 2019",
      <br key={key + 7} />,
      "  Introduction to Python - Aug 2019",
      <br key={key + 8} />,
      <br key={key + 9} />,
      "JB International - London, UK:",
      <br key={key + 10} />,
      "  C++ Advanced, Modern C++11/14/17 - May 2019",
      <br key={key + 11} />,
      "  C++ Introduction - March 2019",
      <br key={key + 12} />,
    ];
  },

  hello: (key) => {
    return ["Hi. Try typing \"help\"."];
  },
  goodbye: (key) => {
    return ["No, please don't go! Try typing \"help\"."];
  },
  more: (key) => {
    return ["Don't be greedy. Try typing \"help\"."];
  },
  less: (key) => {
    return ["Less is sometimes more. Try typing \"help\"."];
  },
  pwd: (key) => {
    return ["You're right where you need to be. Try typing \"help\"."];
  },
  ls: (key) => {
    return ["What were you looking for? Try typing \"help\""];
  },
  dir: (key) => {
    return ["What were you looking for? Try typing \"help\"."];
  },
  git: (key) => {
    return ["How rude! Try typing \"help\"."];
  },
  cp: (key) => {
    return ["Now why would you want to do that? Try typing \"help\"."];
  },
  mv: (key) => {
    return ["I don't think so. Try typing \"help\"."];
  },
  rm: (key) => {
    return ["I really don't think so. Try typing \"help\"."];
  },
  python: (key) => {
    return ["I really really don't think so. Try typing \"help\"."];
  },
  go: (key) => {
    return ["I really really don't think so. Try typing \"help\"."];
  },
  sudo: (key) => {
    return ["That's mean. Try typing \"help\"."]
  }
};

export { commands };
