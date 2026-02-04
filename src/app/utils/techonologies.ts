import { SkillsData } from "@/app/components/Skills";

export const portfolioSkills: SkillsData = {
  Frontend: [
    {
      name: "Angular",
      icon: "/icons/brands/angular.svg",
      url: "https://angular.io/",
      attribution: {
        description: "Attributed to Angular and individual contributors.", 
        logoUrl: "https://angular.dev/press-kit"
      },
    },
    { 
      name: "React", 
      icon: "/icons/brands/react.svg",
      url: "https://react.dev/",
      attribution: {
        description: "Attributed to Facebook, Inc. and individual contributors.", 
        license: "Creative Commons Attribution-Share Alike 1.0 Generic license",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/1.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:React-icon.svg"
      },
    },
    { 
      name: "Next.js", 
      icon: "/icons/brands/nextjs.svg",
      url: "https://nextjs.org/",
      attribution: {
        // description: "Copyright © Vercel Inc.", 
        license: "Logo License",
        licenseUrl: "https://www.svgrepo.com/page/licensing/#Logo",
        logoUrl: "https://www.svgrepo.com/svg/306466/next-dot-js"
      }
    },
    { 
      name: "TypeScript", 
      icon: "/icons/brands/typescript.svg",
      url: "https://www.typescriptlang.org/",
      attribution: {
        description: "Copyright © Microsoft Corporation.",
        license: "Creative Commons CC0 1.0 Universal Public Domain Dedication",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:TypeScript_Logo.svg"
      } 
    },
    { 
      name: "JavaScript", 
      icon: "/icons/brands/javascript.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
      attribution: {
        description: "JavaScript is a trademark of Oracle Corporation in the United States.",
        license: "Creative Commons CC0 1.0 Universal Public Domain Dedication",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Javascriptsvg.svg"
      }
    },
    { 
      name: "Tailwind", 
      icon: "/icons/brands/tailwind.svg",
      url: "https://tailwindcss.com/",
      attribution: {
        description: "Trademarks of Tailwind Labs Inc.",
        license: "Creative Commons Attribution-Share Alike 4.0 International license",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Tailwind_CSS_Logo.svg"
      } 
    },
    { 
      name: "CSS", 
      icon: "/icons/brands/css.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      attribution: {
        // description: "Copyright © Håkon Wium Lie and Bert Bos.",
        license: "Creative Commons Attribution 3.0 Unported license",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:CSS3_logo.svg"
      }
    },
  ],
  Backend: [
    { 
      name: "Node.js", 
      icon: "/icons/brands/nodejs.svg",
      url: "https://nodejs.org/",
      attribution: {
        description: "Trademark of OpenJS Foundation.",
        license: "OpenJS Foundation Trademark Policy",
        licenseUrl: "https://nodejs.org/en/about/branding",
        logoUrl: "https://nodejs.org/en/about/branding",
      } 
    },
    { 
      name: "Express", 
      icon: "/icons/brands/expressjs.svg",
      url: "https://expressjs.com/",
      attribution: {
        description: "Trademark of OpenJS Foundation.",
        license: "OpenJS Foundation Trademark Policy",
        licenseUrl: "https://nodejs.org/en/about/branding",
        logoUrl: "https://uxwing.com/express-js-icon/",
      }
    },
    {
      name: "FastAPI",
      icon: "/icons/brands/fastapi.svg",
      url: "https://fastapi.tiangolo.com/",
      attribution: {
        license: "MIT License",
        licenseUrl: "https://opensource.org/license/mit",
        logoUrl: "https://commons.wikimedia.org/wiki/File:FastAPI_logo.svg"
      },
    },
    {
      name: "Django",
      icon: "/icons/brands/django.svg",
      url: "https://www.djangoproject.com/",
      attribution: {
        description: "The Django Software Foundation (DSF) is the owner of the Django trademark.",
        license: "Creative Commons Attribution 3.0 Unported license",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0/deed.en",
        logoUrl: "https://www.djangoproject.com/community/logos/"
      },
    },
    { 
      name: "Rest APIs", 
      icon: "/icons/brands/restapi.svg",
      url: "https://restfulapi.net/",
      attribution: {
        // description: "Representational State Transfer (REST) is an architectural style for distributed hypermedia systems.",
        license: "ISC License",
        licenseUrl: "https://lucide.dev/license",
        logoUrl: "https://lucide.dev/icons/server"
      } 
    },
    { 
      name: "Python", 
      icon: "/icons/brands/python.svg",
      url: "https://www.python.org/",
      attribution: {
        description: "Python is a trademark of the Python Software Foundation.",
        license: "MIT License",
        licenseUrl: "https://www.svgrepo.com/page/licensing/#MIT",
        logoUrl: "https://www.svgrepo.com/svg/374016/python"
      } 
    },
    { 
      name: "Java", 
      icon: "/icons/brands/java.svg",
      url: "https://www.java.com/",
      attribution: {
        description: "Java is a registered trademark of Oracle.",
        license: "Logo License",
        licenseUrl: "https://www.svgrepo.com/page/licensing/#Logo",
        logoUrl: "https://www.svgrepo.com/svg/303388/java-4-logo"
      } 
    },
  ], 
  Databases: [
    { 
      name: "PostgreSQL", 
      icon: "/icons/brands/postgresql.svg",
      url: "https://www.postgresql.org/",
      attribution: {
        // description: "Copyright © PostgreSQL Global Development Group.\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\t1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\t2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\t3. Neither the name of PostgreSQL Global Development Group nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\nThis software is provided by PostgreSQL Global Development Group \"as is\" and any express or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall PostgreSQL Global Development Group be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.",
        description: "Copyright © PostgreSQL Global Development Group.",
        license: "3-Clause BSD License",
        licenseUrl: "https://opensource.org/license/bsd-3-clause",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Postgresql_elephant.svg"
      },
    },
  ],
  "Datascience & ML Tools": [
    { 
      name: "Pandas", 
      icon: "/icons/brands/pandas.svg",
      url: "https://pandas.pydata.org/",
      attribution: {
        description: "Copyright © 2008 AQR Capital Management, LLC, Lambda Foundry, Inc. and PyData Development Team",
        license: "3-Clause BSD License",
        licenseUrl: "https://opensource.org/license/bsd-3-clause",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Pandas_mark.svg"
      } 
    },
    { 
      name: "Numpy", 
      icon: "/icons/brands/numpy.svg",
      url: "https://numpy.org/",
      attribution: {
        // description: "Copyright © NumPy Developers.",
        license: "Creative Commons Attribution-Share Alike 4.0 International license",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Numpy-svgrepo-com.svg"
      } 
    },
    { 
      name: "Matplotlib", 
      icon: "/icons/brands/matplotlib.svg",
      url: "https://matplotlib.org/",
      attribution: {
        description: "Copyright © Matplotlib Development Team.",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Matplotlib_icon.svg"
      } 
    },
    { 
      name: "Scipy", 
      icon: "/icons/brands/scipy.svg",
      url: "https://scipy.org/",
      attribution: {
        description: "Copyright © SciPy Developers.",
        logoUrl: "https://commons.wikimedia.org/wiki/File:SCIPY_2.svg"
      } 
    },
    { 
      name: "Jupyter", 
      icon: "/icons/brands/jupyter-notebook.svg",
      url: "https://jupyter.org/",
      attribution: {
        description: "Copyright © 2017 Project Jupyter Contributors",
        license: "3-Clause BSD License",
        licenseUrl: "https://opensource.org/license/bsd-3-clause",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Jupyter_logo.svg"
      } 
    },
  ],
  "Systems & Low-Level": [
    { 
      name: "Linux", 
      icon: "/icons/brands/linux.svg",
      url: "https://www.linux.org/",
      attribution: {
        description: "Attribution: lewing@isc.tamu.edu Larry Ewing and The GIMP",
        license: "Creative Commons CC0 1.0 Universal Public Domain Dedication",
        licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Tux.svg"
      } 
    },
    { 
      name: "Bash", 
      icon: "/icons/brands/bash.svg",
      url: "https://www.gnu.org/software/bash/",
      attribution: {
        // description: "Copyright © Brian Fox and Chet Ramey.",
        license: "Free Art License",
        licenseUrl: "https://artlibre.org/licence/lal/en/",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Bash_Logo_Colored.svg"
      } 
    },
    { 
      name: "C++", 
      icon: "/icons/brands/C++.svg",
      url: "https://isocpp.org/",
      attribution: {
        description: "C++ is a trademark of the Standard C++ Foundation.",
        logoUrl: "https://commons.wikimedia.org/wiki/File:ISO_C%2B%2B_Logo.svg",
      } 
    },
    { 
      name: "C", 
      icon: "/icons/brands/C.svg" ,
      url: "https://www.c-language.org/",
      attribution: {
        // description: "Copyright © Dennis Ritchie and ISO/IEC JTC1/SC22/WG14.",
        logoUrl: "https://commons.wikimedia.org/wiki/File:C_Programming_Language.svg",
      }
    },
  ],
  "DevOps & Cloud": [
    { 
      name: "Docker", 
      icon: "/icons/brands/docker.svg" ,
      url: "https://www.docker.com/",
      attribution: {
        description: "Copyright 2013-2021 Docker, Inc. All rights reserved.",
        license: "Creative Commons Attribution-Share Alike 4.0 International license",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Docker-svgrepo-com.svg"
      }
    },
    { 
      name: "Render", 
      icon: "/icons/brands/render.svg",
      url: "https://render.com/", 
      attribution: {
        description: "Render is a trademark of Render Services, Inc.",
        license: "Render Terms of Service",
        licenseUrl: "https://render.com/terms",
        logoUrl: "https://render.com/"
      }
    },
    { 
      name: "Vercel", 
      icon: "/icons/brands/vercel.svg",
      url: "https://vercel.com/", 
      attribution: {
        description: "Copyright © Ionic Team",
        license: "MIT License",
        licenseUrl: "https://opensource.org/license/mit",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Ionicons_logo-vercel.svg",
      }
    },
  ],
  "Version Control": [
    { 
      name: "Git", 
      icon: "/icons/brands/git.svg",
      url: "https://git-scm.com/", 
      attribution: {
        description: "Git and the Git logo are either registered trademarks or trademarks of Software Freedom Conservancy, Inc., corporate home of the Git Project, in the United States and/or other countries. Git logo attributed to Jason",
        license: "Creative Commons Attribution 3.0 Unported license",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0/deed.en",
        logoUrl: "https://git-scm.com/community/logos"
      }
    },
    { 
      name: "GitHub", 
      icon: "/icons/brands/github.svg",
      url: "https://github.com",
      attribution: {
        description: "Copyright © 2018 GitHub Inc.",
        license: "MIT License",
        licenseUrl: "https://opensource.org/license/mit",
        logoUrl: "https://commons.wikimedia.org/wiki/File:Octicons-mark-github.svg"
      }
    },
    { 
      name: "GitLab", 
      icon: "/icons/brands/gitlab.svg",
      url: "https://gitlab.com/", 
      attribution: {
        description: "Gitlab is a trademark of GitLab Inc.", 
        license: "Creative Commons Attribution-Share Alike 4.0 International, 3.0 Unported, 2.5 Generic, 2.0 Generic and 1.0 Generic license",
        licenseUrl: "https://creativecommons.org/share-your-work/cclicenses/",
        logoUrl: "https://commons.wikimedia.org/wiki/File:GitLab_icon.svg",
      }
    },
  ]
};