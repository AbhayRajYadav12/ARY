export const personal = {
  name: 'Abhay Raj Yadav',
  role: 'Software Engineer',
  positioning: 'Backend & full-stack development · Agentic AI',
  email: '19abhay26@gmail.com',
  phone: '+91 93530 78969',
  phoneHref: 'tel:+919353078969',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://linkedin.com/in/contactabhayraj',
  linkedinLabel: 'linkedin.com/in/contactabhayraj',
  github: 'https://github.com/ABHAYRAJYADAV19',
  githubLabel: 'github.com/ABHAYRAJYADAV19',
  resume: '/Abhay-Raj-Yadav-Resume.pdf',
  intro:
    'Hi, I’m Abhay — a software developer who enjoys turning complex problems into thoughtful, reliable software. I work across backend systems, AI-powered applications, and full-stack products, with a particular interest in building things that are genuinely useful.',
  about: [
    'I’m a Computer Science and Design student at Atria Institute of Technology, with a minor in Artificial Intelligence from IIT Ropar. My CGPA is 8.85/10, and I graduate in 2027.',
    'Most of my work sits in backend APIs, agentic systems, and retrieval-augmented generation, alongside full-stack products. Lately that has also meant industrial software: real-time measurement data, human-machine interfaces, and access control for tools used on the shop floor.',
    'I care about the path data takes. In Niriksha that is a model plus tool calls and rules. In PDF-Summary AI it is chunking, retrieval, and a citation back to a page. At Micromatic it is measurement data from a machine into software a person can operate.',
  ],
}

export const highlights = ['Agentic systems', 'Backend APIs', 'Document RAG', 'Industrial HMI']

export const status = {
  label: 'Software Development Intern',
  detail: 'Micromatic Grinding Technologies · Sep 2026 – Mar 2027',
}

export const skills = [
  {
    title: 'Programming languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js'],
  },
  {
    title: 'Backend and APIs',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'REST API design', 'Microservices'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Qdrant'],
  },
  {
    title: 'AI / ML and agentic systems',
    items: [
      'LLM integration',
      'Llama 3.3',
      'Gemini API',
      'LangChain',
      'Retrieval-augmented generation',
      'Model Context Protocol',
      'Multi-agent workflows',
      'Tool and function calling',
    ],
  },
  {
    title: 'Cloud and tools',
    items: ['Google Cloud', 'AWS', 'Docker', 'Git/GitHub', 'GitHub Actions', 'Linux CLI'],
  },
  {
    title: 'Computer science',
    items: [
      'Data structures and algorithms',
      'OOP',
      'Design patterns',
      'DBMS',
      'Operating systems',
      'Computer networking',
    ],
  },
]

export const experience = [
  {
    role: 'Software Development Intern',
    company: 'Micromatic Grinding Technologies',
    location: 'Bengaluru',
    period: 'Sep 2026 – Mar 2027',
    highlights: [
      'Developed an RS232 serial communication module for Statistical Process Control software to acquire and process real-time measurement data from industrial machines and instruments.',
      'Designed and built an HMI for a 26-inch display, with an on-screen keyboard and operating modes including Auto and Manual.',
      'Implemented role-based access control for OEM, Admin, Supervisor, and Operator roles.',
      'Collaborated with the engineering team on production software for precision grinding machines.',
    ],
    tags: ['RS232', 'HMI', 'RBAC', 'SPC'],
  },
]

export const projects = [
  {
    name: 'Niriksha',
    purpose: 'Agentic AI honeypot and threat intelligence platform.',
    summary:
      'A multi-agent Python backend that coordinates an LLM with tool calls and rule-based escalation across live fraud scenarios.',
    period: 'Jan 2026 – Present',
    stack: ['Python', 'FastAPI', 'Llama 3.3', 'Groq API', 'Docker'],
    diagram: 'niriksha',
    caseStudy: {
      problem:
        'Fraud scenarios need more than a generated reply. The system has to call tools, extract identifiers, and escalate with rules.',
      approach:
        'A Python and FastAPI backend coordinates Llama 3.3 through the Groq API. A regex step in the agent pipeline pulls UPI IDs, bank accounts, and phishing URLs, and rule-based escalation covers the cases that should not be left to the model alone.',
      results: [
        'Covers 15+ live fraud scenarios end to end.',
        'The resume reports 100% parsing accuracy across the cases tested.',
        'Async REST APIs include error handling and retry logic. The resume reports a 100% request success rate within a 30-second SLA.',
      ],
    },
    details: [
      'Coordinates Llama 3.3 through the Groq API with tool calls and rule-based escalation, covering 15+ live fraud scenarios end to end.',
      'A regex extraction step in the agent pipeline pulls UPI IDs, bank accounts, and phishing URLs. The resume reports 100% parsing accuracy across the cases tested.',
      'Async REST APIs include error handling and retry logic. The resume reports a 100% request success rate within a 30-second SLA.',
    ],
  },
  {
    name: 'PDF-Summary AI',
    purpose: 'Enterprise RAG document intelligence platform.',
    summary:
      'An ingestion and retrieval service that answers questions over documents with citations tied back to a page.',
    period: '2026',
    stack: ['Node.js', 'Express', 'TypeScript', 'Redis', 'BullMQ', 'MongoDB', 'Qdrant', 'Gemini API'],
    diagram: 'pdf',
    caseStudy: {
      problem: 'People need answers from long documents, with a way to check which page the answer came from.',
      approach:
        'An async pipeline parses, chunks, embeds, and indexes documents in Qdrant. Hybrid retrieval, reranking, and a similarity threshold keep replies grounded. Server-Sent Events stream the answer, and the service is structured as a reusable module.',
      results: [
        'Conversational Q&A returns citation-backed, page-referenced answers.',
        'The retrieval stack uses Redis, BullMQ, MongoDB, and Qdrant around a Node.js, Express, and TypeScript service, with the Gemini API for generation.',
      ],
    },
    details: [
      'An async pipeline parses, chunks, embeds, and indexes documents in Qdrant, then supports conversational Q&A with citation-backed, page-referenced answers.',
      'Hybrid retrieval, reranking, and a similarity threshold keep answers grounded and reduce unsupported responses.',
      'Server-Sent Events stream replies. The service is structured as a reusable module rather than a one-off script.',
    ],
  },
  {
    name: 'DemandRadar',
    purpose: 'Analytics and demand forecasting platform.',
    summary:
      'A full-stack analytics product with a React frontend and a Python/Flask API backed by MongoDB.',
    period: 'Jan 2024 – May 2024',
    stack: ['Python', 'React.js', 'Flask', 'MongoDB', 'REST APIs'],
    diagram: 'demand',
    caseStudy: {
      problem: 'The product needed a full-stack way to look at demand data without the API falling over under concurrent use.',
      approach:
        'A React frontend talks to a Python and Flask REST API backed by MongoDB. Caching was added so queries stayed responsive under load. The work was delivered with a four-person team using Agile/Scrum.',
      results: [
        'The resume reports that the Flask API handles 1,000+ concurrent requests at 99% uptime.',
        'This was a team delivery, not a solo project.',
      ],
    },
    details: [
      'The Flask REST API is reported to handle 1,000+ concurrent requests at 99% uptime.',
      'Delivered with a four-person team using Agile/Scrum. Caching was added so queries stayed responsive under load.',
    ],
  },
]

export const education = [
  {
    degree: 'B.E. in Computer Science and Design',
    institution: 'Atria Institute of Technology',
    location: 'Bengaluru, Karnataka',
    period: 'Sep 2023 – Sep 2027',
    gpa: 'CGPA 8.85/10.0',
    courses: ['DSA', 'OOP and design patterns', 'DBMS', 'Operating systems', 'Computer networks', 'Software engineering'],
  },
  {
    degree: 'Minor in Artificial Intelligence',
    institution: 'Indian Institute of Technology, Ropar',
    location: 'Punjab, India',
    period: 'Sep 2024 – Sep 2025',
    gpa: null,
    courses: ['Neural networks', 'LLMs', 'Computer vision', 'NLP', 'Prompt engineering', 'Generative AI'],
  },
]

export const achievements = [
  {
    title: 'Top 2% globally',
    detail: 'AI Impact Summit BuildAthon 2026, an international product engineering competition.',
  },
  {
    title: '2nd Runner-Up',
    detail: 'Inter-College Ideathon.',
  },
  {
    title: 'Certifications',
    detail: 'Certificates I’ve completed.',
    items: [
      'AWS Cloud Practitioner',
      'Network Fundamentals',
      'Programming in C',
      'Python Design Patterns',
      'Cybersecurity MOOC (CySecK)',
    ],
  },
  {
    title: '50+ GitHub contributions',
    detail: 'Across Python, data science, and machine learning repositories.',
  },
]
