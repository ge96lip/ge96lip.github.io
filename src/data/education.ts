export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  focus?: string;
  thesis?: string;
  details?: string[];
}

export const education: EducationItem[] = [
  {
    degree: "MS Computer Science",
    institution: "Harvard School of Medicine",
    period: "Aug 2025 – Apr 2026",
    location: "Boston, MA",
    focus: "Clinical AI, Multimodal EHR Modeling, Medical LLMs",
    thesis: "Automated detection of lung-cancer recurrence using multimodal longitudinal medical data"
  },
  {
    degree: "MS Computer Science",
    institution: "KTH Royal Institute of Technology",
    period: "Apr 2024 – Apr 2026",
    location: "Stockholm, Sweden",
    focus: "HPC, Quantum Computing, AI, Game Theory, Medical ML"
  },
  {
    degree: "MS & BS Computer Science",
    institution: "Technical University of Munich",
    period: "Oct 2020 – Jul 2025",
    location: "Munich, Germany",
    focus: "AI, Deep Learning, High-Performance Computing, Pathology Imaging",
    thesis: "SegFormer for H&E pathology segmentation (Aignostics GmbH)"
  },
  {
    degree: "Leaders in Entrepreneurship Summer Course",
    institution: "Virginia Polytechnic Institute and State University",
    period: "Aug 2023 - Sep 2023",
    location: "Blacksburg, VA",
    focus: "Entrepreneurship, Communication, Creativity, Business Development",
    details: ["Fulbright scholarship recipient", "Hands-on introduction to U.S. corporate culture and entrepreneurial skills development"]
  }
];
