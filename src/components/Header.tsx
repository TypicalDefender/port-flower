import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Profile" 
              className="relative rounded-full w-40 h-40 object-cover border-4 border-yellow-400 transform transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="space-y-2 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                Sarthak Dalabehera
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300">Senior Software Engineer - Unity Platform</h2>
              <p className="text-gray-400">Bengaluru, Karnataka, India</p>
            </div>
            <div className="flex justify-center md:justify-start gap-6">
              <a 
                href="https://github.com/yourusername" 
                className="transform hover:scale-110 hover:text-yellow-400 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="transform hover:scale-110 hover:text-yellow-400 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="transform hover:scale-110 hover:text-yellow-400 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}