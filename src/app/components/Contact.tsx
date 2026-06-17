import { Card } from "./ui/card";
import { Mail, Linkedin, Github, Twitter, Building2, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled information
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:a.karnezis@protonmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "a.karnezis@protonmail.com",
      link: "mailto:a.karnezis@protonmail.com",
    },
    {
      icon: Building2,
      label: "Institution",
      value: "Department of Electrical and Electronic Engineering",
      link: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sheffield, UK",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/aris-karnezis-595777b5/",
      color: "text-orange-600 hover:text-orange-700",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/akarnezis",
      color: "text-orange-600 hover:text-orange-700",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#2d2d2d]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Get in Touch</h2>
          <p className="text-xl text-slate-600 dark:text-white max-w-2xl mx-auto">
            Interested in collaboration, have questions, or just want to connect? I'd love to hear from you.
          </p>
        </div>
        
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-6 text-slate-900 dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-[#fff4ed] dark:bg-[#3a2a1a] rounded-lg">
                        <item.icon className="w-5 h-5 text-[#d9653a] dark:text-[#d9653a]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                        {item.link ? (
                          <a href={item.link} className="text-slate-900 dark:text-white hover:text-[#d9653a] dark:hover:text-[#d9653a] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 dark:text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-6 text-slate-900 dark:text-white">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-100 dark:bg-[#3a3a3a] dark:border dark:border-white/20 rounded-lg ${social.color} dark:text-orange-500 dark:hover:text-orange-400 transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-6 text-slate-900 dark:text-white">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-[#4a4a4a] dark:bg-[#3a3a3a] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-[#4a4a4a] dark:bg-[#3a3a3a] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-[#4a4a4a] dark:bg-[#3a3a3a] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Card>
        
        <p className="text-center text-slate-500 mt-12">
          Open to collaboration opportunities, speaking engagements, and consulting projects.
        </p>
      </div>
    </section>
  );
}