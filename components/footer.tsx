import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{"<AKG />"}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              B.Tech CSE student passionate about building scalable web applications and solving complex problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Aditya02042000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/adityakumargautam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:adityakumar02042000@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+917235839228"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            {new Date().getFullYear()} Aditya Kumar Gautam. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
