import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "EcoFlow Dashboard",
    category: "Product Design",
    imageColor: "#e2e8f0",
    link: "#",
  },
  {
    title: "Stellar App",
    category: "Mobile UI",
    imageColor: "#cbd5e1",
    link: "#",
  },
  {
    title: "Lumina Brand",
    category: "Visual Identity",
    imageColor: "#94a3b8",
    link: "#",
  },
  {
    title: "Nordic E-commerce",
    category: "Web Development",
    imageColor: "#64748b",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection id="home" className="container px-6 py-24 mx-auto md:py-32">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl tracking-tighter text-balance">
            Crafting digital <span className="text-primary">experiences</span> with precision.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A software engineer and designer dedicated to building high-quality, 
            interactive products that merge technical excellence with visual elegance.
          </p>
          <div className="pt-4">
            <a 
              href="#work" 
              className="inline-flex items-center px-8 py-4 text-sm font-medium transition-colors border rounded-full bg-primary text-white hover:bg-primary/90 border-primary"
            >
              View My Work
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Work Grid */}
      <section id="work" className="container px-6 py-24 mx-auto">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold md:text-4xl tracking-tight">Selected Work</h2>
        </AnimatedSection>
        
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30">
        <div className="container px-6 py-24 mx-auto md:py-32">
          <div className="grid gap-16 md:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold md:text-4xl tracking-tight mb-8">About Me</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I bridge the gap between design and development, ensuring that 
                  every pixel serves a purpose and every line of code is optimized for performance.
                </p>
                <p>
                  With over 5 years of experience in the industry, I have worked with 
                  startups and established brands to deliver award-winning digital solutions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">Core Expertise</h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "UI/UX Design", "Product Strategy", "Node.js"].map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-foreground font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-6 py-24 mx-auto md:py-32">
        <AnimatedSection className="text-center space-y-8">
          <h2 className="text-4xl font-bold md:text-6xl tracking-tight">Ready to build something great?</h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Let's collaborate and bring your next digital project to life.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="mailto:hello@example.com" 
              className="px-10 py-5 text-sm font-bold border rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="container px-6 py-12 mx-auto border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <p>© 2026 Creative Portfolio. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
