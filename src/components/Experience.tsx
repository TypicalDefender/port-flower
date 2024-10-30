import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Rippling',
    logo: '/company-logos/rippling.png',
    role: 'Senior Software Engineer - Unity Platform',
    duration: 'Aug 2024 - Present',
    location: 'Bengaluru, Karnataka, India',
    description: ['Mo\' traffic == mo\' fun.'],
    skills: ['Go', 'REST APIs', 'System Design']
  },
  {
    company: 'Slice',
    logo: '/company-logos/slice.png',
    role: 'Staff Software Engineer, Banking',
    duration: 'Nov 2023 - Aug 2024',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Leading banking initiatives around savings accounts, deposits, loan origination systems, and integration platforms'
    ],
    skills: ['Problem Solving', 'System Design', 'Go', 'REST APIs']
  },
  {
    company: 'Vedantu',
    logo: '/company-logos/vedantu.png',
    role: 'SDE III, Quiz Platform',
    duration: 'Dec 2021 - Jun 2022',
    location: 'Bangalore Urban, Karnataka, India',
    description: [
      'Built the real time leaderboard for the real time quiz product with 1 million DAU',
      'Built a real-time backend service from scratch powering our live quiz platform'
    ],
    skills: ['Go', 'REST APIs', 'Kubernetes', 'Redis']
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1
                         dark:shadow-gray-900/50"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl 
                              flex items-center justify-center transform rotate-3 group-hover:rotate-6 
                              transition-transform duration-300">
                  <span className="text-xl font-bold text-white">{exp.company[0]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-3">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm 
                                 text-gray-600 dark:text-gray-300 hover:bg-yellow-100 
                                 dark:hover:bg-yellow-900/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}