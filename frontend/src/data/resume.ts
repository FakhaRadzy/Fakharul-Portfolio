export interface ExperienceProject {
  name: string
  category: string
  bullets: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  bullets?: string[]
  projects?: ExperienceProject[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface EducationEntry {
  school: string
  degree: string
  period: string
}

export const profile = {
  name: 'Muhammad Fakharul Radzy Bin Mohd Rozlan',
  title: 'Senior Analyst - Backend Development',
  location: 'Shah Alam, Selangor',
  email: 'fakharadzy@gmail.com',
  phone: '+6017-889 6871',
  linkedin: 'https://www.linkedin.com/in/fakharulradzy/',
  summary:
    "Experienced IT professional with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Confident communicator, strategic thinker, and innovative creator, currently working across backend development, frontend (React.js), and data analysis engagements.",
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Avanade Sdn. Bhd',
    role: 'Senior Analyst - Backend Development',
    period: 'April 2025 - present',
    projects: [
      {
        name: 'YTL-PSERAYA',
        category: 'Backend Development',
        bullets: [
          'Wrote backend logic and APIs according to Functional Requirement Specifications (FRS) across seven system modules, including Hedge Request Termination, ETRM Update, and Status Transitioning.',
          'Developed using Visual Studio and GitHub Copilot; used Postman to test and validate APIs, and Azure DevOps for CI/CD and work tracking.',
        ],
      },
      {
        name: 'Newspage',
        category: 'Backend Development',
        bullets: [
          'Backend development for a Vietnam-based client on the Distributed Management System (DMS) and its mobile counterpart, R7.',
          'Focused primarily on business logic development and bug fixes.',
        ],
      },
      {
        name: 'Maybank Proof of Concept (POC)',
        category: 'Frontend Development',
        bullets: ['Built the main page of the Maybank app frontend using React.js, as part of a proof-of-concept.'],
      },
      {
        name: 'Edotco Proof of Concept (POC)',
        category: 'AI Development',
        bullets: ['Used Python to analyze provided datasets and assess data relevance and quality for an AI model.'],
      },
    ],
  },
  {
    company: 'Cuckoo International (Mal) Sdn. Bhd',
    role: 'IT Programmer',
    period: 'June 2023 - April 2025',
    bullets: [
      'Developed and integrated custom modules into existing web applications using the Telerik Framework.',
      'Oversaw operational health, uptime, and functional performance of enterprise websites.',
      'Managed Microsoft SQL Server databases, ensuring data integrity, security compliance, and query performance.',
      'Provided tier-2/3 technical support, troubleshooting complex system bugs and performance bottlenecks.',
    ],
  },
  {
    company: 'Mun Hean (M) Sdn. Bhd',
    role: 'Software Application Engineer',
    period: 'November 2021 - May 2023',
    bullets: [
      'Designed and deployed industrial UIs using PCVue software; led testing, commissioning, and server upgrades.',
      'Integrated and configured power meters with GridVis software, extracting voltage, current, and energy metrics.',
      'Served as a Certified Competent Site Supervisor (CSS) at Perodua.',
    ],
  },
]

export const skills: SkillGroup[] = [
  { category: 'Programming', items: ['C#', 'Python', 'JavaScript', 'VB.NET', 'ASP.NET', 'Entity Framework', 'LINQ', 'React.js', 'Angular', 'HTML5', 'CSS3', 'Telerik Framework'] },
  { category: 'Cloud & DevOps', items: ['Microsoft Azure', 'CI/CD Pipelines', 'Azure DevOps', 'Git'] },
  { category: 'Developer Tools', items: ['Visual Studio', 'Postman', 'GitHub Copilot'] },
  { category: 'Data & AI', items: ['MSSQL', 'Data Preprocessing', 'Data Analysis'] },
]

export const education: EducationEntry[] = [
  { school: 'Universiti Teknologi Mara (UiTM)', degree: 'Bachelor of Engineering (Hons.) Electronics Engineering', period: 'March 2017 - January 2020' },
  { school: 'Universiti Teknologi Mara (UiTM)', degree: 'Diploma of Electrical Engineering (Control and Instrumentations)', period: 'June 2014 - October 2016' },
]

export const certifications: string[] = [
  'Learn SQL Server From Scratch',
  'Big Data Analysis With Python',
  'C# Intermediate Course',
  'SQL Intermediate Course',
  'PCVue Training Certificate',
]