
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "High School Student",
    content: "My tutor from StudyNet helped me improve my math grades from a C to an A- in just three months. The personalized approach made all the difference!",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Michael Chen",
    role: "University Student",
    content: "When I was struggling with organic chemistry, my StudyNet tutor explained concepts in a way that finally made sense. I couldn't have passed my exams without their help.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emma Williams",
    role: "Parent",
    content: "Finding a qualified HSC tutor for my daughter was easy with StudyNet. Her confidence has grown tremendously, and her results speak for themselves.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-studynet-lightblue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students and parents who have experienced the StudyNet difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-studynet-blue opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
