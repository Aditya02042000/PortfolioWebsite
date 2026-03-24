import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm">Hi, my name is</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Aditya Kumar Gautam
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground text-balance">
                I build things for the web.
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              {"I'm"} a B.Tech Computer Science student at{" "}
              <span className="text-primary">Lovely Professional University</span>, 
              specializing in full-stack development with the MERN stack. 
              Passionate about creating scalable web applications and solving complex algorithmic challenges.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/Aditya02042000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/adityakumargautam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:adityakumar02042000@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-80 md:w-80 md:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
              <div className="relative w-full h-full rounded-2xl border-2 border-primary/50 overflow-hidden bg-card">
                <Image
                  src="/images/profile.jpg"
                  alt="Aditya Kumar Gautam"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">250+</div>
              <div className="text-muted-foreground text-sm">Problems Solved</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground text-sm">Projects Built</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground text-sm">Event Participants Led</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">O Grade</div>
              <div className="text-muted-foreground text-sm">Android Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in building full-stack web applications and have experience with modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Full Stack Development</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building scalable web applications using React.js, Node.js, Express.js, and MongoDB (MERN Stack).
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Mobile Development</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating Android applications using Kotlin, XML, and Firebase with production-ready deployment.
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">DSA & Problem Solving</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Strong foundation in Data Structures and Algorithms with 250+ problems solved on competitive platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{"Let's Work Together"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {"I'm"} currently looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, {"I'll"} try my best to get back to you!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Say Hello
              <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
