import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <Header />
        <About />
        <Experience />
        <Blog />
      </div>
    </ThemeProvider>
  );
}

export default App;