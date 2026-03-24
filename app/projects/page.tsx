import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projects | Aditya Kumar Gautam",
  description: "Explore projects built by Aditya Kumar Gautam - from full-stack web apps to Android applications.",
}

const featuredProjects = [
  {
    title: "JobNest - Job Search & Career Platform",
    description: "A high-performance career portal utilizing React for the frontend and a scalable Node.js backend. Features secure RESTful API endpoints for real-time job listings, application tracking, and profile management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST API"],
    highlights: [
      "Engineered a high-performance career portal with React and Node.js",
      "Architected secure RESTful API endpoints for real-time job listings",
      "Leveraged MongoDB for dynamic datasets with high consistency",
    ],
    period: "Oct 2025 – Nov 2025",
    github: "https://github.com/Aditya02042000",
    live: "#",
  },
  {
    title: "Urban Management System",
    description: "A digital utility providing vital geographic insights and streamlined access to public services for residents. Features a fluid, mobile-first interface ensuring seamless user experience across diverse hardware ecosystems.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Pioneered a digital utility providing vital geographic insights",
      "Translated abstract municipal requirements into functional web modules",
      "Authored a fluid, mobile-first interface for seamless UX",
    ],
    period: "Jan 2024 – Feb 2024",
    github: "https://github.com/Aditya02042000",
    live: "#",
  },
]

const otherProjects = [
  {
    title: "Android Application (Training Project)",
    description: "Production-ready mobile application deployed to Google Play Store, integrating Firebase for real-time cloud storage. Built during intensive bootcamp at LPU.",
    tech: ["Kotlin", "XML", "Firebase", "Android SDK"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4">My Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Things {"I've"} Built
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            A collection of projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centric applications. Each project represents 
            a unique challenge and learning experience.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-video rounded-lg bg-card border border-border overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                    <div className="text-center p-8">
                      <Folder className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{project.period}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-primary font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                
                <div className="p-6 rounded-lg bg-card border border-border">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="View source code on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Other Noteworthy Projects</h2>
            <p className="text-muted-foreground">
              Additional projects and training work that helped build my skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/Aditya02042000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">{"Interested in working together?"}</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          {"I'm"} always open to discussing new projects and opportunities. 
          {"Let's"} build something amazing together.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}
