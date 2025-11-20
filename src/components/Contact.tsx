import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
          Get in Touch
        </h2>

        <Card className="max-w-2xl mx-auto border-border bg-card/95 backdrop-blur">
          <CardContent className="p-8 text-center space-y-6">
            <p className="text-lg text-foreground/90">
              I'm always open to discussing new projects, opportunities, or collaborations in AI research and healthcare.
            </p>

            <div className="space-y-4">
              <a href="mailto:choelzle@mgh.harvard.edu" className="block">
                <Button 
                  size="lg" 
                  className="w-full bg-accent text-accent-foreground hover:shadow-glow-gold transition-all duration-300"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  choelzle@mgh.harvard.edu
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/carlotta-hölzle/" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn Profile
                </Button>
              </a>

              <a href="https://github.com/ge96lip" target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Github className="mr-2 w-5 h-5" />
                  GitHub Profile
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
