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
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "List of publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This page contains a brief of my vitae, for the extended version please send me and e-mail.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "news-i-started-my-phd-journey",
          title: 'I started my PhD journey!',
          description: "",
          section: "News",},{id: "news-the-first-weeks-of-july-have-been-crazy-the-first-week-i-attended-the-cost-5th-training-school-and-the-second-week-i-presented-my-first-paper-at-meditcom2024-everything-while-i-was-in-a-wheelchair-i-broke-my-foot-at-the-end-of-june-p-s-it-took-months-but-i-am-completely-fine",
          title: 'The first weeks of July have been crazy. The first week, I attended...',
          description: "",
          section: "News",},{id: "news-toward-real-time-digital-twins-of-em-environments-computational-benchmark-for-ray-launching-software-in-ieee-open-journal-of-the-communication-society-is-online",
          title: 'Toward Real-Time Digital Twins of EM Environments: Computational Benchmark for Ray Launching Software...',
          description: "",
          section: "News",},{id: "news-semantic-communication-via-features-identificaiton-in-ieee-international-conference-on-communication-is-online",
          title: 'Semantic Communication via Features Identificaiton in IEEE International Conference on Communication is online!...',
          description: "",
          section: "News",},{id: "news-exploiting-age-of-information-in-network-digital-twins-for-ai-driven-real-time-link-blockage-detection-in-elservier-computer-networks-is-online",
          title: 'Exploiting age of information in network digital twins for AI-driven real-time link blockage...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%63%68%65%6C%65.%7A%68%75@%70%6F%6C%69%6D%69.%69%74", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=GEI6DqMAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-7448-559X", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Michele-Zhu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michele-zhu-a17818224", "_blank");
        },
      },{
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
