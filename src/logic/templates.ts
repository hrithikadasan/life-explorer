import type { ExtendedLifeTemplate, LifeTemplate, TemplateMap } from "../types";

/** Extended template map with richer data */
export type ExtendedTemplateMap = Record<string, ExtendedLifeTemplate>;

export const templates: TemplateMap = {
  Engineering: {
    degree: ["Engineering Degree"],
    careers: ["Software Engineer", "Senior Developer", "Tech Lead"],
    cities: ["Bangalore", "Berlin"],
    moods: ["Focused", "Stressed"],
  },
  Design: {
    degree: ["Design Degree"],
    careers: ["UI Designer", "Art Director", "Creative Director"],
    cities: ["Mumbai", "Amsterdam"],
    moods: ["Creative", "Independent"],
  },
  Medicine: {
    degree: ["Medical Degree"],
    careers: ["Resident Doctor", "Specialist", "Chief of Medicine"],
    cities: ["Boston", "London"],
    moods: ["Compassionate", "Exhausted"],
  },
  Business: {
    degree: ["Business Degree"],
    careers: ["Analyst", "Product Manager", "VP of Operations"],
    cities: ["New York", "Singapore"],
    moods: ["Ambitious", "Competitive"],
  },
  Music: {
    degree: ["Music Degree"],
    careers: ["Session Musician", "Music Producer", "Label Owner"],
    cities: ["Nashville", "Los Angeles"],
    moods: ["Passionate", "Unpredictable"],
  },
  Law: {
    degree: ["Law Degree"],
    careers: ["Associate Attorney", "Partner", "Judge"],
    cities: ["Washington DC", "London"],
    moods: ["Analytical", "Disciplined"],
  },
  Art: {
    degree: ["Fine Arts Degree"],
    careers: ["Gallery Artist", "Art Curator", "Studio Owner"],
    cities: ["Paris", "New York"],
    moods: ["Expressive", "Reflective"],
  },
  Science: {
    degree: ["Science Degree"],
    careers: ["Research Scientist", "Lab Director", "Chief Scientist"],
    cities: ["Geneva", "Tokyo"],
    moods: ["Curious", "Methodical"],
  },
};

/**
 * Extended templates with education, specialization, career tiers,
 * location tiers, and lifestyle data.
 */
export const extendedTemplates: ExtendedTemplateMap = {
  Engineering: {
    ...templates.Engineering,
    education: {
      degree: ["B.Tech in Computer Science", "B.E. in Electronics"],
      colleges: ["IIT Delhi", "MIT", "Stanford", "TU Munich"],
    },
    specialization: ["AI/ML", "Full-Stack Development", "Cloud Architecture", "Embedded Systems"],
    career: {
      entry: ["Junior Developer", "Software Engineer I", "QA Engineer"],
      mid: ["Senior Developer", "DevOps Lead", "Solutions Architect"],
      senior: ["Tech Lead", "VP of Engineering", "CTO"],
    },
    locations: {
      study: ["Delhi", "Cambridge", "Stanford"],
      work: ["Bangalore", "Hyderabad", "Berlin"],
      global: ["San Francisco", "Seattle", "Singapore"],
    },
    lifestyle: {
      workLifeBalance: ["Moderate", "Flexible hours", "Remote-friendly"],
      stress: ["High during releases", "Manageable", "Deadline-driven"],
    },
  },
  Design: {
    ...templates.Design,
    education: {
      degree: ["B.Des in Interaction Design", "BFA in Visual Communication"],
      colleges: ["NID Ahmedabad", "Parsons", "RISD", "Central Saint Martins"],
    },
    specialization: ["UX Research", "Motion Design", "Brand Strategy", "Product Design"],
    career: {
      entry: ["Junior UI Designer", "Visual Designer", "Design Intern"],
      mid: ["Art Director", "Lead UX Designer", "Design Manager"],
      senior: ["Creative Director", "Head of Design", "Chief Design Officer"],
    },
    locations: {
      study: ["Ahmedabad", "New York", "London"],
      work: ["Mumbai", "Amsterdam", "Stockholm"],
      global: ["San Francisco", "Tokyo", "Copenhagen"],
    },
    lifestyle: {
      workLifeBalance: ["Great", "Flexible", "Project-based"],
      stress: ["Low to moderate", "Inspired", "Occasional crunch"],
    },
  },
  Medicine: {
    ...templates.Medicine,
    education: {
      degree: ["MBBS", "MD in General Medicine", "Doctor of Medicine"],
      colleges: ["AIIMS Delhi", "Johns Hopkins", "Harvard Medical School", "Oxford"],
    },
    specialization: ["Cardiology", "Neurosurgery", "Pediatrics", "Oncology"],
    career: {
      entry: ["Intern", "Resident Doctor", "Junior Surgeon"],
      mid: ["Specialist", "Attending Physician", "Department Head"],
      senior: ["Chief of Medicine", "Hospital Director", "Dean of Faculty"],
    },
    locations: {
      study: ["Delhi", "Baltimore", "Boston"],
      work: ["Boston", "London", "Melbourne"],
      global: ["Geneva", "Zurich", "Toronto"],
    },
    lifestyle: {
      workLifeBalance: ["Demanding", "Long hours", "Shift-based"],
      stress: ["High", "Emotionally taxing", "Rewarding but intense"],
    },
  },
  Business: {
    ...templates.Business,
    education: {
      degree: ["BBA", "MBA", "B.Com (Hons)"],
      colleges: ["IIM Ahmedabad", "Wharton", "Harvard Business School", "INSEAD"],
    },
    specialization: ["Finance", "Marketing", "Consulting", "Entrepreneurship"],
    career: {
      entry: ["Analyst", "Associate Consultant", "Business Development Rep"],
      mid: ["Product Manager", "Strategy Lead", "Senior Consultant"],
      senior: ["VP of Operations", "Managing Director", "CEO"],
    },
    locations: {
      study: ["Ahmedabad", "Philadelphia", "Fontainebleau"],
      work: ["New York", "Singapore", "Dubai"],
      global: ["London", "Hong Kong", "Zurich"],
    },
    lifestyle: {
      workLifeBalance: ["Intense", "Travel-heavy", "Goal-oriented"],
      stress: ["High", "Competitive", "Adrenaline-driven"],
    },
  },
  Music: {
    ...templates.Music,
    education: {
      degree: ["B.Mus in Performance", "BA in Music Production"],
      colleges: ["Berklee", "Juilliard", "Royal Academy of Music", "AR Rahman Conservatory"],
    },
    specialization: ["Vocals", "Production", "Film Scoring", "Electronic Music"],
    career: {
      entry: ["Session Musician", "Studio Intern", "Independent Artist"],
      mid: ["Music Producer", "Tour Manager", "Composer"],
      senior: ["Label Owner", "Grammy-winning Producer", "Festival Curator"],
    },
    locations: {
      study: ["Boston", "New York", "London"],
      work: ["Nashville", "Los Angeles", "Mumbai"],
      global: ["Berlin", "Seoul", "Ibiza"],
    },
    lifestyle: {
      workLifeBalance: ["Unconventional", "Gig-based", "Passionate"],
      stress: ["Feast or famine", "Creatively intense", "Variable income"],
    },
  },
  Law: {
    ...templates.Law,
    education: {
      degree: ["LLB", "JD (Juris Doctor)", "BA LLB (Hons)"],
      colleges: ["NLU Delhi", "Yale Law School", "Harvard Law", "Oxford"],
    },
    specialization: ["Corporate Law", "Criminal Law", "International Law", "IP Law"],
    career: {
      entry: ["Associate Attorney", "Legal Clerk", "Junior Advocate"],
      mid: ["Partner", "General Counsel", "Senior Litigator"],
      senior: ["Judge", "Supreme Court Advocate", "Legal Advisor to Government"],
    },
    locations: {
      study: ["Delhi", "New Haven", "Cambridge"],
      work: ["Washington DC", "London", "Singapore"],
      global: ["The Hague", "Geneva", "Brussels"],
    },
    lifestyle: {
      workLifeBalance: ["Structured but intense", "Document-heavy", "Deadline-driven"],
      stress: ["High", "Case-dependent", "Prestigious but demanding"],
    },
  },
  Art: {
    ...templates.Art,
    education: {
      degree: ["BFA in Fine Arts", "BA in Art History"],
      colleges: ["JJ School of Art", "Royal College of Art", "Slade School", "Cooper Union"],
    },
    specialization: ["Painting", "Sculpture", "Digital Art", "Installation Art"],
    career: {
      entry: ["Gallery Artist", "Art Teacher", "Freelance Illustrator"],
      mid: ["Art Curator", "Exhibiting Artist", "Residency Fellow"],
      senior: ["Studio Owner", "Museum Director", "Internationally Acclaimed Artist"],
    },
    locations: {
      study: ["Mumbai", "London", "New York"],
      work: ["Paris", "New York", "Berlin"],
      global: ["Venice", "Basel", "Tokyo"],
    },
    lifestyle: {
      workLifeBalance: ["Self-directed", "Flexible", "Grant-dependent"],
      stress: ["Low external", "Internally driven", "Uncertain income"],
    },
  },
  Science: {
    ...templates.Science,
    education: {
      degree: ["B.Sc in Physics", "M.Sc in Molecular Biology"],
      colleges: ["IISc Bangalore", "Caltech", "ETH Zurich", "Cambridge"],
    },
    specialization: ["Quantum Physics", "Genomics", "Neuroscience", "Climate Science"],
    career: {
      entry: ["Research Scientist", "Lab Assistant", "PhD Candidate"],
      mid: ["Lab Director", "Principal Investigator", "Research Fellow"],
      senior: ["Chief Scientist", "Nobel Nominee", "Science Advisor"],
    },
    locations: {
      study: ["Bangalore", "Pasadena", "Zurich"],
      work: ["Geneva", "Tokyo", "Boston"],
      global: ["Stockholm", "Berlin", "San Francisco"],
    },
    lifestyle: {
      workLifeBalance: ["Academic pace", "Grant cycles", "Intellectually rich"],
      stress: ["Publish-or-perish", "Moderate", "Funding-dependent"],
    },
  },
};

/**
 * Return a known template or generate a generic one.
 */
export function getTemplate(option: string): LifeTemplate {
  if (templates[option]) {
    return templates[option];
  }
  return generateGenericTemplate(option);
}

/**
 * Return an extended template or generate a generic extended one.
 */
export function getExtendedTemplate(option: string): ExtendedLifeTemplate {
  if (extendedTemplates[option]) {
    return extendedTemplates[option];
  }
  return generateGenericExtendedTemplate(option);
}

function generateGenericTemplate(option: string): LifeTemplate {
  return {
    degree: [option + " Degree"],
    careers: ["Entry Level Role", "Mid Level Role", "Senior Role"],
    cities: ["Local City", "Global City"],
    moods: ["Stable", "Variable"],
  };
}

function generateGenericExtendedTemplate(option: string): ExtendedLifeTemplate {
  return {
    ...generateGenericTemplate(option),
    education: {
      degree: [option + " Degree"],
      colleges: ["Local University", "International University"],
    },
    specialization: ["General " + option, "Applied " + option],
    career: {
      entry: ["Entry Level Role", "Junior " + option + " Associate"],
      mid: ["Mid Level Role", option + " Manager"],
      senior: ["Senior Role", option + " Director"],
    },
    locations: {
      study: ["Local City"],
      work: ["Regional Hub", "National Capital"],
      global: ["Global City", "International Hub"],
    },
    lifestyle: {
      workLifeBalance: ["Stable", "Balanced"],
      stress: ["Moderate", "Variable"],
    },
  };
}
