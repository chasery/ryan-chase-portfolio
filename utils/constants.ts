import { Pages, SocialMedia } from "./types";

export const SITE_TITLE = 'Ryan Chase'

// Nav
export const NAV_OPEN_TITLE = 'Menu'
export const NAV_OPEN_DESCRIPTION = 'Open Menu';
export const NAV_CLOSE_TITLE = 'Close'
export const NAV_CLOSE_DESCRIPTION = 'Close Menu';


// TODO: Move to state
export const pages: Pages = {
  home: {
    path: '/',
    title: 'Home',
    subtitle: 'Full Stack Engineer',
  },
  about: {
    path: '/about',
    title: 'About',
    subtitle: 'Learn A Little About Me',
    sections: [
      {
        title: `Hey, I'm Ryan!`,
        description: `I love tackling problems from conceptualization, to implementation, and finally to maintenance. My desire to build started at a young age with countless hours of piecing together anything from Lego cities to model cars. Every aspect challenged me to plan, analyze, and overcome the obstacles that arise when ever you are creating. Since my young city planning days, I have grown into a career of problem solving with a splash of creativity and life long learning.
  My career path has led me to Nike where I'm currently practicing Test Driven Development and Continuous Integration/Continuous Delivery, as a Full Stack Engineer. Working within the Nike By You shoe customization experience has provided me with daily challenges which motivate me to learn new techniques and skills. It's this consistent drive to learn that inspires me to become a better engineer and eager to solve that next challenge.
  My specialties are JavaScript, TypeScript, CSS3, HTML5, Git, Unit and Integration testing, A/B Testing, State Management, Continuous Integration/Continuous Deployment, Node.js, PostgreSQL, and Express.`,
        image: {
          path: '/images/ryan-chase@2x.jpg',
          alt: 'Ryan Chase is a Full Stack Engineer located in Portland, Oregon',
        },
        details: [
          {
            label: 'Status',
            value: 'Available',
          },
          {
            label: 'Location',
            value: 'Portland, OR',
          },
          {
            label: 'Tech Exp.',
            value: '10yrs+',
          },
          {
            label: 'Pref. Role',
            value: 'Front-End Dev',
          },
          {
            label: 'Interests',
            value: 'ReactJs',
          },
          {
            value: 'Components',
          },
          {
            value: 'CSS-in-JS',
          },
        ],
      }
    ],
  },
  skills: {
    path: '/skills',
    title: 'Skills',
    subtitle: 'What I Can Do For You',
    sections: [{
      title: 'Software Engineering',
      description: `I am motivated to find the perfect solution for my end users. Staying in tune with the latest web development trends, I actively search for ways to employ modern tools and frameworks in the apps I create. Fresh out of Thinkful's code school, here is what I can do for you.`,
      skills: [
        {

          label: 'JavaScript',
          path: '/icons/javascript.svg',
          alt: 'I am excited to write JavaScript ES6',
          width: 28,
          height: 28,
        },
        {
          label: 'HTML5',
          path: '/icons/html-5.svg',
          alt: 'I consider myself an expert with Hyper Text Markup Language 5 and can accomplish any layout you put in front of me',
          width: 25,
          height: 28,
        },
        {
          label: 'CSS3',
          path: '/icons/css-3.svg',
          alt: 'I am extremely confident with Cascading Style Sheets 3 and cross browser support',
          width: 25,
          height: 28,
        },
        {
          label: 'ReactJS',
          path: '/icons/react-js.svg',
          alt: 'My passion lies in building apps and reusable components with React JS',
          width: 35,
          height: 32,
        },
        {
          label: 'NodeJS',
          path: '/icons/node-js.svg',
          alt: 'I have gone to code school to learn how to build a Node.js server to support to the front-ends of my apps',
          width: 28,
          height: 32,
        },
        {
          label: 'Typescript',
          path: '/icons/typescript.svg',
          alt: 'It is my belief that we should be following best practices to write clean JavaScript with Typescript',
          width: 28,
          height: 28,

        },
        {
          label: 'PostgreSQL',
          path: '/icons/postgresql.svg',
          alt: 'Understanding how to interface with databases is crucial for any app development. I have gone to code school to strengthen my knowledge around them',
          width: 30,
          height: 32,

        },
        {
          label: 'Git',
          path: '/icons/git.svg',
          alt: 'I have experience working with Git version control and the workflows',
          width: 32,
          height: 32,
        },
        {
          label: 'Testing',
          path: '/icons/testing.svg',
          alt: 'Test driven development allows me to think about the problem from every possible way. I have experience with writing tests in Mocha, Chai, and Jest',
          width: 28,
          height: 32,
        },
      ],
    },
    {
      title: 'UX Design',
      description: 'Currently working as a Senior User Experience designer for a healthcare organization, I lead usability for a mobile app providing member information to our healthcare workers. With a high awareness of usability as well as software development, I bring a unique set of tools to any team.',
      skills: [
        {
          label: 'Storyboarding',
          path: '/icons/storyboarding.svg',
          alt: `I use storyboards to share the tale of a user's journey through a feature and application`,
          width: 22,
          height: 28,
        },
        {
          label: 'Journey Mapping',
          path: '/icons/journey-mapping.svg',
          alt: `Creating journey maps allows you to envision the user's journey from start to finish`,
          width: 20,
          height: 28,
        },
        {
          label: 'Personas',
          path: '/icons/personas.svg',
          alt: 'Personas help me build empathy for the demographic of users I anticipate to build apps for',
          width: 33,
          height: 22,
        },
        {
          label: 'User Flows',
          path: '/icons/user-flows.svg',
          alt: 'I create user flows to think through specific interactions in the software I design and develop',
          width: 32,
          height: 26,
        },
        {
          label: 'Wireframing',
          path: '/icons/wireframing.svg',
          alt: 'Wireframes allow me to quickly share ideas of features and general layout to seek feedback early in the design process',
          width: 34,
          height: 28,
        },
        {
          label: 'Rapid Prototyping',
          path: '/icons/rapid-prototyping.svg',
          alt: 'Rapid prototypes allow me to test apps and features without investing a huge amount of time to get feedback',
          width: 32,
          height: 22,
        },
        {
          label: 'Design Systems',
          path: '/icons/design-systems.svg',
          alt: 'Design systems help reduce development times while also creating a consistent user experience; I have experience building them',
          width: 36,
          height: 18,
        },
        {
          label: 'Style Guides',
          path: '/icons/style-guides.svg',
          alt: 'I use style guides to also promote consistency and branding',
          width: 30,
          height: 30,
        },
        {
          label: 'User Testing',
          path: '/icons/user-testing.svg',
          alt: 'User testing is possibly the most important aspect of application development. I am comfortable leading user testing and getting feedback',
          width: 26,
          height: 26,
        },
      ],
    },],
  },
};

// TODO: Move to state
export const socialMedia: SocialMedia = [
  {
    icon: {
      label: 'GitHub',
      path: '/icons/github.svg',
      alt: 'View my GitHub profile',
      width: 32,
      height: 32,
    },
    path: 'https://github.com/chasery',
  },
  {
    icon: {
      label: 'LinkedIn',
      path: '/icons/linked-in.svg',
      alt: 'View my LinkedIn profile',
      width: 28,
      height: 28,
    },
    path: 'https://www.linkedin.com/in/chasery/',
  },
  {
    icon: {
      label: 'Email',
      path: '/icons/email.svg',
      alt: 'Email me',
      width: 30,
      height: 24,
    },
    path: 'mailto:ryan@chasery.com',
  },
];