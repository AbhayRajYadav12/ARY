import { personal } from '../utils/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-slate-600">
          © {year} <span className="text-slate-400">Abhay Raj Yadav</span>. Built with React + Vite + TailwindCSS
        </p>
        <div className="flex items-center gap-1 font-mono text-xs text-slate-600">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Open to opportunities</span>
        </div>
        <p className="font-mono text-xs text-slate-600">
          {personal.location}
        </p>
      </div>
    </footer>
  )
}
