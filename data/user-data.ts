export const userData = {
  // Personal Information
  personal: {
    name: 'Devashish',
    role: 'Full Stack Developer',
    location: 'Delhi, India',
    phone: '+91-9140147107',
    email: 'de5ash1zh@gmail.com',
    github: 'https://github.com/devzshrc',
    linkedin: 'https://linkedin.com/in/devzshrc',
    twitter: 'https://x.com/de5ash1zh',
    portfolio: 'https://devzshrc.vercel.app',
    calUsername: 'de5ash1zh',
  },

  // Hero Section
  hero: {
    category: 'FEATURED DEVELOPER',
    description:
      'Full Stack Developer specializing in building scalable, intelligent web applications with React, Node.js, and PostgreSQL. Focused on crafting secure, performant, and user-centered systems powered by clean design and modern AI integrations.',
  },

  // About Section
  about: {
    title: 'About',
    subtitle: 'Turning ideas into interactive systems',
    description:
      "I'm a full stack developer skilled in building end-to-end web applications using React, Node.js, and PostgreSQL. Experienced in authentication systems, REST APIs, and scalable deployments on AWS and Docker. I’ve developed 4+ production-ready tools, including an AI CLI assistant and a modern S3 file explorer.",
    philosophy:
      'I believe great software should amplify human capability. My focus is on performance, clarity, and systems that scale gracefully from prototype to production.',
    stats: [
      { label: 'Years Experience', value: '2', unit: '+' },
      { label: 'Projects Completed', value: '5', unit: '+' },
      { label: 'Production Tools', value: '4', unit: '+' },
      { label: 'Technologies Mastered', value: '10', unit: '+' },
    ],
  },

  // Projects
  projects: [
    {
      id: '1',
      title: 'S3UI – Modern S3 File Explorer',
      description:
        'Developed a responsive web interface for managing AWS S3 buckets, achieving 95% faster navigation compared to the AWS Console. Implemented secure authentication, drag-and-drop uploads, and real-time analytics for monitoring storage usage.',
      technologies: ['React', 'AWS S3', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://s3ui.vercel.app',
      githubUrl: '#',
      year: '2025',
      type: 'Web Application',
      duration: '3',
      teamSize: '1',
    },

    {
      id: '5',
      title: 'MonoHub Lookup – GitHub Profile Explorer',
      description:
        'Created a minimal web app to explore GitHub user profiles and repositories using the GitHub API. Implemented real-time data fetching, smooth UI transitions, pagination, and error handling for a seamless user experience.',
      technologies: ['React', 'Next.js', 'GitHub API', 'Tailwind CSS'],
      liveUrl: 'https://monohub.vercel.app',
      githubUrl: '#',
      year: '2025',
      type: 'Web Application',
      duration: '2',
      teamSize: '1',
    },
  ],

  // Skills
  skills: {
    title: 'Expertise',
    subtitle: 'Technologies and tools I use to build reliable systems',
    categories: {
      skills: [
        'Full Stack Development',
        'REST API Design',
        'Database Architecture',
        'Authentication Systems',
        'Scalable Infrastructure',
        'Responsive UI Engineering',
      ],
      technologies: [
        'React.js & Next.js',
        'Node.js & Express',
        'PostgreSQL & MySQL',
        'Prisma ORM',
        'AWS (S3, EC2)',
        'Docker & Linux',
        'Tailwind CSS & ShadCN UI',
        'TypeScript & JavaScript',
      ],
    },
    tags: ['Frontend', 'Backend', 'DevOps', 'Cloud', 'AI Integration'],
  },

  // Experience
  experience: [
    {
      company: 'Technophilia',
      role: 'Full Stack Developer Intern',
      duration: 'June 2024 – July 2024',
      location: 'Remote',
      description:
        'Worked on backend development using Node.js, PostgreSQL, and Prisma ORM. Designed and optimized relational database schemas to improve query performance and scalability.',
    },
  ],

  // Education
  education: [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Babasaheb Bhimrao Ambedkar University (BBAU), Lucknow',
      cgpa: '7.5',
      year: '2021 – 2025',
    },
  ],

  // Activities
  extracurricular: [
    'Actively write technical and social media posts on X and LinkedIn, engaging a growing developer audience.',
    'Participated in PW Skills Hackathon organized by the Government of Rajasthan.',
    'Attended multiple technology conferences and developer summits.',
  ],

  // Magazine Elements
  magazine: {
    logo: 'PORTFOLIO',
    tagline: 'Full Stack Development & AI Integration',
    issue: 'VOL. 01 — ISSUE 001',
    date: 'OCTOBER 2025',
  },

  // Navigation
  navigation: [
    { id: 'hero', label: 'Intro' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'data', label: 'Data' },
    { id: 'expertise', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
};
