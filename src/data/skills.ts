export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "PyTorch/TensorFlow", "R", "SQL", "C/C++", "Java", "Swift", "JavaScript", "HTML/CSS"]
  },
  {
    category: "Machine Learning & AI",
    items: ["Deep Learning", "Computer Vision", "Medical Imaging", "LLMs", "Multimodal ML", "Graph Neural Networks", "Reinforcement Learning", "Explainable AI (XAI)", "Interpretable ML", "Medical Data Analysis"]
  },
  {
    category: "Tools & Technologies",
    items: ["High Performance Computing", "Cloud Computing", "Git/GitHub", "Docker", "Linux/Unix", "Database Management", "Microsoft 365", "PowerBI", "Weights & Biases", "Azure", "Statistical Analysis"]
  },
  {
    category: "People Skills",
    items: ["Leadership", "Team Collaboration", "Public Speaking", "Mentoring", "Cross-cultural Communication", "Project Management", "Workshop Facilitation", "Stakeholder Engagement"]
  },
  {
    category: "Languages",
    items: ["German & English (Native)", "Spanish & Latin (Basic)"]
  }
];
