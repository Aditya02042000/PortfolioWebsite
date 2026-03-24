"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adityakumar02042000@gmail.com",
    href: "mailto:adityakumar02042000@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7235839228",
    href: "tel:+917235839228",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Punjab, India",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Aditya02042000",
    username: "@Aditya02042000",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/adityakumargautam/",
    username: "adityakumargautam",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {"Let's"} Connect
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {"I'm"} currently looking for new opportunities and would love to hear from you.
            Whether you have a question, want to collaborate on a project, or just want to say hi,
            {"I'll"} try my best to get back to you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="p-8 rounded-lg bg-card border border-primary/50 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for reaching out. {"I'll"} get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
            
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{link.username}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Note */}
            <div className="mt-12 p-6 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Open to Opportunities</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {"I'm"} currently exploring new opportunities in full-stack development and software engineering. 
                If you think {"I'd"} be a good fit for your team, {"I'd"} love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
