import { Metadata } from "next"
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience | Aditya Kumar Gautam",
  description: "Professional experience, training, certifications, and leadership activities of Aditya Kumar Gautam.",
}

const training = [
  {
    title: "Android Development Pro",
    organization: "Lovely Professional University",
    period: "Jun 2025 – Jul 2025",
    description: "Intensive bootcamp focusing on mobile architecture using Kotlin, XML, and modern Android SDKs.",
    highlights: [
      "Mastered mobile architecture through intensive bootcamp",
      "Deployed production-ready applications to Google Play Store",
      "Integrated Firebase for real-time cloud storage",
    ],
  },
]

const certificates = [
  {
    title: "Computational Theory: Finite Automata",
    issuer: "Infosys Springboard",
    icon: GraduationCap,
  },
  {
    title: "Skill Development Program (Certificate of Merit)",
    issuer: "Lovely Professional University",
    icon: Award,
  },
  {
    title: "SQL Basics",
    issuer: "HackerRank",
    icon: Trophy,
  },
]

const leadership = [
  {
    title: "Co-CEO",
    organization: "Tatva (Student Technical Organization)",
    period: "Aug 2024 – Present",
    description: "Leading strategic planning and execution for large-scale technical symposia.",
    highlights: [
      "Directed strategic planning and execution for technical symposia impacting 500+ participants",
      "Negotiated with corporate sponsors and university faculty for funding and logistics",
      "Built and managed cross-functional teams for event organization",
    ],
  },
  {
    title: "Participant",
    organization: "Hack Quest - 24-Hour CTF Hackathon",
    period: "Apr 2024",
    description: "Competed in cybersecurity challenges involving web vulnerabilities and cryptography.",
    highlights: [
      "Navigated high-pressure cybersecurity scenarios",
      "Worked on web vulnerabilities, reverse engineering, and cryptography challenges",
      "Executed custom Python scripts to decrypt Base64 and Caesar-ciphered flags",
    ],
  },
]

const achievements = [
  {
    title: "Algorithmic Excellence",
    description: "Resolved 250+ logic-intensive challenges across LeetCode, HackerRank, and CodeChef.",
    metric: "250+",
    label: "Problems Solved",
  },
  {
    title: "Data Structure Expertise",
    description: "Mastered complex implementations of Linked Lists, Trees, and Hashing for optimized solutions.",
    metric: "DSA",
    label: "Mastery",
  },
  {
    title: "Efficiency Benchmarking",
    description: "Analyzed computational bottlenecks using Big O notation to reduce complexity.",
    metric: "Big O",
    label: "Analysis",
  },
  {
    title: "Academic Honors",
    description: "Secured 'O' Grade (Outstanding) in Android Development Skill Program at LPU.",
    metric: "O",
    label: "Grade",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4">My Journey</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Experience & Leadership
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            From technical training to leading student organizations, my journey has been 
            about continuous learning and making an impact in the tech community.
          </p>
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Leadership & Activities</h2>
          </div>
          
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="p-6 rounded-lg bg-background border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-primary">{item.organization}</p>
                    </div>
                    <span className="px-4 py-1 bg-secondary text-secondary-foreground text-sm rounded-full w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Professional Training</h2>
        </div>
        
        <div className="space-y-6">
          {training.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-primary">{item.organization}</p>
                </div>
                <span className="px-4 py-1 bg-secondary text-secondary-foreground text-sm rounded-full w-fit">
                  {item.period}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-12">
            <Trophy className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{item.metric}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <cert.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
