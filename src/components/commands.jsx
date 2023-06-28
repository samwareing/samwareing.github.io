const commands = {
  about: (key) => {
    return [
      "Sam Wareing",
      <br key={key + 1} />,
      "Computational Physicist",
      <br key={key + 2} />,
      "Reading, UK",
      <br key={key + 3} />,
      "Highly trained and motivated software developer with a background in physics. Five years of experience in software development including asynchronous back end development and database management, physics simulation, GUI development. Efficient self learner. Works well in a team.",
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
      "Black Cow Technology - Software Developer",
      <br key={key + 1} />,
      "  Sep 2022 – Current, Oxford, UK",
      <br key={key + 2} />,
      "  Back end software development working for the Multiplayer Server (MPS) project. Development primarily in Python, making heavy use of asynchronous programming (asyncio), SQLAlchemy and Alembic via the Starlette(/FastAPI) web framework. MPS allows simultaneous user connection and interaction and was designed with scalability in mind. I was responsible for implementing new request/response features, implementing database structure improvements and adding configuration, validation and other utilities. Gained experience using Docker. Used Postman as a HTTP and websocket client. Maintained load testing tools using k6. Performed code review for other developers. Self lead a project to design and implement a bespoke webssocket client using the Textual Python package. Helped to develop some bespoke tools using Rust.",
      <br key={key + 3} />,
      <br key={key + 4} />,
      "Defence Contractor - Computational Physicist",
      <br key={key + 5} />,
      "  Oct 2020 – Sep 2022, Reading, UK",
      <br key={key + 6} />,
      "  Confidential work on GUI development (Python, Tkinter) and physics simulation (Python and C++). Recent experience in database management (SQL/MariaDB) and website development (PHP and JavaScript). Working in a collaborative agile software development team (SCRUMBAN), with developers at home in the UK and the United States. Software development work on the implementation of a new Monte Carlo gamma-electron physics simulation code (C++), with  GPU architecture capability. Software development work extending an existing deterministic radiation transport code, creating and implementing new simulation algorithms (Python), as well as developing a new GUI for it (Python, Tkinter)",
      <br key={key + 7} />,
      <br key={key + 8} />,
      "Defence Contractor - Graduate Physicist",
      <br key={key + 9} />,
      "  Sep 2018 – Oct 2020, Reading, UK",
      <br key={key + 10} />,
      "  A highly competitive graduate scheme role that included multiple placements in different departments throughout the company. Scientific research work producing scientific technical papers. Software development placements leading towards my current role as a computational physicist. This graduate scheme involved a project management placement to produce an in house statistics technical training module.",
      <br key={key + 11} />,
      <br key={key + 12} />,
      "Culham Centre for Fusion Energy (CCFE) - Industrial project",
      <br key={key + 13} />,
      "  Jun 2018 – Sep 2018, Abingdon, UK",
      <br key={key + 14} />,
      "  An industrial research project working for CCFE. This masters project was an invaluable first experience of software development for physics simulation codes. Software development work on the integration of CCFE's MCR2S code (F95) with the Monte Carlo Reactor Physics code Serpent (C). This work is used to calculate gamma ray dose levels of a nuclear fusion reactor post irradiation, in order to assess radiation risk to reactor maintenance workers.",
      <br key={key + 15} />,
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
    return ['References are available upon request, try entering "email".'];
  },

  skills: (key) => {
    return [
      "Programming Languages:",
      <br key={key + 1} />,
      "  Experienced:",
      <br key={key + 2} />,
      "    Python, SQL",
      <br key={key + 3} />,
      "  Intermediate:",
      <br key={key + 4} />,
      "    HTML5, CSS3, JavaScript, Bash, C/C++, R",
      <br key={key + 5} />,
      "  Touched on:",
      <br key={key + 6} />,
      "    LaTeX, F77/95, R",
      <br key={key + 7} />,
      "  Currently learning:",
      <br key={key + 8} />,
      "    Rust",
      <br key={key + 9} />,
      <br key={key + 10} />,
      "Libraries:",
      <br key={key + 11} />,
      "  Experienced:",
      <br key={key + 12} />,
      "    SQLAlchemy, Docker, Pydantic, Starlette, FastAPI, Textual, Alembic",
      <br key={key + 13} />,
      "  Intermediate:",
      <br key={key + 14} />,
      "    Tkinter",
      <br key={key + 15} />,
      "  Touched on:",
      <br key={key + 16} />,
      "    k6, Django, Pandas, Numpy, Bootstrap5, Font Awesome, ReactJS",
      <br key={key + 17} />,
      <br key={key + 18} />,
      "Miscellaneous developer skills:",
      <br key={key + 19} />,
      "  Experienced:",
      <br key={key + 20} />,
      "    git, Unix, Mac, TDD, Agile (SCRUMBAN), ShapeUp",
      <br key={key + 21} />,
      "  Touched on:",
      <br key={key + 22} />,
      "    DevOps",
      <br key={key + 23} />,
    ];
  },

  training: (key) => {
    return [
      "Learning Tree International - London, UK and remote:",
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
    return ['Hi. Try entering "help".'];
  },
  goodbye: (key) => {
    return ["No, please don't go!"];
  },
  more: (key) => {
    return ["Don't be greedy."];
  },
  less: (key) => {
    return ["Less is sometimes more."];
  },
  pwd: (key) => {
    return ["You're right where you need to be."];
  },
  ls: (key) => {
    return ["Looks like there's nothing here."];
  },
  dir: (key) => {
    return ["Looks like there's nothing here."];
  },
  git: (key) => {
    return ["How rude!"];
  },
  cp: (key) => {
    return ["Now why would you want to do that?"];
  },
  mv: (key) => {
    return ["I don't think so."];
  },
  rm: (key) => {
    return ["I really don't think so."];
  },
  python: (key) => {
    return ["I really really don't think so."];
  },
};

export { commands };
