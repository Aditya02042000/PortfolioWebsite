import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Aditya Kumar Gautam",
  description: "Learn more about Aditya Kumar Gautam - B.Tech CSE student, Full Stack Developer, and tech enthusiast.",
}

const skills = {
  "Programming Languages": ["Java", "JavaScript", "Python", "C", "C++", "SQL", "Kotlin", "HTML5", "CSS3"],
  "Frameworks & Technologies": ["React.js", "Node.js", "Express.js", "MERN Stack"],
  "Databases": ["MongoDB", "MySQL", "Firebase"],
  "Developer Tools": ["Git", "GitHub Actions", "VS Code", "Android Studio", "AWS (Basic)", "Vercel"],
  "Core Concepts": ["Data Structures and Algorithms", "OOP", "SDLC", "Agile Methodologies"],
}

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology in Computer Science",
    score: "CGPA: 6.51",
    period: "Aug 2023 – Present",
  },
  {
    institution: "Shri Krishna Dutt Academy",
    location: "U.P., India",
    degree: "Senior Secondary School (Class XII)",
    score: "Percentage: 70%",
    period: "May 2021 – Apr 2022",
  },
  {
    institution: "Shri Krishna Dutt Academy",
    location: "U.P., India",
    degree: "High School (Class X)",
    score: "Percentage: 65%",
    period: "May 2019 – Apr 2020",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4">About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            A passionate developer building digital experiences
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {"Hello! I'm"} <span className="text-foreground font-semibold">Aditya Kumar Gautam</span>, 
              a Computer Science student at Lovely Professional University with a passion for 
              building scalable web applications and solving complex algorithmic challenges.
            </p>
            <p>
              My journey in tech started with curiosity about how things work on the internet. 
              Today, I specialize in full-stack development using the MERN stack and have 
              experience deploying production-ready Android applications to the Google Play Store.
            </p>
            <p>
              Beyond coding, I serve as the <span className="text-primary">Co-CEO of Tatva</span>, 
              a student technical organization where I lead strategic planning and execution 
              for large-scale technical events impacting over 500+ participants.
            </p>
            <p>
              When {"I'm"} not coding, {"you'll"} find me solving algorithmic challenges on 
              LeetCode and HackerRank, where {"I've"} resolved 250+ problems, or exploring 
              new technologies and contributing to the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-4">My Toolkit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-lg bg-background border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-4">
              {["Strategic Thinker", "Problem Solving", "Team Leadership", "Adaptability"].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-4">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                  <p className="text-muted-foreground">{edu.location}</p>
                  <p className="text-foreground mt-2">{edu.degree}</p>
                  <p className="text-primary font-mono text-sm">{edu.score}</p>
                </div>
                <div className="text-right">
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Highlight */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-4">Recognition</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Algorithmic Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Resolved 250+ logic-intensive challenges across LeetCode, HackerRank, and CodeChef.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Data Structure Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Mastered complex implementations of Linked Lists, Trees, and Hashing for optimized solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Efficiency Benchmarking</h3>
              <p className="text-muted-foreground text-sm">
                Analyzed computational bottlenecks using Big O notation to reduce time and space complexity.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Academic Honors</h3>
              <p className="text-muted-foreground text-sm">
                {"Secured the prestigious 'O' Grade (Outstanding) in the Android Development Skill Program at LPU."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
