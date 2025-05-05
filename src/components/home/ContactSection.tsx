
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-studynet-dark mb-4">Get In Touch</h2>
          <p className="text-xl text-studynet-tertiary max-w-3xl mx-auto">
            Have questions or ready to start your tutoring journey? Contact us today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="bg-studynet-formBg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-studynet-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-studynet-primary rounded-full p-2 mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-studynet-secondary mb-1">Address</h4>
                    <p className="text-studynet-tertiary">Sydney, Australia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-studynet-primary rounded-full p-2 mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-studynet-secondary mb-1">Email</h4>
                    <p className="text-studynet-tertiary">contact@studynet.com.au</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-studynet-primary rounded-full p-2 mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-studynet-secondary mb-1">Phone</h4>
                    <p className="text-studynet-tertiary">+61 (0) 2 1234 5678</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-studynet-secondary mb-4">Hours of Operation</h4>
                <div className="space-y-2">
                  <p className="text-studynet-tertiary">Monday - Friday: 9am - 7pm</p>
                  <p className="text-studynet-tertiary">Saturday: 9am - 5pm</p>
                  <p className="text-studynet-tertiary">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-studynet-dark mb-6">Send Us a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-studynet-secondary mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-studynet-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-studynet-secondary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-studynet-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-studynet-secondary mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-studynet-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="tutoring">Tutoring Services</option>
                    <option value="become-tutor">Become a Tutor</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-studynet-secondary mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-studynet-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-studynet-primary hover:bg-studynet-secondary text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
