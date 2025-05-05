
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const EventsHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-studynet-formBg to-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-studynet-dark mb-6 leading-tight">
              StudyNet <span className="text-studynet-primary">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-studynet-tertiary mb-8 max-w-lg">
              Join our educational events, workshops, and webinars to enhance your academic journey and connect with like-minded individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-studynet-primary hover:bg-studynet-secondary text-white px-8 py-6 text-lg">
                <Calendar className="mr-2" />
                Upcoming Events
              </Button>
              <Button variant="outline" className="border-studynet-primary text-studynet-primary hover:bg-studynet-formBg px-8 py-6 text-lg">
                Host an Event
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-studynet-tertiary/10">
              <img
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Educational event"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;
