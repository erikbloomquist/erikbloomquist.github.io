// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Click a project to read more",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "My teaching experiences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-coursework",
          title: "Coursework",
          description: "Selected coursework",
          section: "Navigation",
          handler: () => {
            window.location.href = "/coursework/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My academic CV, embedded below",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-spectral-feature-extraction-for-rl-in-financial-markets",
          title: 'Spectral Feature Extraction for RL in Financial Markets',
          description: "Combining frequency-domain with reinforcement learning for asset trading.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rl-trading/";
            },},{id: "projects-literature-review-on-adversarial-machine-learning-fins",
          title: 'Literature Review on Adversarial Machine Learning (FINS)',
          description: "Surveying adversarial ML research with a focus on security applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fins-adversarial/";
            },},{id: "projects-interpretable-reinforcement-learning-fins",
          title: 'Interpretable Reinforcement Learning (FINS)',
          description: "Poster presentation on interpretability methods for RL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fins-interpretable-rl/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
