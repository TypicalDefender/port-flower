import React from 'react';
import { Code2, Server, Database, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Senior Software Engineer specializing in platform engineering and distributed systems. 
              Currently building scalable solutions at Rippling, with a focus on high-performance 
              infrastructure and microservices architecture.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Previously contributed to impactful projects at Slice and Vedantu, where I led 
              banking initiatives and built real-time systems serving millions of users.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Code2, title: 'Backend Development', skills: 'Go, Node.js, REST APIs' },
              { icon: Server, title: 'Infrastructure', skills: 'Kubernetes, Docker' },
              { icon: Database, title: 'Databases', skills: 'MySQL, MongoDB, Redis' },
              { icon: Cloud, title: 'Cloud Services', skills: 'AWS' }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transform hover:scale-105 
                          transition-all duration-300 hover:shadow-lg dark:shadow-gray-900/50"
              >
                <item.icon className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}