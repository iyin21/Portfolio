import Resume from './utils/Iyin_Oluleke_VisualCV_Resume.pdf';

const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Iyinoluwa.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Iyinoluwa Oluleke',
  role: 'Front End Engineer',
  description:
    'An enthusiastic front end developer with drive and determination needed to resolve complex issues. Developed commercial applications for service-based businesses. Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. In short I love to create technology with the main goal of solving real-life problems and create value for humanity.',
  resume: Resume,
  social: {
    linkedin: 'https://www.linkedin.com/in/iyinoluwa-oluleke-31a51714b/',
    github: 'https://github.com/iyin21',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Virtual Medic Clinic(patient)',
    description:
      "Virtual Medical Clinic is a virtual hospital where people can participate in the end to end flow of medical examination. People will be able to register as patients, book consultations with medical professionals, be attended to by the medical professionals, receive prognosis (or diagnosis), get prescriptions and/or be referred to physical hospitals where necessary.",
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://vmc.workcube.com.ng',
  },
  {
    name: 'Virtual Medic Clinic(Medic)',
    description:
      "Virtual Medical Clinic is a virtual hospital where people can participate in the end to end flow of medical examination. People will be able to register as patients, book consultations with medical professionals, be attended to by the medical professionals, receive prognosis (or diagnosis), get prescriptions and/or be referred to physical hospitals where necessary.",
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://vmc-medic.workcube.com.ng',
  },
  {
    name: "Ify's kitchen",
    description:
      'This platform serves as an exclusive engagement hub for all Ify’s kitchen clients, fans and followers. It houses unique and creative content for easy access, and delivers cooking classes without using other platforms and thereby generating constant revenue',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://staging.ifyskitchen.com/',
  },
  {
    name: "Learn with us",
    description:
      'This is a platform owned by iQubelabs where people who want to get into start a career in tech can register for a course of their choice..',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://lwu.iqubesolutions.com.ng/',
  },
  {
    name: "Sxope",
    description:
      'Sxope is admin application used to monitor trivia questions sent to people through sms, rewards and subscriptions',
    stack: ['HTML', "CSS", "Javascript"],
    // sourceCode: 'https://github.com',
    livePreview: 'https://orange-reporting.iqubesolutions.com.ng/',
  },
  {
    name: "Lendbak",
    description:
      'Lendbak is a one stop shop for all things rentals where one can rent with ease and also lease your items for rental.',
    stack: ['SASS', 'Javscript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://lendbak.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Nodejs'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'iyinoluwa.oluleke@gmail.com',
}

export { header, about, projects, skills, contact }
