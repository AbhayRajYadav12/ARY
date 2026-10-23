# Abhay Raj Yadav — Portfolio

A light, editorial personal site for Abhay Raj Yadav, a software engineer working across backend systems, full-stack products, and agentic AI.

Live locally at `http://localhost:5173` after you start the dev server. The production build is a static site and can be hosted on Vercel or Netlify.

## Stack

- React 18
- Vite
- Tailwind CSS
- Plus Jakarta Sans and JetBrains Mono

There is no backend. Project, education, and contact content lives in one data file. The corner assistant answers from that same content. It does not call an external model and does not need an API key.

## Run it

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`.

## What’s on the page

- About, experience, projects, skills, education, and achievements
- Contact links for email, phone, LinkedIn, and GitHub
- A resume button that opens `public/Abhay-Raj-Yadav-Resume.pdf`
- A portfolio assistant fixed to the bottom-right corner

The assistant matches questions against the portfolio data. It covers studies, the Micromatic internship, Niriksha, PDF-Summary AI, DemandRadar, skills, and contact details. If a question is not in that material, it says so.

## Project structure

```
src/
├── assets/profile.jpg          Portrait used in the hero
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── chat/ChatWidget.jsx    Floating assistant UI
├── utils/
│   ├── data.js                 Resume content for the page
│   └── assistant.js            Local question matching
├── hooks/useScrollAnimation.js
├── styles/index.css
├── App.jsx
└── main.jsx
```

## Update the content

Edit `src/utils/data.js` for name, links, projects, skills, education, and achievements. The assistant reads that file, so those answers stay in step with the page.

Replace `src/assets/profile.jpg` to change the portrait. Replace `public/Abhay-Raj-Yadav-Resume.pdf` to change the file opened by the Resume button.

## Design notes

The site is light only: warm off-white background (`#FAF9F6`), white cards, pastel blue (`#8CB9D8`), and sage (`#B8CDBB`). Body text is Plus Jakarta Sans. Dates and technical labels use JetBrains Mono.

## Deploy

**Vercel:** import this repository and use the default Vite settings (`npm run build`, output `dist`).

**Netlify:** build command `npm run build`, publish directory `dist`.
