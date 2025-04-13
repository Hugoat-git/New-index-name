import React from 'react';
import { ArrowRight, BookOpen, Podcast, Brain } from 'lucide-react';

const ResourceSection = () => {
  const resources = [
    {
      title: 'Landing Page Lookbook',
      subtitle: 'See 75+ Landing Page Examples',
      description: 'Get inspired by our collection of high-converting landing pages',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      link: '#'
    },
    {
      title: 'AI Playbook',
      subtitle: '10 AI Strategies for Lead Generation',
      description: 'Learn how to leverage AI to boost your lead generation efforts',
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      link: '#'
    },
    {
      title: 'Podcast',
      subtitle: 'Marketing Insights With a Musical Twist',
      description: 'Weekly episodes featuring industry experts and innovative strategies',
      icon: <Podcast className="w-6 h-6 text-green-600" />,
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Marketing Resources Card */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-xl border border-gray-200 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold">Marketing Resources</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Level Up With Expert Resources</h2>
              <p className="text-gray-600 mb-6">Access our comprehensive library of marketing resources, guides, and tools.</p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                Resource Library
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Resource Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {resource.icon}
                    <span className="text-sm uppercase tracking-wider text-gray-600 font-semibold">
                      {resource.title}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.subtitle}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  {resource.image && (
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="mt-auto w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <div className="mt-auto flex items-center text-blue-600 text-sm font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;