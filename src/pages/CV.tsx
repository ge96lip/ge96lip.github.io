import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, Mail, MapPin, Globe, Github, Linkedin, Heart, Users, Award } from "lucide-react";
import "../styles/cv.css";

// Import data from centralized data files
import { experiences } from "../data/experience";
import { education } from "../data/education";
import { skills } from "../data/skills";
import { leadership } from "../data/leadership";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  // Tools & Technologies as tags
  const toolsAndTech = [
    "High Performance Computing", "Cloud Computing", "Git/GitHub", "Docker", "Linux/Unix", 
    "Database Management", "Microsoft 365", "PowerBI", "Weights & Biases", "Azure", "Statistical Analysis"
  ];

  // Research Projects by category
  const researchProjects = [
    {
      category: "Healthcare AI",
      icon: "🏥",
      projects: [
        "MolPred: Benchmarking classical vs. graph-based ML methods for predicting molecular bioactivity ",
        "SegFormer adaption: H&E pathology segmentation using Vision Transformers"
      ]
    },
    {
      category: "Interpretable AI", 
      icon: "🔍",
      projects: [
        "Clinical AI decision support with self-correction & temporal reasoning",
        "ProtoPNet: Making deep learning decisions in medicine explainable through visual prototypes"
        
      ]
    },
    {
      category: "High Performance Computing",
      icon: "⚡",
      projects: [
        "High-performance simulations for computational astrophysics",
        "Quantum Computing: Three-way implementation of Shor's algorithm using quantum factorization"
      ]
    },
    {
      category: "Side Quests",
      icon: "🎯",
      projects: [
        "Reinforcement Learning and agent-environment interactions in simulated environments",
        "Financial trading algorithms using statistical and ML methods"
      ]
    }
  ];
  const programmingSkills = [
    { name: "Python", level: 95 },
    { name: "PyTorch/TensorFlow", level: 95 },
    { name: "R", level: 80 },
    { name: "SQL", level: 80 },
    { name: "C/C++", level: 75 },
    { name: "Java", level: 75 },
    { name: "Swift", level: 75 },
    { name: "JavaScript", level: 70 }
  ];

  // ML & AI skills (combined)
  const mlSkills = [
    "Deep Learning", "Computer Vision", "Medical Imaging", "LLMs", "Multimodal ML", 
    "Explainable AI (XAI)", "Interpretable ML", "Medical Data Analysis", 
    "Graph Neural Networks", "Reinforcement Learning"
  ];

  // Languages with proficiency levels (for circular progress) - Combined similar levels
  const languages = [
    { name: "German & English", level: 100, label: "Native" },
    { name: "Spanish & Latin", level: 30, label: "Basic" }
  ];

  // Hobbies with icons
  const hobbies = [
    { icon: "🏃", name: "Running & Fitness" },
    { icon: "⛵", name: "Sailing" },
    { icon: "🏄‍♀️", name: "Surfing" },
    { icon: "⛷️", name: "Skiing" },
    { icon: "💻", name: "Hackathons" },
    { icon: "�", name: "Drawing" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4">
      {/* Print/Download Controls */}
      <div className="no-print flex justify-center gap-4 mb-6 print:hidden">
        <Button onClick={handlePrint} className="flex items-center gap-2 bg-accent hover:bg-accent/90">
          <Download className="w-4 h-4" />
          Print/Save as PDF
        </Button>
        <Button variant="outline" onClick={() => window.history.back()}>
          Back to Portfolio
        </Button>
      </div>

      {/* CV Content */}
      <div className="cv-content max-w-4xl mx-auto bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-2xl">
        {/* Header with Gradient */}
        <header className="text-center border-b-2 border-accent/30 pb-6 mb-8 relative">
          <div className="absolute inset-0 rounded-t-2xl -m-8 mb-0" style={{ backgroundImage: 'linear-gradient(90deg, rgba(34,197,94,0.16) 0%, rgba(250,204,21,0.14) 50%, rgba(34,197,94,0.16) 100%)' }}></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent mb-3 tracking-wide">
              Carlotta Sophia Hoelzle
            </h1>
            <h2 className="text-2xl text-accent font-semibold mb-4">Healthcare AI Researcher</h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/80">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-accent" />
                <span>carlotta.hoelzle@example.com</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-accent" />
                <span>ge96lip.github.io</span>
              </div>
              <div className="flex items-center gap-1">
                <Github className="w-4 h-4 text-accent" />
                <span>github.com/ge96lip</span>
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="w-4 h-4 text-accent" />
                <span>linkedin.com/in/carlotta-hoelzle</span>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-accent border-l-4 border-accent pl-4 mb-4">Professional Summary</h3>
          <Card className="border-border/50 bg-background/50">
            <CardContent className="p-4">
              <p className="text-foreground/90 leading-relaxed">
                I am a computer scientist passionate about building trustworthy, high-impact AI systems at the intersection of medicine, multimodal data, and high-performance computing. 
                I thrive in complex, high-ambiguity environments—designing research pipelines, translating them into real-world systems, and collaborating across disciplines to drive meaningful change. 
                My work is driven by curiosity, high standards, and a commitment to using AI to advance human health and scientific understanding.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Research Projects */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-accent border-l-4 border-accent pl-4 mb-4">Key Research Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {researchProjects.map((category, index) => (
              <Card key={index} className="border-border/50 bg-background/30 hover:bg-background/50 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-accent flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {category.projects.map((project, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 text-sm text-foreground/90">
                        <span className="text-secondary text-lg leading-3 mt-1">•</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-accent border-l-4 border-accent pl-4 mb-4">Technical Skills</h2>
          
          {/* Programming Languages with Progress Bars */}
          <Card className="border-border/50 bg-background/30 mb-4">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-accent">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-2 border border-secondary/30" style={{ backgroundColor: 'rgba(217, 119, 6, 0.15)' }}>
                      <div 
                        className="bg-secondary h-2 rounded-full transition-all duration-300" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: '#d97706'  // Yellow for print (inverted from orange)
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ML & AI Skills */}
          <Card className="border-border/50 bg-background/30 mb-4">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-accent">Machine Learning & AI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mlSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                    style={{ backgroundColor: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', borderColor: 'rgba(234, 88, 12, 0.3)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="border-border/50 bg-background/30 mb-4">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-accent">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {toolsAndTech.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                    style={{ backgroundColor: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', borderColor: 'rgba(234, 88, 12, 0.3)' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* People Skills */}
          <Card className="border-border/50 bg-background/30">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-accent">People Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Leadership", "Team Collaboration", "Public Speaking", "Mentoring", "Cross-cultural Communication", "Project Management", "Workshop Facilitation", "Stakeholder Engagement"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                    style={{ backgroundColor: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', borderColor: 'rgba(234, 88, 12, 0.3)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-accent border-l-4 border-accent pl-4 mb-4">Professional Experience</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border/50 bg-background/30 hover:bg-background/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-accent">{exp.title}</h4>
                      <p className="text-secondary font-semibold">{exp.organization}</p>
                    </div>
                    <div className="text-right text-sm text-foreground/70">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="text-sm text-foreground/90 space-y-2">
                    {exp.highlights.slice(0, index === 0 ? 2 : 2).map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2">
                        <span className="text-accent text-lg leading-3">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-accent border-l-4 border-accent pl-4 mb-4">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="border-border/50 bg-background/30">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-lg text-accent">{edu.degree}</h4>
                      <p className="text-secondary font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right text-sm text-foreground/70">
                      <p className="font-medium">{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                  {edu.focus && (
                    <div className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="text-accent text-lg leading-3">•</span>
                      <span><strong>Focus:</strong> {edu.focus}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Beyond Research */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-accent border-l-4 border-accent pl-4 mb-4">Beyond Research</h3>
          
          {/* Languages - Full Width with Progress */}
          <Card className="border-border/50 bg-background/30 mb-4">
            <CardHeader>
              <CardTitle className="text-accent flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">German & English</span>
                    <span className="text-xs text-accent font-medium">Native</span>
                  </div>
                  <div className="w-full bg-accent/20 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Spanish & Latin</span>
                    <span className="text-xs text-secondary font-medium">Basic</span>
                  </div>
                  <div className="w-full bg-secondary/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card className="border-border/50 bg-background/30 mb-4">
            <CardHeader>
              <CardTitle className="text-accent flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Interests & Hobbies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{hobby.icon}</div>
                    <p className="text-xs font-medium">{hobby.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Volunteering */}
          <Card className="border-border/50 bg-background/30">
            <CardHeader>
              <CardTitle className="text-accent flex items-center gap-2">
                <Users className="w-5 h-5" />
                Volunteering & Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {leadership.volunteering?.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-accent text-lg leading-3">•</span>
                    <span className="text-foreground/90">{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-accent border-l-4 border-accent pl-4 mb-4">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 bg-background/30">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {leadership.awards.map((award, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary text-lg leading-3">🏆</span>
                      <span className="text-foreground/90">{award}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-background/30">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {leadership.scholarships.map((scholarship, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary text-lg leading-3">🎓</span>
                      <span className="text-foreground/90">{scholarship}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
