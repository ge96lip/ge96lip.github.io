export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Research Scholar",
    organization: "Massachusetts General Hospital / Harvard Medical School",
    period: "Aug 2025 – Present",
    location: "Boston, MA",
    highlights: [
      "Building an end-to-end LLM system that processes 12,577,295 clinical notes for lung cancer recurrence classification",
      "Improved recurrence detection F1 by 28.5 pp, Acc by 6.7 pp, Recall by 7.5 pp via self-correction & temporal reasoning steps"
    ]
  },
  {
    title: "Lecturer & Coach",
    organization: "Bots & People",
    period: "Apr 2025 – Aug 2025",
    location: "Remote",
    highlights: [
      "Achieved an average Net Promoter Score of 77 across 15+ generative AI workshops",
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
      "Synthesized ambiguous stakeholder input into concise executive-level recommendations under extreme time pressure"
    ]
  },
  {
    title: "Working Student, Computer Vision & Automation",
    organization: "Carl Zeiss Microscopy",
    period: "Dec 2023 – Jun 2024",
    location: "Munich",
    highlights: [
      "Enabled the first autonomous multistain workflow, previously infeasible due to manual operational constraints",
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
      "Improved multi-stain alignment reliability, reducing pathologist review time significantly"
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
