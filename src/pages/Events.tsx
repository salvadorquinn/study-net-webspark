
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EventsList from "@/components/events/EventsList";
import EventsHero from "@/components/events/EventsHero";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <EventsHero />
        <EventsList />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
