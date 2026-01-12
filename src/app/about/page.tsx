import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight mb-8">About</h1>

        {/* Bio */}
        <section className="mb-12">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            I'm a software engineer with 6+ years of experience building
            integrations, developer tools, and customer-facing solutions. 
            Currently at Pendo.io on the Professional Services team, 
            exploring new opportunities.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            My work spans visitor identity systems, platform migrations, 
            chat integrations, and API development. I specialize in 
            translating complex customer requirements into working code.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm looking for my next role in NYC—ideally on a product 
            engineering team or in a solutions engineering capacity 
            where I can combine technical depth with customer impact.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-4">
            Skills
          </h2>
          <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
            <div>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Languages: </span>
              JavaScript, TypeScript, HTML, CSS
            </div>
            <div>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Frameworks: </span>
              React, Vue, Next.js, Node.js
            </div>
            <div>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Tools: </span>
              Git, REST APIs, GraphQL, Puppeteer, Webpack, Vite
            </div>
            <div>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Platforms: </span>
              Salesforce, Pendo, CXone, Vercel
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-4">
            Contact
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
      </div>
    </main>
  );
}