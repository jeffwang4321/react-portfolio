import React from "react";
import { FaRegEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "#home",
    text: "Home",
  },
  // {
  //   id: 2,
  //   url: "#about",
  //   text: "About",
  // },
  {
    id: 3,
    url: "#work",
    text: "Work",
  },
  {
    id: 4,
    url: "#projects",
    text: "Projects",
  },
  // {
  //   id: 5,
  //   url: "#contact",
  //   text: "Contact",
  // },
];

export const social = [
  {
    id: 1,
    url: "mailto:jeffwang4321@gmail.com",
    icon: <FaRegEnvelope />,
    header: "Email",
  },
  {
    id: 2,
    url: "https://github.com/jeffwang4321",
    icon: <FaGithub />,
    header: "Github",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/jw4321/",
    icon: <FaLinkedin />,
    header: "Linkedin",
  },
];

export const work = [
  {
    id: 4,
    header: "Royal Bank",
    company: "Royal Bank of Canada",
    title: "Site Reliability Developer",
    dates: "Jan 2023 – Present",
    duties: [
      "Designed and developed frontend dashboards to track KPI breaches and calculate SLO %’s using React.js",
      "Oversaw RBC's PLANET application's SRE program as the project manager; coordinating 3+ teams on agile deliverables while ensuring an above 98% data availability SLA from production support",
      "Developed a Python script to automate logstash app migrations from OCP3 to OCP4 using a Jenkins pipeline",
    ],
    technologies: [
      "Angular",
      "Python",
      "Tableau",
      "Ansible",
      "Linux",
      "OCP4",
      "Jenkins",
      "Shell Scripting",
      "Atlassian",
    ],
    images: [],
  },
  {
    id: 3,
    header: "Government",
    company: "Government of Canada (PSPC)",
    title: "Web Application Developer, Co-op",
    dates: "May 2022 – Sep 2022",
    duties: [
      "Developed and optimized 4 enterprise-level web applications for federal departments, handling over $945 million in transactions and annual gross using C#, ASP.NET Core, Vue.js, TypeScript, CSS, MS SQL and jQuery",
      "Designed and deployed a responsive GIS web map parameters menu controlling data layers and map filters",
      "Refactored MVC architecture, implemented business billing logic, and automated database scripting in PHP",
    ],
    technologies: [
      "ASP.NET Core",
      "C#",
      "Vue.js",
      // "Javascript",
      "Typescript",
      "jQuery",
      // "HTML/CSS",
      "AJAX",
      "Microsoft SQL Server",
      "SSMS",
      "PHP",
      // ".NET Framework",
      "MVC Architecture",
    ],
    images: [],
  },
  {
    id: 2,
    header: "Rainforest",
    company: "Rainforest Automation Inc",
    title: "Software Developer, Co-op",
    dates: "Jan 2021 – Sep 2021",
    duties: [
      "Deployed 3 major functionalities to the company cloud web portal, driving over $4 million in sales using React, Redux.js, JavaScript, AWS, Lambda, S3, HTML and SASS. Resolving over 40+ JIRA bugs in 4 month",
      "Reduced the demand history graph's render time by 80% from 5s to 1s by implementing Redux caching",
      "Designed and developed an inactivity timeout function that automatically logs off a user after a period of time",
      "Implemented the pricing graph feature using Canvas API and optimized JSON history using Redux states",
      "Designed and automated frontend E2E testing using Cypress and firmware tests using Python's Fabric library",
      "Automated REST API performance tests to monitor cloud health using Postman collections and environments",
      "Updated, troubleshooted, and reprogrammed UNIX firmware using CMD, Bash scripts, and XML commands",
    ],
    technologies: [
      "React",
      "Redux",
      "Cypress",
      "JavaScript",
      "REST API",
      "Swagger",
      "AWS",
      "SASS",
      "HTML",
      "Python",
      // "LINUX",
      "UNIX",
      // "XML",
      // "Atlassian",
      "Postman",
    ],
    images: [
      // './assets/rainforest-1.gif',
      // './assets/rainforest-2.gif',
      // './assets/rainforest-3.jpg',
    ],
  },
  {
    id: 1,
    header: "ClearDent",
    company: "Prococious Technology Inc",
    title: "Database Support Technician, Co-op",
    dates: "May 2019 – Dec 2019",
    duties: [
      "Performed cloud database setup, backups, and automated integrity testing on database backups using C++",
      "Responsible for client software setup, software updates, QA and Microsoft SQL Server database migrations",
      "Maintained, debugged, and applied schema updates to SQL Servers using SQL Server Management Studio",
    ],
    technologies: [
      "Microsoft SQL Server",
      "SQL Management Studio",
      "C++",
      "SalesForce",
      // "ClearDent",
      "Windows Administration",
      "Excel",
      "JIRA",
      "VS Code",
    ],
    images: [
      // './assets/cleardent-1.jpg',
      // './assets/cleardent-2.jpg',
      // './assets/cleardent-3.jpg',
    ],
  },
];

export const project = [
  {
    id: 1,
    header: "Web Dev",
    title: "IO Games",
    company: "Multiplayer Socket Game - Personal Project",
    dates: "Duration: 2 weeks (Nov 2020)",
    duties: [
      "Architectured the server-side web application's frontend and backend using Node.js, Express.js, and Socket.io",
      "Implemented responsive design, a group chat feature, 3 unique minigames, and automatic score tracking",
      "Organized client connections into unique game rooms where individual rooms can run asynchronously",
      "Implemented real-time communication between the client-server environment using TCP web sockets",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "TCP",
      "JavaScript",
      "HTML",
      "CSS",
      "Heroku",
    ],
    images: [],
    video: "https://www.youtube.com/embed/f04S7N4gTlE",
    github: "https://github.com/jeffwang4321/IO-Games",
  },
  {
    id: 2,
    header: "Web Dev",
    title: "React Personal Website",
    company: "React Website - Personal Project",
    dates: "Duration: 3 days (Jan 2022)",
    duties: [
      "Developed a responsive portfolio website using React & JavaScript to match my previous website design",
      "Experienced the complete design process from conceptualization to delivery",
      "Incorporated icon libraries and JavaScript in order to enhance user experiences and visual appeal",
      "You are currently viewing my Personal Website 😊",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Netlify"],
    images: [
      // './assets/Readme-darkmode.gif',
      // './assets/Readme-menu.gif',
      // './assets/Readme-tabs.gif',
      // './assets/Readme-gallery.gif',
    ],
    video: "",
    github: "https://github.com/jeffwang4321/react-portfolio",
  },
  {
    id: 3,
    header: "Web Dev",
    title: "Quiz, Quotes & Timeline",
    company: "JavaScript Demo - Personal Project",
    dates: "Duration: 2 days (Oct 2020)",
    duties: [
      "Designed a quiz, quotes and expandable timeline website to showcase basic JavaScript functionality",
      "Developed the interactive and responsive website using JavaScript, HTML5, CSS3",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Git", "GitHub Pages"],
    images: [],
    video: "https://jeffwang4321.github.io/JavaScript-Demo/",
    github: "https://github.com/jeffwang4321/JavaScript-Demo",
  },
  {
    id: 4,
    header: "App Dev",
    title: "MiniTasks",
    company: "React Native App - Personal Project",
    dates: "Duration: 2 Day (Oct 2021)",
    duties: [
      "Developed a minimalistic and easy to use To Do List app using React Native and deployed using Expo",
      "Utilized persistent storage to store tasks JSON locally within the device",
      "Focused on state manipulation, asynchronous functions, promises and hooks",
      "Application can create, modify & delete custom tasks as well as sort tasks by due dates and task color",
      "Out on Google Play Store! 🤍",
    ],
    technologies: [
      "React Native",
      "Expo Go",
      "JavaScript",
      "AsyncStorage",
      "Google Play Console",
    ],
    images: [],
    video: "https://www.youtube.com/embed/yPC58yBRJiU",
    github: "https://github.com/jeffwang4321/minitasks",
  },
  {
    id: 5,
    header: "App Dev",
    title: "First Bite",
    company: "iOS App - Introduction to Software Engineering",
    dates: "Duration: 3 months (June 2018 – Aug 2018)",
    duties: [
      "Researched and developed an iOS app in a team of five, which acts as a resource for individuals new to parenthood and helps guide their newborn's dietary needs using Swift, CocoaPods, XCode, MAC, and iOS",
      "Programed the dietary history log feature, time tracking feature, and graphical statistics using ChartsRealm",
      "Implemented persistent storage and Cloud DB using Google Firebase, syncing offline statistics and history",
      "Focused on agile methodology, performed weekly sprints, meetings and ensured regular deliverable",
    ],
    technologies: [
      "XCode",
      "Swift",
      "Google FireBase",
      "CocoaPods",
      "Mac OS",
      "iOS",
    ],
    images: [],
    video: "https://www.youtube.com/embed/CmiQvYa9JJk",
    github: "https://github.com/trtri2/FirstBite",
  },
  {
    id: 6,
    header: "App Dev",
    title: "SFU App Design",
    company: "App UX & UI Design - User Interface Design",
    dates: "Duration: 3 hours (Dec 2021)",
    duties: [
      "Created a high-fidelity prototype for a mock-up SFU students app using Figma",
      "Conducted user reasearch and heuristic evalutaion to ensure optimal user experience",
      "Designed the user flows, created user stores and implemented 3 major functionalities",
    ],
    technologies: ["Figma", "Material Design", "Unsplash", "Windows"],
    images: [],
    video:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzCtotsUKgE3fsX04JIoYOZ%2FSFU-Moodle%3Fnode-id%3D1%253A2%26starting-point-node-id%3D1%253A2",
    github:
      "https://www.figma.com/file/zCtotsUKgE3fsX04JIoYOZ/SFU-Moodle?node-id=0%3A1",
  },
  {
    id: 7,
    header: "Software Dev",
    title: "Library Database",
    company: "Python & SQLite - Database Systems I",
    dates: "Duration: 15 hours (May 2020)",
    duties: [
      "Designed and implemented a real-world database application modeled for Vancouver libraries",
      "Designed an entity-relationship model and drafted it into an E/R diagram",
      "Ensured the schema met the project requirements and avoided anomalies",
      "Converted the E/R diagram to table schemas for this database using SQLite",
      "Built the database application using Python and SQLite",
    ],
    technologies: ["Python", "SQLite", "Ubuntu", "WSL"],
    images: [
      // "./assets/library-1.jpg",
      // "./assets/library-2.jpg",
      // "./assets/library-3.jpg",
      // "./assets/library-4.jpg",
    ],
    video: "",
    github: "https://github.com/jeffwang4321/Library-Database",
  },
  {
    id: 8,
    header: "Software Dev",
    title: "Reversi AI",
    company: "Monte-Carlo Tree Search - Artificial Intelligence",
    dates: "Duration: 10 hours (Aug 2020)",
    duties: [
      "Developed a Reversi AI program in Python focusing on Monte-Carlo Tree Search and piece mobility",
      "Implemented a custom scoring heuristic on N random playouts to determine the most optimal move for any given board state",
      "Wrote automatable test scripts and conducted performance measures to ensure program quality and integrity",
      "Conducted data analysis over 1,000 test runs and efficiently transcribed the data into a final written report",
    ],
    technologies: ["Python", "Ubuntu", "WSL"],
    images: [
      // "./assets/reversi-1.jpg",
      // "./assets/reversi-2.jpg",
      // "./assets/reversi-3.jpg",
    ],
    video: "",
    github:
      "https://github.com/jeffwang4321/Artificial-Intelligence-Survey/tree/main/Reversi%20AI",
  },
  {
    id: 9,
    header: "Software Dev",
    title: "Candy Factory",
    company: "Multithreading & Bounded Buffers - Operating Systems",
    dates: "Duration: 7 hours (Dec 2018)",
    duties: [
      "Developed a multi-threading processor in C that uses producer and consumer operators to manage candy items stored in a bounded buffer, thread signaling is done to kill processes",
      "One group of threads model candy factories which generate candies and insert the candies into the bounded buffer. Another group of threads model kids which eat candies from the bounded buffer",
      "Implemented the bounded buffer module in a transparent manner which encapsulates the data so that the buffer does not need to know about the type of information it is storing",
      "Created a statistics tracking module to displaying stat summaries, and time delays",
    ],
    technologies: ["C", "Ubuntu", "WSL"],
    images: [],
    video: "",
    github:
      "https://github.com/jeffwang4321/Operating-Systems/tree/master/Prj3%20-%20Threads%20%26%20Buffer",
  },
];

export const workImages = [
  "./assets/PSPC-1.jpg",
  "./assets/PSPC-2.jpg",
  "./assets/rainforest-1.jpg",
  "./assets/rainforest-1.5.jpg",
  "./assets/rainforest-2.jpg",
  "./assets/rainforest-3.jpg",
  "./assets/rainforest-4.jpg",
  "./assets/cleardent-1.jpg",
];

export const workSubtitles = [
  " Designed and deployed a responsive GIS web map parameters menu controlling data layers and map filters",
  " Developed the database tabs and filtering feature handling Esquimalt Graving Dock billing transactions",
  " Reduced the demand history graph's render time by 80% from 5s to 1s by implementing Redux caching",
  " Implemented the pricing graph feature using Canvas API and optimized JSON history using Redux states",
  " Optimized the weekly demand history graph's render time by 50% by plotting 60m intervals instead of 15m",
  " Developed the Edit Device Dashboard that configures device information and POST API request to cloud DB",
  " Updated, troubleshooted, and reprogrammed UNIX firmware using Bash scripts and XML commands",
  " Maintained, debugged and applied schema updates to SQL Servers using SQL Server Management Studio",
];

export const imageToggles = [
  {
    id: 1,
    title: "Figure 1: Government of Canada",
    src: "./assets/PSPC-1.jpg",
    subtitle:
      " Designed and deployed a responsive GIS web map parameters menu controlling data layers and map filters",
  },
  {
    id: 2,
    title: "Figure 2: Government of Canada",
    src: "./assets/PSPC-2.jpg",
    subtitle:
      " Developed the database tabs and filtering feature handling Esquimalt Graving Dock billing transactions",
  },
  {
    id: 3,
    title: "Figure 3: Rainforest Automation",
    src: "./assets/rainforest-1.jpg",
    subtitle:
      " Reduced the demand history graph's render time by 80% from 5s to 1s by implementing Redux caching",
  },
  {
    id: 4,
    title: "Figure 4: Rainforest Automation",
    src: "./assets/rainforest-1.5.jpg",
    subtitle:
      " Implemented the pricing graph feature using Canvas API and optimized JSON history using Redux states",
  },
  {
    id: 5,
    title: "Figure 5: Rainforest Automation",
    src: "./assets/rainforest-2.jpg",
    subtitle:
      " Optimized the weekly demand history graph's render time by 50% by plotting 60m intervals instead of 15m",
  },
  {
    id: 6,
    title: "Figure 6: Rainforest Automation",
    src: "./assets/rainforest-3.jpg",
    subtitle:
      " Developed the Edit Device Dashboard that configures device information and POST API request to cloud DB",
  },
  {
    id: 7,
    title: "Figure 7: Rainforest Automation",
    src: "./assets/rainforest-4.jpg",
    subtitle:
      " Updated, troubleshooted, and reprogrammed UNIX firmware using Bash scripts and XML commands",
  },
  {
    id: 8,
    title: "Figure 8: Rainforest Automation",
    src: "./assets/rainforest-3.jpg",
    subtitle:
      " Maintained, debugged and applied schema updates to SQL Servers using SQL Server Management Studio",
  },
];
