# Abhay Raj Yadav — Portfolio

A premium, production-ready portfolio website built with **React + Vite + TailwindCSS**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))
- VS Code

### Installation

```bash
# 1. Navigate to project folder
cd abhay-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

### Build for Production
```bash
npm run build       # Creates /dist folder
npm run preview     # Preview the production build
```

---

## 🖼️ Adding Your Profile Photo

1. Get a photo of yourself (square or portrait works best)
2. Rename it to **`profile.jpg`**
3. Place it at: `src/assets/profile.jpg`
4. Save and the dev server hot-reloads automatically

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

> If no image is found, the site shows an elegant placeholder automatically — no errors.

---

## 📁 Project Structure

```
abhay-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── profile.jpg        ← Place your photo here
│   ├── components/
│   │   ├── Navbar.jsx         ← Fixed nav + dark/light toggle
│   │   ├── Hero.jsx           ← Landing section with typewriter
│   │   ├── About.jsx          ← Bio + achievements
│   │   ├── Skills.jsx         ← Filterable skill cards
│   │   ├── Projects.jsx       ← Project showcase cards
│   │   ├── Experience.jsx     ← Timeline experience section
│   │   ├── Education.jsx      ← Education cards
│   │   ├── Contact.jsx        ← Contact form + links
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js   ← Intersection Observer animations
│   │   └── useTheme.js             ← Dark/light mode persistence
│   ├── utils/
│   │   └── data.js            ← ★ All your resume data lives here
│   ├── styles/
│   │   └── index.css          ← Global styles + Tailwind
│   ├── App.jsx
│   └── main.jsx
├── index.html                 ← SEO meta tags
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## ✏️ Customization

All personal data is centralized in **`src/utils/data.js`**:
- Update `personal` object with your real LinkedIn/GitHub URLs
- Add/remove projects in the `projects` array
- Modify skills categories as needed

---

## 🎨 Design System

- **Fonts:** Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Primary color:** `#00E5FF` (cyan accent)
- **Theme:** Dark-first with light mode toggle
- **Animations:** CSS scroll-triggered reveals with stagger

---

## 🌐 Deployment

**Vercel (recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag & drop the /dist folder to netlify.com/drop
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react, react-dom | Core framework |
| react-scroll | Smooth section navigation |
| react-icons | Icon library |
| framer-motion | (Available for advanced animations) |
| tailwindcss | Utility-first CSS |
| vite | Lightning-fast dev server |
