import React from 'react';
import { ArrowRight } from 'lucide-react';

const IntegrationSection = () => {
  const integrations = [
    {
      name: 'Mailchimp',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Salesforce',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'HubSpot',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Zapier',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Google Analytics',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Slack',
      logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Integrate with your entire marketing stack
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            From email marketing and CMS platforms to analytics and automation tools, 
            MonétizIA integrates seamlessly with all your favorite apps
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
          >
            Explore All Integrations
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="relative rounded-2xl bg-white border border-gray-200 shadow-xl p-8 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl"></div>
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center group"
              >
                <div className="w-full aspect-[3/2] relative rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg"></div>
                  <div className="relative flex items-center justify-center h-full">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="max-h-12 w-auto opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;