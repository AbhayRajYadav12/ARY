export const personal = {
  name: 'Abhay Raj Yadav',
  tagline: 'AI/ML Engineer & Full-Stack Developer',
  summary:
    'Computer Science student with specialized AI/ML training from IIT Ropar, combining cloud-native development expertise with data engineering and machine learning capabilities. Passionate about delivering measurable business impact through AI-driven decision intelligence.',
  email: '19abhay26@gmail.com',
  phone: '+91-9305307896',
  location: 'Bengaluru, Karnataka',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  leetcode: 'https://leetcode.com/ABHAYRAJY',
  // Profile image: place your photo at src/assets/profile.jpg
  // The component will use this path automatically
}

export const skills = {
  Languages: ['Python', 'SQL', 'JavaScript', 'C++', 'PHP', 'HTML/CSS'],
  'Frameworks & Libraries': ['React.js', 'Node.js', 'Flask', 'Django', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'PySpark'],
  'Databases & Cloud': ['MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Cloud Data Warehousing'],
  'AI/ML & Analytics': ['Machine Learning', 'Deep Learning', 'LLMs', 'RAG Systems', 'NLP', 'Computer Vision', 'Predictive Analytics'],
  'DevOps & Tools': ['Git', 'Linux', 'REST APIs', 'CI/CD Pipelines', 'Microservices', 'Agile/Scrum'],
}

export const experience = [
  {
    role: 'Software Development Intern',
    company: 'Edunet Foundation',
    period: 'Oct 2024 – Nov 2024',
    type: 'Remote',
    highlights: [
      'Engineered Python automation scripts for data pipeline optimization, reducing manual processing time by 50+ hours/week',
      'Optimized SQL queries and backend microservices, improving data processing efficiency by 25% for production workloads',
      'Developed and deployed RESTful APIs for enterprise client applications with focus on scalability and performance',
      'Implemented Git-based CI/CD workflows and code review processes, enhancing team collaboration and delivery velocity',
    ],
  },
]

export const projects = [
  {
    name: 'Niriksha',
    subtitle: 'Agentic AI Honeypot & Threat Intelligence',
    description:
      'Automated defense system using LLMs to simulate human personas and proactively engage scammers. Engineered regex-based extraction engine capturing UPI IDs, bank accounts, phishing links from live conversations with 100% accuracy.',
    stack: ['Llama 3.3', 'Groq API', 'FastAPI', 'Python'],
    year: '2026',
    metrics: ['100% extraction accuracy', '15+ fraud scenarios', '30s timeout maintained'],
    highlight: true,
  },
  {
    name: 'DemandRadar',
    subtitle: 'Cloud-Native Analytics Platform',
    description:
      'End-to-end cloud-native analytics platform with real-time demand forecasting and business intelligence capabilities. Scalable microservices-based REST APIs handling 1000+ concurrent requests with 99% uptime SLA.',
    stack: ['Python', 'React.js', 'MongoDB', 'Flask'],
    year: '2024',
    metrics: ['1000+ concurrent requests', '99% uptime SLA', '40% faster decisions'],
    highlight: true,
  },
  {
    name: 'ShaktiGrid',
    subtitle: 'IoT Microgrid Monitoring System',
    description:
      'Cloud-agnostic microgrid monitoring system with real-time data pipelines processing 10,000+ sensor readings per minute. ML-based predictive maintenance models reducing operational downtime by 30%.',
    stack: ['Python', 'IoT', 'Flask', 'PostgreSQL', 'ML Analytics'],
    year: '2025',
    metrics: ['10K+ readings/min', '99.5% accuracy', '30% less downtime'],
    highlight: false,
  },
  {
    name: 'Price Gap Analysis',
    subtitle: 'Analytics Consulting Dashboard',
    description:
      'Full-stack analytical platform computing real-time price variance analytics between seller-listed and customer-paid transactions. ML-driven computation logic delivering actionable pricing insights.',
    stack: ['Python', 'Flask', 'JavaScript', 'SQL', 'MongoDB'],
    year: '2024',
    metrics: ['Real-time analytics', 'Revenue optimization', 'Anomaly detection'],
    highlight: false,
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science and Design',
    institution: 'Atria Institute of Technology',
    location: 'Bengaluru, Karnataka',
    period: 'Sep 2023 – Sep 2027',
    gpa: '8.85/10.0',
    courses: ['Data Structures', 'Algorithms', 'DBMS', 'Software Engineering', 'Data Analytics'],
  },
  {
    degree: 'Minor in Artificial Intelligence',
    institution: 'Indian Institute of Technology, Ropar',
    location: 'Punjab, India',
    period: 'Sep 2024 – Sep 2025',
    gpa: null,
    courses: ['Neural Networks', 'LLMs', 'Computer Vision', 'NLP', 'Prompt Engineering', 'Generative AI'],
  },
]

export const achievements = [
  { icon: '🏆', title: 'Top 2% Globally', desc: 'AI Impact Summit BuildAthon 2026' },
  { icon: '📝', title: 'Published Research', desc: 'AI-powered energy management systems (ShaktiGrid)' },
  { icon: '👥', title: 'Team Lead', desc: 'Led 4-member cross-functional team for DemandRadar' },
  { icon: '⭐', title: '50+ Contributions', desc: 'Active open-source contributor in data science & ML' },
]
