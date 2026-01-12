import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Kurt Bauer
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">
            Software Engineer
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Building integrations, developer tools, and customer-facing 
            solutions with React and Node.js. Based in Brooklyn, NYC.
          </p>
        </header>

        {/* Status */}
        <section className="mb-16">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to opportunities in NYC
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-4">
            Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/krtb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/kurt-bauer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:hikrt@pm.me"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-4">
            Projects
          </h2>
          <div className="space-y-4">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <h3 className="font-medium mb-1">SFDC Chat & Knowledge Base Integration</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Custom UI for surfacing Salesforce knowledge articles within chat workflows.
              </p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <h3 className="font-medium mb-1">Platform Migration Toolkit</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                React-based tool for automating data transformation between analytics platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-zinc-500 dark:text-zinc-600">
          © {new Date().getFullYear()} Kurt Bauer
        </footer>
      </div>
    </main>
  );
}