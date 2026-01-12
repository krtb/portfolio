export default function Projects() {
  const projects = [
    {
      title: "SFDC Chat & Knowledge Base Integration",
      description:
        "Custom UI for surfacing Salesforce knowledge articles within chat workflows. Built for enterprise customers needing seamless support experiences.",
      tags: ["React", "Salesforce API", "Node.js"],
    },
    {
      title: "Platform Migration Toolkit",
      description:
        "React-based tool for automating data transformation between analytics platforms. Reduced migration time from weeks to days for enterprise customers.",
      tags: ["React", "API Integration", "Data Transformation"],
    },
    {
      title: "Visitor Identity Remapping System",
      description:
        "Scripts and tooling for resolving visitor ID collisions and deduplication across enterprise analytics implementations.",
      tags: ["Node.js", "Data Processing", "APIs"],
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          A selection of integration and tooling work from my time in 
          professional services. Case studies coming soon.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <h2 className="text-xl font-medium mb-2">{project.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}