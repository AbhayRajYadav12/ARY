import presentingImg from './assets/presenting.jpg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/chat/ChatWidget'

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-ink">
      <div className="page-atmosphere" aria-hidden="true">
        <img
          src={presentingImg}
          alt=""
          className="page-atmosphere-photo"
          decoding="async"
          fetchPriority="low"
          onError={(event) => {
            event.currentTarget.hidden = true
          }}
        />
        <div className="page-atmosphere-wash" />
      </div>
      <div className="relative z-10">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      </div>
    </div>
  )
}
