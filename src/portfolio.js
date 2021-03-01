/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Prince Paraste",
  title: "Hi all, I'm Prince",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs / Nodejs / Laravel and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dv2vWeU6OukRm_kp099gkRAlaF0QungW/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/prince214",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "princeparaste78@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/9285335/prince-paraste",
  instagram: 'https://www.instagram.com/prince_paraste.dev/',
  twitter: 'https://twitter.com/princeparaste',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end and BackEnd for your web applications"
    ),
    emoji("⚡ Make User Friendly Admin Panels for clients according to their requirements."),
    emoji(
      "⚡ Integration of third party services such as Payment Gateway like Stripe and Domain services like Godaddy."
    ),
    emoji(
      "⚡ Implement Custom Rest API's for web and mobile applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/lpu.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2016 - August 2020",
      desc: "My major was Computer Science and Engineering and I garaduated with a CGPA of 7.86 from the University.",
      descBullets: [
        "I was also one of the Event Manager of Registration Committee on the Indian Science Congress (ISC) 2019 held at Lovely Professional University"
      ]
    }
    // {
    //   schoolName: "Bharat Jyoti Hr. Sec. School",
    //   logo: require("./assets/images/bjv.jpg"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc:
    //     "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Infostride",
      companylogo: require("./assets/images/infostride.png"),
      date: "March 2020 – Present",
      desc:
        "Wroking as a Backend Software Dev at Infostride (India).",
      descBullets: [
        "Custom building applications",
        "Working with clients and their requirements to build their applications",
        "Building Admin Panels for Clients",
        "Implementing Third Party Services to applications",
        "Creating Rest API's for web and mobile applications"
      ]
    },
    {
      role: "Intern",
      company: "Infostride",
      companylogo: require("./assets/images/infostride.png"),
      date: "October 2019 – March 2020",
      desc:
        "I was a Intern at Infostride LTD. in India. Working with Senior Project Managers.",
        descBullets: [
          "Complete the task Modules given by Seniors Project Managers",
          "Learn in Agile methodology to work effieciently with team ",
          "Learn as much as possible"
        ]
    }
    // {
    //   role: "Junior Information Security & Systems Representative",
    //   company: "Vodafone",
    //   companylogo: require("./assets/images/vodafoneLogo.png"),
    //   date: "November 2018 – July 2019",
    //   desc:
    //     "I've conducted internal audit making sure the organization is compliant with the GDPR."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "prince214", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "These are some of the projects that i worked on",
  projects: [
    {
      image: require("./assets/images/slack.png"),
      projectName: "Slack Clone",
      projectDesc: "Made a Slack Clone with React.Js Hosted on FireBase.",
      footerLink: [
        {
          name: "Slack",
          url: "https://slack-clone-9a8cd.web.app/room/"
        },
        {
          name: "github",
          url: "https://github.com/prince214/slack-clone"
        },
        {
          name: "react.js",
          url: "javascript::void(0)"
        },
        {
          name: "firebase",
          url: "javascript::void(0)"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/netflix.png"),
      projectName: "Netflix Clone",
      projectDesc: "Made a Netflix Clone with React.Js and Node and Hosted on FireBase.",
      footerLink: [
        {
          name: "Netflix",
          url: "https://netflix-clone-2dd79.web.app/"
        },
        {
          name: "github",
          url: "https://github.com/prince214/netflix-clone"
        },
        {
          name: "react.js",
          url: "javascript::void(0)"
        },
        {
          name: "TMDB API",
          url: "javascript::void(0);"
        },
        {
          name: "nodejs",
          url: "javascript::void(0)"
        },
        {
          name: "firebase",
          url: "javascript::void(0)"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bookslibrary.png"),
      projectName: "BooksLibrary",
      projectDesc: "BooksLibrary is a web app where user can keep a record of their favourite Books by their favourite authors.",
      footerLink: [
        {
          name: "BooksLibrary",
          url: "https://booksxlibrary.herokuapp.com/books"
        },
        {
          name: "github",
          url: "https://github.com/prince214/BooksLibrary"
        },
        {
          name: "nodejs",
          url: "javascript::void(0);"
        },
        {
          name: "mongodb",
          url: "javascript::void(0)"
        }
      ]
    },
    {
      image: require("./assets/images/codeforcoder.png"),
      projectName: "Codeforcoder: Student Portal",
      projectDesc: "CodeforCoder is a website which provide study material like PPT, MCQs, Programs/Codes to students.",
      footerLink: [
        {
          name: "Codeforcoder",
          url: "https://codeforcoder.com"
        },
        {
          name: "Bootstrap 4",
          url: "javascript::void(0)"
        },
        {
          name: "PHP",
          url: "javascript::void(0)"
        },
        {
          name: "Source Code Private",
          url: "javascript::void(0)"
        }
      ]
    },
    {
      image: require("./assets/images/adminpanel.svg"),
      projectName: "Laravel Admin Panel",
      projectDesc: "Made Starter Admin Panel Theme so quickly get started with the Project. Login Credentials: prince@gmail.com | 123456789a",
      footerLink: [
        {
          name: "Laravel Admin Panel",
          url: "http://aqueous-woodland-76798.herokuapp.com/login"
        },
        {
          name: "Bootstrap 4",
          url: "javascript::void(0)"
        },
        {
          name: "Laravel Framework",
          url: "javascript::void(0)"
        },
        {
          name: "github",
          url: "https://github.com/prince214/Laravel-Start"
        }
      ]
    },
    {
      image: require("./assets/images/quiz.png"),
      projectName: "Quiz Web Application",
      projectDesc: "Made a single page web application which fetches questions from API and user answer it.",
      footerLink: [
        {
          name: "Fancy Quiz App",
          url: "https://quizapp10q.herokuapp.com/"
        },
        {
          name: "github",
          url: "https://github.com/prince214/VueQuizApp"
        },
        {
          name: "Vue.js",
          url: "javascript::void(0)"
        },
        {
          name: "Opentdb API",
          url: "javascript::void(0)"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8463048477",
  email_address: "princeparaste78@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "princeparaste", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
