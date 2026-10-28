import { achievements, education, experience, personal, projects, skills } from './data'

export const QUICK_PROMPTS = [
  'What projects has this developer built?',
  'What technologies does this developer use?',
  'Tell me about their software engineering experience.',
  'Which project best demonstrates their technical skills?',
  'How can I contact them?',
  'Where can I download their resume?',
]

export const GREETING =
  "Hi! I'm Abhay's portfolio assistant.\n\nCurious about his projects, AI work, technical skills, or experience? Ask me anything."

const FOLLOW_UPS = {
  about: ['Explore his projects', 'What is his AI experience?', 'How can I contact him?'],
  education: ['What is his AI experience?', 'Tell me about his internship', 'How can I contact him?'],
  showcase: ['Tell me about Niriksha', 'How does PDF-Summary AI work?', 'Tell me about his internship'],
  projects: ['Tell me about Niriksha', 'How does PDF-Summary AI work?', 'What technologies are used in DemandRadar?'],
  niriksha: ['How does PDF-Summary AI work?', 'What is his AI experience?', 'What technologies does he use?'],
  pdf: ['Tell me about Niriksha', 'What technologies are used in DemandRadar?', 'What is his AI experience?'],
  demand: ['Tell me about Niriksha', 'How does PDF-Summary AI work?', 'What technologies does he use?'],
  internship: ['What technologies does he use?', 'Explore his projects', 'How can I contact him?'],
  skills: ['What is his AI experience?', 'Explore his projects', 'Tell me about his internship'],
  ai: ['Tell me about Niriksha', 'How does PDF-Summary AI work?', 'What technologies does he use?'],
  achievements: ['Explore his projects', 'What is his AI experience?', 'How can I contact him?'],
  contact: ['Explore his projects', 'Tell me about his internship', 'Tell me about Abhay'],
  greeting: QUICK_PROMPTS.slice(0, 4),
  fallback: QUICK_PROMPTS.slice(0, 4),
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9+#.\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function hit(text, phrase) {
  if (phrase.length <= 3) {
    return new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(text)
  }
  return text.includes(phrase)
}

function score(text, phrases) {
  return phrases.reduce((total, phrase) => total + (hit(text, phrase) ? 1 : 0), 0)
}

function findProject(name) {
  return projects.find((project) => project.name.toLowerCase().includes(name))
}

function describeProject(project) {
  const study = project.caseStudy
  return [
    `${project.name} (${project.period}) — ${project.purpose}`,
    project.summary,
    `Technologies: ${project.stack.join(', ')}.`,
    study ? `Problem: ${study.problem}` : '',
    study ? `Approach: ${study.approach}` : '',
    ...(study ? study.results : project.details),
    'No public repository or live demo is listed for this project.',
  ]
    .filter(Boolean)
    .join('\n\n')
}

function showcaseAnswer() {
  return [
    'There isn’t a single ranked winner. The deepest technical write-ups are Niriksha and PDF-Summary AI.',
    'Niriksha is the agentic system: Llama 3.3 through Groq, tool calls, regex extraction, and rule-based escalation across 15+ fraud scenarios.',
    'PDF-Summary AI is the document system: ingestion into Qdrant, hybrid retrieval, and answers cited back to a page.',
    'The Micromatic internship is the industrial software: RS232 measurement data, a 26-inch HMI, and role-based access.',
  ].join('\n\n')
}

function aboutAnswer() {
  return [personal.intro, ...personal.about].join('\n\n')
}

function educationAnswer(text) {
  const atria = education[0]
  const iit = education[1]
  if (hit(text, 'cgpa') || hit(text, 'gpa') || hit(text, 'grade')) {
    return `Abhay’s CGPA at ${atria.institution} is 8.85/10.0, for his ${atria.degree} (${atria.period}).`
  }
  return [
    `Abhay is studying for a ${atria.degree} at ${atria.institution}, ${atria.location} (${atria.period}). ${atria.gpa}.`,
    `He also completed a ${iit.degree} at ${iit.institution}, ${iit.location} (${iit.period}).`,
    `Coursework at Atria includes ${atria.courses.join(', ')}. The IIT Ropar minor covers ${iit.courses.join(', ')}.`,
  ].join('\n\n')
}

function projectsAnswer() {
  const lines = projects.map((project) => `${project.name} (${project.period}): ${project.purpose} ${project.summary}`)
  return ['Abhay’s portfolio highlights three projects.', ...lines].join('\n\n')
}

function internshipAnswer() {
  const job = experience[0]
  return [
    `${job.role} at ${job.company}, ${job.location} (${job.period}).`,
    ...job.highlights,
  ].join('\n\n')
}

function skillsAnswer() {
  return skills.map((group) => `${group.title}: ${group.items.join(', ')}.`).join('\n\n')
}

function aiAnswer() {
  const ai = skills.find((group) => group.title.toLowerCase().includes('ai'))
  return [
    'Abhay’s AI work shows up in his IIT Ropar minor and in two projects.',
    'Niriksha is a multi-agent honeypot that coordinates Llama 3.3, through the Groq API, with tool calls and rule-based escalation.',
    'PDF-Summary AI is a retrieval-augmented document system using Gemini, Qdrant, and citation-backed answers.',
    ai ? `Related skills: ${ai.items.join(', ')}.` : '',
  ]
    .filter(Boolean)
    .join('\n\n')
}

function achievementsAnswer() {
  return achievements
    .map((item) => {
      const extras = item.items ? ` ${item.items.join(', ')}.` : ''
      return `${item.title}. ${item.detail}${extras}`
    })
    .join('\n\n')
}

function contactAnswer() {
  return [
    `Email: ${personal.email}`,
    `Phone: ${personal.phone}`,
    `LinkedIn: ${personal.linkedin}`,
    `GitHub: ${personal.github}`,
    `Location: ${personal.location}`,
    'A resume PDF is linked from the Resume button in the navigation.',
  ].join('\n')
}

function greetingAnswer() {
  return 'Hi. I can walk you through Abhay’s projects, studies, internship, skills, or contact details. What would you like to know?'
}

function fallbackAnswer() {
  return 'I don’t have that in this portfolio, so I won’t guess. I can tell you about Abhay’s projects, internship, skills, education, or how to reach him.'
}

const TOPICS = [
  {
    id: 'showcase',
    phrases: ['best demonstrates', 'strongest project', 'best project'],
    answer: showcaseAnswer,
  },
  { id: 'niriksha', phrases: ['niriksha', 'honeypot', 'fraud', 'groq'], answer: () => describeProject(findProject('niriksha')) },
  { id: 'pdf', phrases: ['pdf-summary', 'pdf summary', 'pdf', 'qdrant', 'gemini', 'citation', 'document'], answer: () => describeProject(findProject('pdf')) },
  { id: 'demand', phrases: ['demandradar', 'demand radar', 'forecast', 'analytics'], answer: () => describeProject(findProject('demand')) },
  {
    id: 'internship',
    phrases: ['intern', 'micromatic', 'hmi', 'rs232', 'grinding', 'shop floor', 'software engineering experience', 'engineering experience'],
    answer: internshipAnswer,
  },
  { id: 'contact', phrases: ['contact', 'email', 'phone', 'call', 'linkedin', 'github', 'reach', 'hire', 'resume', 'download their resume'], answer: contactAnswer },
  { id: 'achievements', phrases: ['achievement', 'award', 'certif', 'buildathon', 'ideathon', 'contribution'], answer: achievementsAnswer },
  { id: 'ai', phrases: ['ai experience', 'agentic', 'llm', 'llama', 'machine learning', 'rag'], answer: aiAnswer },
  { id: 'skills', phrases: ['skill', 'technolog', 'stack', 'language', 'tool', 'framework'], answer: skillsAnswer },
  { id: 'education', phrases: ['study', 'studying', 'education', 'college', 'degree', 'atria', 'iit', 'ropar', 'cgpa', 'gpa', 'graduat'], answer: educationAnswer },
  { id: 'projects', phrases: ['project', 'built', 'portfolio', 'work'], answer: projectsAnswer },
  { id: 'about', phrases: ['about abhay', 'who is', 'who are', 'introduce', 'tell me about abhay', 'about him'], answer: aboutAnswer },
]

export function answerQuestion(raw) {
  const text = normalize(raw)
  if (!text) {
    return { text: 'Type a question, and I’ll look it up in this portfolio.', suggestions: FOLLOW_UPS.fallback }
  }
  if (/^(hi|hello|hey|hiya|good morning|good evening)( there)?$/.test(text)) {
    return { text: greetingAnswer(), suggestions: FOLLOW_UPS.greeting }
  }

  let best = null
  for (const topic of TOPICS) {
    const value = score(text, topic.phrases)
    if (value > 0 && (!best || value > best.value)) {
      best = { topic, value }
    }
  }

  if (!best) {
    return { text: fallbackAnswer(), suggestions: FOLLOW_UPS.fallback }
  }

  const reply = best.topic.id === 'education' ? best.topic.answer(text) : best.topic.answer()
  return { text: reply, suggestions: FOLLOW_UPS[best.topic.id] || FOLLOW_UPS.fallback }
}
