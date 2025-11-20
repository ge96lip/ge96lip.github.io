import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  focus: string;
  thesis?: string;
}

const education: EducationItem[] = [
  {
    degree: "MS Computer Science",
    institution: "Harvard School of Medicine",
    period: "Aug 2025 – Apr 2026",
    focus: "Clinical AI, Multimodal EHR Modeling, Medical LLMs",
    thesis: "Automated detection of lung-cancer recurrence using multimodal longitudinal medical data"
  },
  {
    degree: "MS Computer Science",
    institution: "KTH Royal Institute of Technology",
    period: "Apr 2024 – Apr 2026",
    focus: "HPC, Quantum Computing, AI, Game Theory, Medical ML"
  },
  {
    degree: "MS & BS Computer Science",
    institution: "Technical University of Munich",
    period: "Oct 2020 – Jul 2025",
    focus: "AI, Deep Learning, High-Performance Computing, Pathology Imaging",
    thesis: "SegFormer for H&E pathology segmentation (Aignostics GmbH)"
  },
  {
    degree: "Leaders in Entrepreneurship Summer Course",
    institution: "Virginia Polytechnic Institute and State University",
    period: "Aug 2023 - Sep 2023",
    focus: "Entrepreneurship, Communication, Creativity, Business Development",
    thesis: "Hands-on introduction to U.S. corporate culture and entrepreneurial skills development"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
          Education
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-border bg-card hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <span className="text-xl text-accent">{edu.degree}</span>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-lg text-secondary mt-2">{edu.institution}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="ml-10">
                <p className="text-foreground/90 mb-2">
                  <span className="text-accent font-semibold">Focus:</span> {edu.focus}
                </p>
                {edu.thesis && (
                  <p className="text-foreground/90">
                    <span className="text-accent font-semibold">Thesis:</span> {edu.thesis}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
