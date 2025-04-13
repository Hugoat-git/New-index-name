import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "MonétizIA transformed our lead generation process. We've seen a 40% increase in qualified leads and our conversion rates have never been higher.",
    author: "Sophie Martin",
    role: "Marketing Director, TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    quote: "The AI-powered content generation has saved us countless hours. What used to take days now takes minutes, and the quality is consistently excellent.",
    author: "Thomas Dubois",
    role: "CEO, GrowthLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    quote: "The integration capabilities are outstanding. MonétizIA connects seamlessly with all our existing tools, creating a unified marketing ecosystem.",
    author: "Léa Bernard",
    role: "Digital Strategist, InnovateNow",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          What our clients say
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Discover how businesses are transforming their marketing results with MonétizIA
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100 transform rotate-180" />
                <p className="text-gray-600 italic relative z-10 pl-4">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Read more success stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;