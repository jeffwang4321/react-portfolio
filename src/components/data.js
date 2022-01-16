import React from 'react';
import { FaRegEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '#home',
    text: 'Home',
  },
  {
    id: 2,
    url: '#about',
    text: 'About',
  },
  {
    id: 3,
    url: '#work',
    text: 'Work',
  },
  {
    id: 4,
    url: '#projects',
    text: 'Projects',
  },
  {
    id: 5,
    url: '#contact',
    text: 'Contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'mailto:jeffwang4321@gmail.com',
    icon: <FaRegEnvelope/>,
    header: "jeffwang4321@gmail.com",
  },
  {
    id: 2,
    url: 'https://github.com/jeffwang4321',
    icon: <FaGithub/>,
    header: "github.com/jeffwang4321",
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/jw4321/',
    icon: <FaLinkedin/>,
    header: "linkedin.com/in/jw4321",
  },
];

export const work = [
  {
    id: 1,
    header: "RAINFOREST",
    company: "Rainforest Automation Inc",
    title: "Software Developer",
    dates: "Jan 2021 – Sep 2021",
    duties: [
      "Implemented 3 deliverables for the company portal using React and Redux, developing a pricing graph using Canvas API and storing JSON history cache",
      "Maintained, updated and debugged React components, Redux stores and optimized AJAX functions, resolving over 40+ JIRA tickets in a 4-month period",
      "Designed and automated test scripts for UNIX firmware using Python's Fabric library and automated front-end testing using Cypress",
      "Automated REST API tests to monitor cloud health using Postman collections",
      "Troubleshooted UNIX firmware using Bash scripts and XML commands",
    ],
    technologies: ["React.js", "Redux.js", "JavaScript", "Cypress", "SASS", "Python", "UNIX",  "XML", "Swagger", "Postman", "Atlassian"],
    images: [

    ],
  },
  {
    id: 2,
    header: "CLEARDENT",
    company: "Prococious Technology Inc",
    title: "Database Support Technician",
    dates: "May 2019 – Dec 2019",
    duties: [
      "Applied database scripts on client servers using SQL Management Studio",
      "Performed cloud database set up, backups, and regular integrity checks",
      "Automated and debugged database backups and integrity check scripts in C++",
      "Responsible for regular software updates and SQL Server maintenance",
      "Assisted client technicians with software setup and database migrations",
    ],
    technologies: ["SQL Server", "SQL Management Studio", "C++", "Excel", "JIRA", "SalesForce", "Visual Studio Code", "ClearDent"],
    images: [

    ],
  },
]

export const project = [
  {
    id: 1,
    header: "Web Dev",
    title: "IO Games",
    company: "Multiplayer Socket Game - Personal Project",
    dates: "Duration: 2 weeks (Nov 2020)",
    duties: [
      "Developed a web based multiplayer games using Socket.io & Express.js",
      "Realtime communication between client server environment using web sockets",
      "Client connections organized into unique rooms and can run independently",
      "Implemented a group chat feature, 3 unique minigames and live score tracking",
    ],
    technologies: ["Socket.io", "Express.js", "Node.js", "JavaScript", "HTML5", "CSS3"],
    images: [],
    video: "https://www.youtube.com/embed/f04S7N4gTlE",
    github: "https://github.com/jeffwang4321/IO-Games",
  },
  {
    id: 2,
    header: "Web Dev",
    title: "React Personal Website",
    company: "React Website - Personal Project",
    dates: "Duration: 2 days (Jan 2022)",
    duties: [
      "Developed a responsive portfolio website using React & JavaScript to match my previous website design",
      "Experienced the complete design process from conceptualization to delivery",
      "Incorporated icon libraries and JavaScript in order to enhance user experiences and visual appeal",
      "You are currently viewing my Personal Website 😊",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    images: [],
    video: "",
    github: "",
  },
  {
    id: 3,
    header: "Web Dev",
    title: "HTML Personal Website",
    company: "HTML Website - Personal Project",
    dates: "Duration: 5 days (Oct 2020)",
    duties: [
      "Developed a responsive portfolio website using HTML & JavaScript to match my drafted design",
      "Experienced the complete design process from conceptualization to delivery",
      "Incorporated icon libraries and JavaScript in order to enhance user experiences and visual appeal",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3"],
    images: [],
    video: "https://jeffwang4321.github.io/",
    github: "https://github.com/jeffwang4321/jeffwang4321.github.io",
  },
  {
    id: 4,
    header: "App Dev",
    title: "MiniTasks",
    company: "React Native App - Personal Project",
    dates: "Duration: 6 hours (Oct 2021)",
    duties: [
      "Developed a minimalistic and easy to use To Do List app using React Native and deployed using Expo",
      "Utilized persistent storage to store tasks JSON locally within the device",
      "Focused on state manipulation, asynchronous functions, promises and hooks",
      "Application can create, modify & delete custom tasks as well as sort tasks by due dates and task color",
    ],
    technologies: ["React Native", "Expo", "JavaScript", "Google Play Console"],
    images: [],
    video: "https://www.youtube.com/embed/yPC58yBRJiU",
    github: "",
  },
  {
    id: 5,
    header: "App Dev",
    title: "First Bite",
    company: "iOS App - Introduction to Software Engineering",
    dates: "Duration: 3 months (June 2018 – Aug 2018)",
    duties: [
      "Developed an iOS application in a team of five, which acts as a resource for individuals new to parenthood and help guide their newborn’s dietary needs",
      "Programed dietary tracking features and graphical statistics in XCode using Swift and CocoaPods dependency manager",
      "Implemented cloud database storage using Google Firebase to sync account statistics and backup history logs",
      "Focused on agile development methods, performed weekly sprints, meetings and ensured regular deliverables",
    ],
    technologies: ["XCode", "Swift", "FireBase", "CocoaPods", "Mac OS"],
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
      "Created a high-fidelity prototype for a mock up SFU students app in Figma",
      "Conducted user reasearch and heuristic evalutaion to ",
      "Designed the user flows and user stores ",
    ],
    technologies: ["Figma", "Material Design", "Unsplash", "Windows"],
    images: [],
    video: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzCtotsUKgE3fsX04JIoYOZ%2FSFU-Moodle%3Fnode-id%3D1%253A2%26starting-point-node-id%3D1%253A2",
    github: "",
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
      './assets/erdiagram.JPG',
      './assets/listitems.JPG',
      './assets/listpersons.JPG',
      './assets/returnbook.JPG',
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
      './assets/settings.JPG',
      './assets/playermove.JPG',
      './assets/end.JPG',
    ],
    video: "",
    github: "https://github.com/jeffwang4321/Artificial-Intelligence-Survey/tree/main/Reversi%20AI",
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
    github: "https://github.com/jeffwang4321/Operating-Systems/tree/master/Prj3%20-%20Threads%20%26%20Buffer",
  },
]

