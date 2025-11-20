export interface LeadershipData {
  awards: string[];
  scholarships: string[];
  volunteering?: string[];
}

export const leadership: LeadershipData = {
  awards: [
    "Hackathon Winner – Lynx Stockholm Quant Trading Challenge",
    "Verbal Commendation at Harvard WorldMUN 2024 in Taipei"
  ],
  scholarships: [
    "Studienstiftung des Deutschen Volkes (German Scholarship Foundation)",
    "Fulbright Scholarship - Leaders in Entrepreneurship Program",
    "Be.Boosted Fellow 2024"
  ],
  volunteering: [
    "Social Media for Women of Tech Conference - Building a community",
    "Girl's Day coordinator at TU Munich - Inspiring young minds",
    "MIT Sailing Instructor - Sharing passion for sports",
    "Student Council Member - Representing student interests"
  ]
};
