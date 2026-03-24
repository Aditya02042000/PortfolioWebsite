import Link from "next/link"
import { Download, FileText, ArrowLeft, Briefcase, GraduationCap, Award, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Resume | Aditya Kumar Gautam",
  description: "Download Aditya Kumar Gautam's resume - Full Stack Developer, B.Tech CSE student at LPU",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">My Resume</h1>
          <p className="text-muted-foreground text-lg">
            Download my complete CV to learn more about my experience, skills, and qualifications.
          </p>
        </div>

        {/* Download Card */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-2">Aditya Kumar Gautam - CV</h2>
              <p className="text-muted-foreground mb-4">
                Full Stack Developer | B.Tech CSE Student | MERN Stack | Android Development
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground">PDF Format</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground">Updated 2024</span>
              </div>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href="/Aditya_Kumar_Gautam_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Preview Sections */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Resume Highlights</h2>

          {/* Education */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-semibold text-foreground">B.Tech in Computer Science and Engineering</h4>
                <p className="text-primary text-sm">Lovely Professional University</p>
                <p className="text-muted-foreground text-sm">2021 - 2025 | CGPA: 7.75</p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-semibold text-foreground">Class XII</h4>
                <p className="text-muted-foreground text-sm">Rajkiya Sarkari Inter College, UP Board | 78%</p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-semibold text-foreground">Class X</h4>
                <p className="text-muted-foreground text-sm">SHSB School, CBSE | 84%</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Experience & Leadership</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-semibold text-foreground">Executive Member & Event Organizer</h4>
                <p className="text-primary text-sm">Tatva - The Dramatics Society of LPU</p>
                <p className="text-muted-foreground text-sm">2022 - 2024</p>
                <ul className="text-muted-foreground text-sm mt-2 space-y-1">
                  <li>- Organized campus-wide events with 500+ participants</li>
                  <li>- Led team coordination and resource management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "React.js", "Node.js", "Express.js", "MongoDB",
                "JavaScript", "TypeScript", "C++", "Kotlin",
                "HTML/CSS", "Tailwind CSS", "Firebase", "Git"
              ].map((skill) => (
                <div 
                  key={skill}
                  className="px-3 py-2 bg-secondary rounded-lg text-center text-sm text-foreground"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Key Achievements</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-muted-foreground">Solved 250+ DSA problems on LeetCode, GFG, and HackerRank</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-muted-foreground">O Grade in Android Development Training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-muted-foreground">Google Cloud Computing Foundations Certified</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-muted-foreground">Verizon Job Simulation - Forage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Want to discuss opportunities? Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
            <Button asChild size="lg">
              <a href="/Aditya_Kumar_Gautam_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
