import React from 'react';
import { ExternalLink, Clock, ChevronRight } from 'lucide-react';

interface BlogPost {
  title: string;
  subtitle: string;
  link: string;
  date: string;
  readingTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Good Alerts",
    subtitle: "A deep dive into creating effective alert systems and monitoring strategies",
    link: "https://medium.com/@sarthak-acoustic/good-alerts-76d42bcb48c3",
    date: "Mar 2024",
    readingTime: "5 min read"
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sharing my thoughts and experiences in software engineering
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 
                       dark:from-gray-800 dark:to-gray-900 p-6 transition-all duration-300
                       hover:shadow-xl dark:shadow-gray-900/50 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 
                            blur-2xl rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 
                            transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 
                             group-hover:text-yellow-500 dark:group-hover:text-yellow-400 
                             transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {post.subtitle}
                </p>

                <div className="flex items-center text-yellow-500 dark:text-yellow-400 
                              group-hover:gap-4 transition-all duration-300">
                  <span className="text-sm font-medium">Read More</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@sarthak-acoustic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 
                     text-white rounded-full font-medium hover:from-yellow-500 hover:to-orange-500 
                     transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <span>View All Posts</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}