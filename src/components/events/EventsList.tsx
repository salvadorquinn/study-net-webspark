
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Study Techniques Workshop",
    date: "June 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Main Campus, Room 101",
    description: "Learn effective study techniques from top academic performers.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "STEM Career Fair",
    date: "July 8, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Science Building, Main Hall",
    description: "Connect with employers and explore opportunities in STEM fields.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Exam Preparation Webinar",
    date: "August 20, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Online (Zoom)",
    description: "Get expert tips on preparing for your final exams.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const EventsList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-studynet-dark">Upcoming Events</h2>
          <p className="text-lg text-studynet-tertiary max-w-2xl mx-auto">
            Browse our calendar of educational events and register for those that interest you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow border-studynet-tertiary/20">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="border-b border-studynet-tertiary/10">
                <CardTitle className="text-studynet-secondary">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-studynet-tertiary">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center gap-1 text-sm text-studynet-tertiary mb-2">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-studynet-tertiary mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-studynet-dark">{event.description}</p>
              </CardContent>
              <CardFooter className="bg-studynet-formBg">
                <Button className="w-full bg-studynet-primary hover:bg-studynet-secondary text-white">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-studynet-primary text-studynet-primary hover:bg-studynet-formBg px-8">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsList;
