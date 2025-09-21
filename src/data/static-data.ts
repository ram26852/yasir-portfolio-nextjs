// NAVIGATION ITEM
export const navItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "Skills",
    url: "#skills",
  },
  {
    id: 5,
    title: "Experience",
    url: "#experience",
  },
  {
    id: 6,
    title: "Contact",
    url: "#contact",
  },
];

// HERO ITEM
export const heroItem = {
  id: 1,
  image_url: "/yas.jpeg",
  title: "hero",
  name: "Hi, I'm Muhammad Yasir",
  designation: "Front-End Developer",
  experience: "2 years",
  focus: "Next.js & React.js",

  contact: {
    title: "Contact me here",
    url: "#contact",
  },
  cv: {
    title: "Download CV",
    url: "https://drive.google.com/file/d/1ZrRSdyO-50wz6wBiUY7MWl8AZ5BPF7mT/view?usp=sharing",
  },
  iconOne: {
    title: "GitHub",
    image_url: "",
    url: "https://github.com/myasirweb",
  },
  iconTwo: {
    title: "Linkedin",
    image_url: "",
    url: "https://www.linkedin.com/in/yasirweb/",
  },
};

// ABOUT ITEM
export const aboutItem = {
  title: "About Me",
  btnTitle: "Know More About Me",
  url: "https://www.linkedin.com/in/yasirweb/",
  description: `👨‍💻 Hi, I'm Muhammad Yasir – a Front-End Developer with 2 years of experience specializing in building responsive and high-performance websites and web applications. I focus on modern technologies like Next.js and React.js to create fast, user-friendly interfaces that elevate the digital experience. Alongside front-end development, I also provide freelance services for custom websites using HTML, CSS, and JavaScript, and offer WordPress development for startups and small businesses. Whether it's a dynamic React project, a sleek Next.js app, or a WordPress site, I deliver SEO-friendly, scalable, and visually clean solutions tailored to your goals.`,
};

// PROJECTS ITEM
export const projectsItem = {
  title: "My Projects",
  url: "/projects",
  btnTitle: "All Projects",
  projects: [
    {
      id: 1,
      title: "Makki Academy",
      image_url: "/makkiacademy.png",
      description:
        "Makki Academy is an educational platform built using WordPress, offering a range of online Islamic courses and resources. The site features a clean design, user-friendly navigation, and is optimized for both desktop and mobile devices.",
      date: new Date(2023, 11, 22),
      projectLink: "https://makkiacademy.com/",
      github: "https://makkiacademy.com/",
      technology: [
        {
          id: 1,
          title: "WordPress",
        },
        {
          id: 2,
          title: "Elementor",
        },
        {
          id: 3,
          title: "PHP",
        },
      ],
    },
    {
      id: 2,
      title: "Learn Muslim",
      image_url: "/learnmuslim.png",
      description:
        "Learn Muslim is a WordPress-based educational website that provides online Islamic learning resources, including courses, articles, and tools for students of all ages. The website is mobile-friendly and integrates modern UI with Islamic educational goals.",
      date: new Date(2024, 2, 23),
      projectLink: "https://learnmuslim.com/",
      github: "https://learnmuslim.com/",
      technology: [
        {
          id: 1,
          title: "WordPress",
        },
        {
          id: 2,
          title: "Elementor",
        },
        {
          id: 3,
          title: "PHP",
        },
      ],
    },
    {
      id: 3,
      title: "Ibex Global Incorp",
      image_url: "/ibexglobal.png",
      description: "Ibex Global Incorp is a corporate website built using HTML, CSS, and JavaScript, with a functional contact form using PHP for email handling. The site showcases professional services, modern animations, and responsive design.",
      date: new Date(2025, 6, 24),
      projectLink: "https://ibexglobalincorp.com/",
      github: "https://github.com/myasirweb/ibex-global-website",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
      ],
    },
    {
      id: 4,
      title: "SAJ Legal",
      image_url: "/sajlegal.png",
      description:
        "SAJ Legal is a custom-built legal services website designed for a UK-based law firm. It features a clean UI, responsive layout, and user-focused content structure to showcase services and practice areas effectively.",
      date: new Date(2025, 8, 19),
      projectLink:
        "https://www.saj.legal/",
      github:
        "https://github.com/myasirweb/saj-legal-website",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "JavaScript",
        },
        {
          id: 4,
          title: "PHP",
        },
      ],
    },
    {
  id: 5,
  title: "SAJ World",
  image_url: "/sajworld.png",
  description:
    "SAJ World is a custom-designed, fully responsive and SEO-optimized business website built with pure HTML, CSS, and JavaScript. It showcases global consultancy services with a clean layout, smooth animations, and a professional presentation tailored for international audiences.",
  date: new Date(2025, 7, 17),
  projectLink: "https://www.sajworld.com/", 
  github: "https://github.com/myasirweb/saj-world-website", 
  technology: [
    { id: 1, title: "HTML5" },
    { id: 2, title: "CSS3" },
    { id: 3, title: "JavaScript" },
    { id: 4, title: "Responsive Design" },
  
  ]
    },
    {
      id: 6,
      title: "SA Jamali",
      image_url: "/sajamali.png",
      description:
        "SA Jamali is a custom-designed professional website created for a UK-based legal consultant. Built using modern HTML, CSS, and JavaScript with PHP for contact functionality, it offers a clean and responsive layout to showcase services and expertise.",
      date: new Date(2025, 6, 25),
      projectLink:
        "https://sajamali.com/",
      github:
        "https://github.com/myasirweb/sa-jamali-website/tree/main",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
        },
        {
          id: 3,
          title: "PHP",
        },
      ],
    },
    {
      id: 7,
      title: "People Junction",
      image_url: "/peoplejunction.jpeg",
      description: "People Junction is a professionally designed website for a consulting and recruitment service provider. Custom built using HTML, CSS, and JavaScript, the site features responsive layouts, smooth navigation, and a clean user experience to reflect the brand’s professionalism.",
      date: new Date(2025, 4, 20),
      projectLink: "https://peoplejunction.org/",
      github: "https://github.com/myasirweb/people-junction-website",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
        },
      ],
    },
    {
      id: 8,
      title: "Creative Agency Website Design",
      image_url: "/digitalagency.png",
      description:
        "Creative Agency Website Design using HTML, CSS & JavaScript.",
      date: new Date(2023, 0, 17),
      projectLink:
        "https://myasirweb.github.io/creative-agency-website/",
      github: "https://github.com/myasirweb/creative-agency-website",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
        },
      ],
    },
    {
      id: 9,
      title: "HubPay",
      image_url: "/hubpay.png",
      description:
        "HubPay is a custom-designed business website developed using HTML, CSS, and JavaScript. It showcases financial services with a clean layout, responsive design, and engaging UI elements to ensure a professional and trustworthy brand presence.",
      date: new Date(2024, 5, 18),
      projectLink: "https://hubpay.pk/",
      github: "https://github.com/myasirweb/HubPay",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
        },
      ],
    },
    {
  id: 10,
  title: "Responsive Animated Education Website",
  image_url: "/education.png",
  description:
    "A fully responsive and visually engaging education-themed website built using pure HTML, CSS, and JavaScript. It features smooth animations, interactive UI elements, and a clean layout to provide an intuitive learning experience. The design adapts seamlessly across devices, ensuring optimal performance and accessibility for students and educators alike.",
  date: new Date(2023, 10, 20),
  projectLink: "https://myasirweb.github.io/education-website/",
  github: "https://github.com/myasirweb/education-website",
  technology: [
    { id: 1, title: "HTML5" },
    { id: 2, title: "CSS3 (Flexbox, Grid)" },
    { id: 3, title: "JavaScript (ES6+)" },
    { id: 4, title: "Responsive Design" },
    { id: 5, title: "CSS Animations & Transitions" },
  ]
    },
    {
  id: 11,
  title: "Blue Rock",
  image_url: "/bluerock.png",
  description:
    "Blue Rock is a modern, fully responsive and SEO-optimized website template built with pure HTML, CSS, and JavaScript. It features a clean, animated layout ideal for portfolios, landing pages, or educational websites.",
  date: new Date(2025, 5, 19),
  projectLink: "https://myasirweb.github.io/blue-rock/",
  github: "https://github.com/myasirweb/blue-rock",
  technology: [
    { id: 1, title: "HTML5" },
    { id: 2, title: "CSS3" },
    { id: 3, title: "JavaScript" },
    { id: 4, title: "Responsive Design" },
    { id: 5, title: "CSS Animations & Transitions" },
  ]
    },
    {
  id: 12,
  title: "Barrister Hub",
  image_url: "/barriesterhub.png",
  description:
    "Barrister Hub is a professionally designed, fully responsive and SEO-optimized website built with pure HTML, CSS and JavaScript. Featuring smooth animations and a modern interface, it provides a polished online presence for legal professionals, law firms, or consultancy services.",
  date: new Date(2025, 7, 5),
  projectLink: "https://www.barristershub.co.uk/",
  github: "https://github.com/myasirweb/barristers-hub-website",
  technology: [
    { id: 1, title: "HTML5" },
    { id: 2, title: "CSS3" },
    { id: 3, title: "JavaScript"},
    { id: 4, title: "Responsive Design" },
    { id: 5, title: "CSS Animations & Transitions" },
  ]
    },
    {
      id: 13,
      title: "MERN E-commerce Watches App",
      image_url: "/ecommerce.png",
      description:
        "A full-featured MERN stack e-commerce application built for selling watches. This project includes user authentication, product management, shopping cart, and admin dashboard functionalities using MongoDB, Express, React, and Node.js.",
      date: new Date(2025, 1, 8),
      projectLink:
        "https://github.com/myasirweb/mern-ecommerce-wachesApp",
      github:
        "https://github.com/myasirweb/mern-ecommerce-wachesApp",
      technology: [
        {
          id: 1,
          title: "MongoDB",
        },
        {
          id: 2,
          title: "Express.js",
        },
        {
          id: 3,
          title: "React.js",
        },
        {
          id: 3,
          title: "Node.js",
        },
      ],
    },
    {
  id: 14,
  title: "Blue Rock Capital",
  image_url: "/bluerockcapital.png",
  description:
    "A modern, SEO-friendly corporate website for Blue Rock Capital built with Next.js 14 and Tailwind CSS. It uses Radix UI components, React Hook Form, Recharts, and other libraries to deliver a fast, accessible, and scalable user experience. The site features responsive layouts, interactive elements, and server-side rendering for optimal performance.",
  date: new Date(2025, 9, 10),
  projectLink: "https://bluerock.capital/",
  github: "https://github.com/myasirweb/bluerock-capital-nextjs",
  technology: [
    { id: 1, title: "Next.js 14" },
    { id: 2, title: "React 18" },
    { id: 3, title: "Tailwind CSS" },
    { id: 4, title: "Radix UI" },
    { id: 5, title: "React Hook Form" },
    { id: 6, title: "Recharts" },
    { id: 7, title: "Zod" },
  ]
    },
    {
  id: 15,
  title: "Muhammad Yasir – Personal Portfolio",
  image_url: "/portfolio.png",
  description:
    "A responsive personal portfolio website built with Next.js and TypeScript to showcase projects, skills, and contact information. It integrates EmailJS for contact form submissions and uses React Icons and React Toastify for interactive UI elements. The site is optimized for performance, accessibility, and SEO.",
  date: new Date(2025, 9, 15),
  projectLink: "#", 
  github: "https://github.com/myasirweb/yasir-portfolio-nextjs", 
  technology: [
    { id: 1, title: "Next.js" },
    { id: 2, title: "React" },
    { id: 3, title: "TypeScript" },
    { id: 4, title: "EmailJS" },
    { id: 5, title: "React Icons" },
    { id: 6, title: "React Toastify" }
  ]
    }

    
  ],
};

// SKILLS ITEM
export const skillsItem = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "SCSS",
  },
  {
    id: 4,
    title: "Bootstrap",
  },
  {
    id: 5,
    title: "Tailwind CSS",
  },
  {
    id: 5,
    title: "JavaScript",
  },

  {
    id: 6,
    title: "MERN",
  },
  {
    id: 7,
    title: "React.js",
  },

  {
    id: 8,
    title: "Node.js",
  },
  {
    id: 9,
    title: "Express.js",
  },
  {
    id: 10,
    title: "MongoDB",
  },
  {
    id: 11,
    title: "PostgreSQL",
  },
  {
    id: 12,
    title: "Next.js",
  },

  {
    id: 13,
    title: "Git",
  },
  {
    id: 14,
    title: "GitHub",
  },
  {
    id: 15,
    title: "Bitbucket",
  },
  {
    id: 16,
    title: "WordPress",
  },
];

// EXPERIENCE ITEM
export const experienceItem = [
  {
    id: 1,
    company: "Miletap · Full-Time",
    role: "Front-End Developer",
    from: new Date(2023, 6, 1).getFullYear(),
    to: "",
    description:
      "Front-End Developer with 2 years of experience building responsive, high-performance web applications. Skilled in React.js, JavaScript, HTML, and CSS, with expertise in creating reusable components, integrating REST APIs using Redux Toolkit (RTK), and translating UI/UX designs into interactive interfaces. I also work with WordPress, developing and customizing business websites tailored to organizational needs. Focused on delivering clean, modern, and scalable web solutions that enhance user experience and support business growth.",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "BOOTSTRAP",
      },
      {
        id: 4,
        title: "TAILWIND CSS",
      },
      {
        id: 5,
        title: "JAVASCRIPT",
      },
      {
        id: 6,
        title: "REACT.JS",
      },
      {
        id: 7,
        title: "Redux Toolkit (RTK),",
      },
      {
        id: 8,
        title: "REST APIs",
      },
      {
        id: 9,
        title: "GIT",
      },
      {
        id: 10,
        title: "GITHUB",
      },

      {
        id: 11,
        title: "Bitbucket",
      },
      {
        id: 12,
        title: "WordPress",
      },
    ],
  },
  {
    id: 2,
    company: "RojrzTech LLC · Part-Time",
    role: "Front-End Developer",
    from: new Date(2024, 2, 1).getFullYear(),
    to: new Date(2025, 6, 1).getFullYear(),
    description:
      "In 2024, I worked part-time at RojrzTech LLC as a WordPress Developer and Custom Website Creator. During my time there, I was responsible for designing and developing modern, SEO-optimized websites using WordPress, Elementor, Elementor Kit, and essential plugins like WPForms, Yoast SEO, and WooCommerce. I also built custom business websites using HTML, CSS, JavaScript, and jQuery, ensuring responsive layouts, clean code, and enhanced performance. My role involved collaborating with internal teams to deliver tailored web solutions that met diverse client needs and aligned with industry best practices.",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JavaScript",
      },
      {
        id: 4,
        title: "Elementor",
      },
      {
        id: 5,
        title: "Elementor Kit",
      },
      {
        id: 6,
        title: "WordPress",
      },
      {
        id: 7,
        title: "WooCommerce",
      },
      {
        id: 8,
        title: "WPForms",
      },
      {
        id: 9,
        title: "Yoast SEO",
      },
      {
        id: 10,
        title: "Responsive Web Design",
      },
      {
        id: 11,
        title: "Custom Business Websites",
      },
      {
        id: 12,
        title: "Web Development",
      },
    ],
  },
  {
    id: 3,
    company: "Freelance · Full-Time",
    role: "Front-End Developer & WordPress Specialist",
    from: new Date(2023, 1, 1).getFullYear(),
    to: "",
    description:
      "Since 2023, I have been working as a freelance Front-End Developer and WordPress Specialist, delivering high-quality and SEO-optimized websites tailored for startups, small businesses, and professional organizations. My freelance projects include developing responsive custom business websites using HTML, CSS, and JavaScript, as well as building dynamic WordPress websites using Elementor, Elementor Kit, WooCommerce, and other essential plugins. Additionally, I develop full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) to deliver scalable and high-performance solutions. I focus on clean design, intuitive interfaces, and performance-driven solutions aligned with business goals.",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JavaScript",
      },
      {
        id: 4,
        title: "React.js",
      },
      {
        id: 5,
        title: "Node.js",
      },
      {
        id: 6,
        title: "Express.js",
      },
      {
        id: 7,
        title: "MongoDB",
      },
      {
        id: 8,
        title: "Elementor",
      },
      {
        id: 9,
        title: "Elementor Kit",
      },
      {
        id: 10,
        title: "WordPress",
      },
      {
        id: 11,
        title: "WooCommerce",
      },
      {
        id: 12,
        title: "WPForms",
      },
      {
        id: 13,
        title: "Yoast SEO",
      },
      {
        id: 14,
        title: "Responsive Web Design",
      },
      {
        id: 15,
        title: "Custom Business Websites",
      },
      {
        id: 16,
        title: "Web Development",
      },
    ],
  },
];

// CONTACT ITEM
export const contactItem = {
  title: "Contact Me",
  description:
    "Looking to start a new project or need a skilled Front-End or MERN Stack Developer? I'm here to help! Whether it's a custom website, WordPress development, or a full-stack web application, feel free to reach out using the contact form below. I’ll respond promptly to discuss how we can bring your ideas to life. Let’s build something great together!",
  contact_items: [
    {
      id: 1,
      title: "Email Me",
      url: "mailto:muhammad.yasir1368@gmail.com",
    },
    {
      id: 2,
      title: "Call Me",
      url: "tel:+92-349-1284203",
    },
    {
      id: 3,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/yasirweb/",
    },
  ],
};
// COPYRIGHT ITEM
export const copyrightItem = {
  name: "Muhammad Yasir",
  url: "https://www.linkedin.com/in/yasirweb/",
};
