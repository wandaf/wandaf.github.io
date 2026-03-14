
import React from 'react';

const Resume: React.FC = () => {
  const experiences = [
    {
      company: "tms",
      role: "Contract Designer",
      period: "May 2025 — October 2025",
      location: ""
    },
    {
      company: "National Park Service",
      role: "Design Intern",
      period: "January 2025 — May 2025",
      location: ""
    },
    {
      company: "Chicago Transit Authority",
      role: "Digital Design Intern",
      period: "May 2024 — August 2024",
      location: ""
    },
    {
      company: "Georgetown University Office of Advancement",
      role: "Senior Graphic Designer",
      period: "October 2021 — August 2023",
      location: ""
    },
    {
      company: "CLS Strategies",
      role: "Graphic Designer",
      period: "March 2020 — September 2021",
      location: ""
    }
  ];

  const education = [
    {
      school: "VCU Brandcenter",
      degree: "Master's in Experience Design",
      period: "2023 — 2025"
    }
  ];

  return (
    <div className="pb-32 max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-light font-['IBM_Plex_Serif'] leading-tight mb-16 text-gray-900">Experience</h2>
      
      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-mono-tag">{exp.period}</div>
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-light font-['IBM_Plex_Serif'] text-gray-900 mb-2">{exp.company}</h3>
              <p className="text-gray-500 mt-1 font-['IBM_Plex_Serif'] font-light">{exp.role}{exp.location ? ` · ${exp.location}` : ''}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl md:text-5xl font-light font-['IBM_Plex_Serif'] leading-tight mb-16 mt-32 text-gray-900">Education</h2>
      
      <div className="space-y-16">
        {education.map((edu, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-mono-tag">{edu.period}</div>
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-light font-['IBM_Plex_Serif'] text-gray-900 mb-2">{edu.school}</h3>
              <p className="text-gray-500 mt-1 font-['IBM_Plex_Serif'] font-light">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 pt-16 border-t border-gray-100">
        <a 
          href="#" 
          className="inline-flex items-center text-sm uppercase tracking-[0.2em] border-b border-gray-900 pb-1 hover:opacity-50 transition-opacity"
        >
          Download PDF Resume
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Resume;
