export const projects = [
  {
    id: 1,
    title: 'Tinapay',
    description:
      'Full-stack food ordering website with menu, cart, checkout, Google and email login, order history, and admin pages for managing menu items.',
    image: '/images/projects/project6.png',
    category: 'Full Stack',
    technologies: ['Next.js', 'MongoDB', 'NextAuth', 'Stripe', 'Tailwind CSS'],
    metrics: 'Live on Vercel',
    demoUrl: 'https://tinapay-shop.vercel.app',
    githubUrl: 'https://github.com/Ruskeer/tinapay-shop',
  },
  {
    id: 2,
    title: 'WPM Tester',
    description:
      'Typing speed test that tracks your time, words per minute, and accuracy.',
    image: '/images/projects/project1.png',
    category: 'Web Apps',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    metrics: 'Tracks speed and accuracy',
    demoUrl: 'https://ruskeer.github.io/WPM-TESTER/',
    githubUrl: 'https://github.com/Ruskeer/WPM-TESTER',
  },
  {
    id: 3,
    title: 'Recipe Finder',
    description:
      'Search for recipes and view their details, with data fetched from an API.',
    image: '/images/projects/project2.png',
    category: 'Web Apps',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    metrics: 'Powered by a public API',
    demoUrl: 'https://ruskeer.github.io/FINDER-OF-RECIPE-WEB/',
    githubUrl: 'https://github.com/Ruskeer/FINDER-OF-RECIPE-WEB',
  },
  {
    id: 4,
    title: 'Weather Widget',
    description:
      'Weather widget that shows current conditions for a searched location.',
    image: '/images/projects/project3.png',
    category: 'Web Apps',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    metrics: 'Live weather data',
    demoUrl: 'https://ruskeer.github.io/Weather-Widget-Web/',
    githubUrl: 'https://github.com/Ruskeer/Weather-Widget-Web',
  },
  {
    id: 5,
    title: 'To-Do Task List',
    description:
      'Task manager where you can add, complete, and delete tasks.',
    image: '/images/projects/project7.png',
    category: 'Tools',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    metrics: 'Add, complete, delete tasks',
    demoUrl: 'https://ruskeer.github.io/TO-DO-TASK-LIST/',
    githubUrl: 'https://github.com/Ruskeer/TO-DO-TASK-LIST',
  },
  {
    id: 6,
    title: 'Password Generator',
    description:
      'Generates random, secure passwords based on the options you choose.',
    image: '/images/projects/project8.png',
    category: 'Tools',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    metrics: 'Customizable passwords',
    demoUrl: 'https://your-demo-link.com',
    githubUrl: 'https://github.com/Ruskeer/Password-Generator_M',
  },
   {
    id: 7,
    title: 'Graduation Countdown',
    description:
      'Countdown timer that counts down the days, hours, minutes, and seconds to graduation day.',
    image: '/images/projects/project4.png',
    category: 'Tools',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    metrics: 'Live countdown timer',
    demoUrl: 'https://your-demo-link.com',
    githubUrl: 'https://github.com/Ruskeer/My-Countdown',
  },
  {
    id: 8,
    title: 'Rock Paper Scissors',
    description:
      'Classic Rock Paper Scissors game where you play against the computer and keep score.',
    image: '/images/projects/project5.png',
    category: 'Web Apps',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    metrics: 'Play against the computer',
    demoUrl: 'https://ruskeer.github.io/ROCK-PAPER-SCISSORS/',
    githubUrl: 'https://github.com/Ruskeer/ROCK-PAPER-SCISSORS',
  },
  {
    id: 9,
    title: 'Vendor Tracker & Proposal',
    description:
      'Excel vendor tracker with dropdowns, deadline alerts and auto totals, plus the 7-slide proposal I wrote to pitch it to an event planner.',
    image: '/images/projects/va1.png',
    category: 'Virtual Assistant',
    technologies: ['Excel', 'PowerPoint'],
    metrics: '15 columns, 7 auto totals, red/amber deadline alerts',
    files: [
      { label: 'Excel Tracker', url: '/files/Marlowe_Events_Vendor_Tracker.xlsx' },
      { label: 'Proposal (PowerPoint)', url: '/files/Marlowe_Events_Proposal.pptx' },
    ],
  },
];

export const categories = ['All', 'Full Stack', 'Web Apps', 'Tools', 'Virtual Assistant'];