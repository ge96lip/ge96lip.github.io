import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.85), rgba(6, 78, 59, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Carlotta Sophia Hoelzle
          </h1>
          <p className="text-2xl md:text-3xl text-accent mb-8">
            Healthcare AI Researcher
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about interpretable, fair, and transparent AI solutions for societal impact. 
            Building sustainable AI for healthcare that empowers everyone.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              variant="default"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-accent text-accent-foreground hover:shadow-glow-gold transition-all duration-300"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="mailto:choelzle@mgh.harvard.edu" 
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/carlotta-hölzle/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/ge96lip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
