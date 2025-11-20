import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight } from "lucide-react";
import healthcareAi from "@/assets/healthcare-ai.jpg";
import interpretableAi from "@/assets/interpretable-ai.jpg";
import hpc from "@/assets/hpc.jpg";
import sideQuests from "@/assets/side-quests.jpg";

interface Project {
  name: string;
  description: string;
  github: string;
}

interface ProjectCategory {
  title: string;
  description: string;
  image: string;
  projects: Project[];
}

const projectCategories: ProjectCategory[] = [
  {
    title: "Healthcare AI",
    description: "Advancing medical imaging and diagnostics through deep learning",
    image: healthcareAi,
    projects: [
      {
        name: "SegFormer Pathology",
        description: "Vision Transformer for Pathology Segmentation - Advanced H&E stain segmentation using transformer architecture",
        github: "https://github.com/ge96lip/SegFormerPathology"
      },
      {
        name: "NeuroPrognosis",
        description: "Modelling Alzheimer's progression with multimodal medical data and predictive analytics",
        github: "https://github.com/ge96lip/SegFormerPathology"
      },
      {
        name: "MolPred",
        description: "Benchmarking classical vs. graph-based ML methods for predicting molecular bioactivity across diverse biochemical datasets",
        github: "https://github.com/ge96lip/MolPred"
      }
    ]
  },
  {
    title: "Interpretable & Fair AI",
    description: "Developing transparent AI solutions for societal impact",
    image: interpretableAi,
    projects: [
      {
        name: "ProtoPNet",
        description: "Prototypical Part Network for interpretable image classification - making deep learning decisions explainable through visual prototypes",
        github: "https://github.com/ge96lip/ProtoPNet/tree/main"
      }
    ]
  },
  {
    title: "High Performance Computing",
    description: "Leveraging computational power for scientific discovery",
    image: hpc,
    projects: [
      {
        name: "Computational Astrophysics",
        description: "High-performance simulations for astrophysical phenomena and celestial mechanics",
        github: "https://github.com/ge96lip/Computational-Astrophysics"
      },
      {
        name: "Quantum Computing - Shor's Algorithm",
        description: "Three-way implementation of Shor's algorithm exploring quantum factorization methods",
        github: "https://github.com/ge96lip/Quantum-Computing"
      }
    ]
  },
  {
    title: "Technical Side Quests",
    description: "Exploring diverse aspects of computer science",
    image: sideQuests,
    projects: [
      {
        name: "Financial Trading",
        description: "Statistical and ML models for financial market analysis and trading strategies",
        github: "https://github.com/ge96lip/financial_trading"
      },
      {
        name: "Exploring Transfer Learning",
        description: "Investigating transfer learning techniques across different domains and architectures",
        github: "https://github.com/ge96lip/Explore-Transfer-Learning"
      },
      {
        name: "Reinforcement Learning",
        description: "Implementing RL algorithms and exploring agent-environment interactions",
        github: "https://github.com/ge96lip/RL"
      },
      {
        name: "Computer Security",
        description: "Tackling various security challenges: malware analysis, hash functions, buffer overflow, and DoS attacks",
        github: "https://github.com/ge96lip/Computer-Security"
      }
    ]
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
          Projects
        </h2>

        {selectedCategory === null ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectCategories.map((category, index) => (
              <Card 
                key={index}
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-glow-gold border-border bg-card group"
                onClick={() => setSelectedCategory(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-accent">
                    {category.title}
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription className="text-foreground/80">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <Button
              variant="outline"
              onClick={() => setSelectedCategory(null)}
              className="mb-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              ← Back to Categories
            </Button>

            <div className="mb-8">
              <h3 className="text-3xl font-bold text-accent mb-4">
                {projectCategories[selectedCategory].title}
              </h3>
              <p className="text-foreground/80 text-lg">
                {projectCategories[selectedCategory].description}
              </p>
            </div>

            <div className="grid gap-6">
              {projectCategories[selectedCategory].projects.map((project, index) => (
                <Card key={index} className="border-border bg-card hover:border-accent transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-foreground">
                      {project.name}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-secondary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </CardTitle>
                    <CardDescription className="text-foreground/80">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
