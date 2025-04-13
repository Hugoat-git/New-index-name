import React from 'react';
import { Users, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { 
    value: '10K+', 
    label: 'Active Users', 
    description: 'Businesses trust our platform daily',
    icon: <Users className="h-8 w-8" />
  },
  { 
    value: '95%', 
    label: 'Conversion Rate', 
    description: 'Average improvement for our clients',
    icon: <TrendingUp className="h-8 w-8" />
  },
  { 
    value: '24/7', 
    label: 'Support Available', 
    description: 'Our team is always here to help',
    icon: <Clock className="h-8 w-8" />
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                {React.cloneElement(stat.icon, { className: "h-12 w-12 text-blue-500" })}
              </div>
              <h3 className="text-6xl font-bold text-blue-500 mb-4">{stat.value}</h3>
              <p className="text-2xl font-semibold text-gray-900 mb-3">{stat.label}</p>
              <p className="text-gray-600 text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;