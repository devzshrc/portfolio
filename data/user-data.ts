export const userData = {
  // Personal Information
  personal: {
    name: 'Devashish',
    role: 'Full Stack Developer',
    location: 'Delhi, India',
    email: 'de5ash1zh@gmail.com',
    twitter: '@de5ash1zh',
    github: 'github.com/devzshrc',
    calUsername: 'de5ash1zh',
  },

  // Hero Section
  hero: {
    category: 'FEATURED DEVELOPER',
    description:
      'Building scalable, intelligent web applications powered by modern technologies and clean design. Explore my projects that merge code, creativity, and problem-solving.',
  },

  // About Section (Keep it short and crisp)
  about: {
    title: 'About',
    subtitle: 'Turning ideas into interactive systems',
    description:
      "I'm a full stack developer skilled in building end-to-end web applications using React, Node.js, and PostgreSQL. I’ve developed production-grade tools ranging from AI-powered assistants to modern S3 explorers and analytics dashboards.",
    philosophy:
      'Software should not only function—it should empower. I focus on creating intuitive, performant, and secure experiences that scale seamlessly.',
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
      title: 'NutriSync – AI-Powered Nutrition App',
      description:
        'Developed a full-stack app that uses body metrics and food images to deliver personalized health insights. Features AI meal planner, calorie tracking, and a secure real-time dashboard.',
      technologies: ['React', 'Node.js', 'Supabase', 'Gemini API'],
      liveUrl: 'https://your-nutrisync-demo-link.com',
      githubUrl: 'https://github.com/devzshrc/nutrisync',
      year: '2024',
      type: 'Web Application',
      duration: '4',
      teamSize: '1',
    },
    {
      id: '2',
      title: 'S3UI – Modern S3 File Explorer',
      description:
        'Built a responsive web interface for AWS S3 bucket management with secure authentication and drag-and-drop uploads. Added real-time storage analytics and achieved 95% faster navigation compared to the AWS Console.',
      technologies: ['React', 'AWS S3', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://your-s3ui-demo-link.com',
      githubUrl: 'https://github.com/devzshrc/s3ui',
      year: '2024',
      type: 'Web Application',
      duration: '3',
      teamSize: '1',
    },
    {
      id: '3',
      title: 'AI-Powered Custom CLI Cursor',
      description:
        'Command-line AI assistant that scaffolds code, debugs logic, writes documentation, and generates test cases from natural language prompts using OpenAI and Gemini APIs.',
      technologies: ['Node.js', 'OpenAI API', 'Gemini API', 'TypeScript'],
      liveUrl: '',
      githubUrl: 'https://github.com/devzshrc/ai-cli-cursor',
      year: '2024',
      type: 'CLI Tool',
      duration: '2',
      teamSize: '1',
    },
    {
      id: '4',
      title: 'LeetLab – Leetcode System Design',
      description:
        'Full-stack coding practice platform with code execution via Dockerized Judge0 instance. Includes real-time editor, submission tracking, and community challenges.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      liveUrl: '',
      githubUrl: 'https://github.com/devzshrc/leetlab',
      year: '2025',
      type: 'Web Application',
      duration: '5',
      teamSize: '2',
    },
    {
      id: '5',
      title: 'MonoHub Lookup – GitHub Profile Explorer',
      description:
        'Minimal app to explore GitHub profiles and repositories using GitHub API with real-time data fetching, pagination, and smooth transitions.',
      technologies: ['React', 'Next.js', 'GitHub API', 'Tailwind CSS'],
      liveUrl: 'https://your-monohub-demo-link.com',
      githubUrl: 'https://github.com/devzshrc/monohub-lookup',
      year: '2024',
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
        'REST APIs',
        'Database Design',
        'Authentication Systems',
        'Scalable Architecture',
        'Responsive UI',
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
    { id: 'contact', label: 'Contact' },
  ],
};
