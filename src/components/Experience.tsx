import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Research Scholar",
    organization: "Massachusetts General Hospital / Harvard Medical School",
    period: "Aug 2025 – Present",
    location: "Boston, MA",
    highlights: [
      "Building an end-to-end LLM system that processes 12,577,295 clinical notes for lung cancer recurrence classification",
      "Improved recurrence detection F1 by 28.5 pp, Acc by 6.7 pp, Recall by 7.5 pp via self-correction & temporal reasoning steps",
      "Architected a new database structure achieving 445× compression for free text notes and 97–152× for row based sources",
      "Collaboration with oncologists/radiologists to validate outputs and build a userfriendly UI for display of results"
    ]
  },
  {
    title: "Lecturer & Coach",
    organization: "Bots & People",
    period: "Apr 2025 – Aug 2025",
    location: "Remote",
    highlights: [
      "Achieved an average Net Promoter Score of 77 across 15+ generative AI workshops",
      "Translated technical AI concepts into accessible formats for non-technical professionals",
      "Led hands-on learning sessions in English and German for 800+ participants, strengthening communication and pedagogical skills"
    ]
  },
  {
    title: "Visiting Associate",
    organization: "Boston Consulting Group (BCG)",
    period: "Jul 2024 – Aug 2024",
    location: "Berlin",
    highlights: [
      "Doubled insight generation speed by designing automated data workflows, reducing analyses from 1–2 days to an hour",
      "Synthesized ambiguous stakeholder input into concise executive-level recommendations under extreme time pressure",
    ]
  },
  {
    title: "Working Student, Computer Vision & Automation",
    organization: "Carl Zeiss Microscopy",
    period: "Dec 2023 – Jun 2024",
    location: "Munich",
    highlights: [
      "Enabled the first autonomous multistain workflow, previously infeasible due to manual operational constraints",
      "Integrated AI detection into imaging pipelines across hardware, SQL databases, LIMS, and cloud services",
      "Delivered a complete proof-of-concept to product transition, demonstrating ownership and cross-disciplinary execution"
    ]
  },
  {
    title: "Data Science Intern",
    organization: "Aignostics",
    period: "Mar 2023 – Sep 2023",
    location: "Berlin",
    highlights: [
      "Developed high-performance H&E segmentation models based on Vision Transformers (SegFormer)",
      "Improved multi-stain alignment reliability, reducing pathologist review time significantly",
      "Contributed to R&D pipelines used in production-grade pathology applications"
    ]
  },
  {
    title: "Working Student, IoT & Data Science",
    organization: "Munich Re",
    period: "May 2022 – Oct 2022",
    location: "Munich",
    highlights: [
      "Delivered the customer's first automatic data insights pipeline, enabling analytics previously done manually or not at all",
      "Collaborated across Data Science and PM teams to drive adoption and improve organizational workflows"
    ]
  },
  {
    title: "Project Manager",
    organization: "TUMEntdeckerinnen Informatik",
    period: "Nov 2022 – Sep 2023",
    location: "Munich",
    highlights: [
      "Introduced 250+ girls to STEM by organizing workshops across 5 schools and running two Girls' Days with 30 participants each",
      "Designed hands-on CS modules (Swift programming, binary bracelets) to lower the barrier of entry for young women in tech"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
          Work Experience
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border bg-background/50 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <span className="text-xl text-accent">{exp.title}</span>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-2">
                    <span className="text-lg text-secondary">{exp.organization}</span>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground/90">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="leading-relaxed">{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
