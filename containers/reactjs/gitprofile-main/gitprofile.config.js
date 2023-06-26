// gitprofile.config.js

const config = {
  github: {
    username: 'maxlimgj', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Maxlimgj',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    dev: 'maxlimgj',
    stackoverflow: '9057168/goodjeans', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://maxlimgj.com',
    phone: '',
    email: 'limguanji@gmail.com',
  },
  resume: {
    fileUrl:
      'https://maxlimgj.com/resume', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
   'Angular','ReactJS',
   'ForgeRock','VKey'
  ],
  experiences: [
    {
      company: 'Deloitte',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://www2.deloitte.com/sg/en/pages/risk/solutions/identity-trifecta.html'
    },
    {
      company: 'NebulasTree',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://www.nebulastree.com/home'
    },
    {
      company: 'Activate Interactive',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://activate.sg/',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Singapore University of Social Science',
      degree: 'Degree',
      // from: '2015',
      // to: '2019',
    },
    {
      institution: 'Nanyang Polytechnic',
      degree: 'Advanced Diploma',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'Temasek Polytechnic',
      degree: 'Diploma',
      from: '2012',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: '',
  //     description:
  //       '',
  //     imageUrl: '',
  //     link: '',
  //   },
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'maxlimgj', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/maxlimgj/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;