import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 100 },
      { name: "PyTorch / TensorFlow", level: 100 },
      { name: "R", level: 80 },
      { name: "SQL", level: 80 },
      { name: "C", level: 75 },
      { name: "C++", level: 75 },
      { name: "Java", level: 75 },
      { name: "Swift", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 70 }
    ]
  },
  {
    title: "ML & Research",
    skills: [
      { name: "Deep Learning", level: 100 },
      { name: "Explainability (XAI)", level: 95 },
      { name: "LLM Prompting", level: 95 },
      { name: "Multimodal ML", level: 90 },
      { name: "Computer Vision / Medical Imaging", level: 95 },
      { name: "Graph Neural Networks", level: 85 },
      { name: "High Performance Computing", level: 85 },
      { name: "Reinforcement Learning", level: 80 }, 
      { name: "Computer Security", level: 70 },
    ]
  }
];

const languages = [
  { name: "German", level: "Native" },
  { name: "English", level: "Native" },
  { name: "Spanish", level: "Basic" },
  { name: "Latin", level: "Basic" }
];

const peopleSkills = [
  "Coaching/Teaching",
  "Empowerment",
  "Interdisciplinarity",
  "Entrepreneurial Mindset",
  "Open/Growth Mindset",
  "Agile Scrum"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
          Skills
        </h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <span className="text-secondary px-3 py-1 rounded-full bg-secondary/10">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-background/50">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">People Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {peopleSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border bg-background/50">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Engineering & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 text-lg">
                Docker • Git • Azure • AWS • GCP • MLOps • Atlassian • PowerBI • Miro • 
                Agile/Scrum • API Design • Backend Integration • Hydra • PyTorch Lightning • 
                Weights & Biases
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
