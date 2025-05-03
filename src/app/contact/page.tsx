"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const contactInfo = [
  {
    icon: LocationIcon,
    text: "19360 Rinaldi St, Los Angeles, CA",
    href: "https://goo.gl/maps/your-address"
  },
  {
    icon: PhoneIcon,
    text: "+1 626-365-9617",
    href: "tel:+16263659617"
  },
  {
    icon: EmailIcon,
    text: "wenaileditmedia@gmail.com",
    href: "mailto:wenaileditmedia@gmail.com"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
  };

  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
      <Header />

      <main className="pt-24">
        <section className="relative py-20 md:py-32 overflow-hidden bg-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white/5 z-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] z-20" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-30">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-white/60 font-['Norwester'] text-lg mb-4 block">
                GET IN TOUCH
              </span>
              <h1 className="text-6xl md:text-7xl font-['Anton'] leading-[1.1] mb-8">
                You've Got Big Ideas.<br />Let's Make Them Happen.
              </h1>
              <p className="text-xl text-white/60 font-['Gilroy']">
                We're all about bold moves, big wins, and marketing that works. If you're ready to level up your brand, hit us up. Let's make something great together.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-[1fr,2fr] gap-16">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-['Anton'] text-2xl mb-8"
                >
                  CONTACT INFORMATION
                </motion.h2>
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <motion.a
                      key={item.text}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-4 text-black/60 hover:text-black transition-colors group"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <item.icon className="w-6 h-6 mt-1 flex-shrink-0" />
                      <span className="font-['Gilroy']">{item.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-['Gilroy'] text-black/60">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-black/5 p-4 rounded-lg focus:outline-none focus:bg-black/10 transition-colors"
                      placeholder="Andrew David Kens..."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-['Gilroy'] text-black/60">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-black/5 p-4 rounded-lg focus:outline-none focus:bg-black/10 transition-colors"
                      placeholder="info@mysite.net"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-['Gilroy'] text-black/60">What you are interested in?</label>
                    <select
                      value={formData.interest}
                      onChange={e => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                      className="w-full bg-black/5 p-4 rounded-lg focus:outline-none focus:bg-black/10 transition-colors"
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="content">Content Creation</option>
                      <option value="web">Website Development</option>
                      <option value="branding">Branding & Design</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-['Gilroy'] text-black/60">Project Budget</label>
                    <select
                      value={formData.budget}
                      onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full bg-black/5 p-4 rounded-lg focus:outline-none focus:bg-black/10 transition-colors"
                      required
                    >
                      <option value="">Select Budget</option>
                      <option value="small">$1,000 - $5,000</option>
                      <option value="medium">$5,000 - $10,000</option>
                      <option value="large">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-['Gilroy'] text-black/60">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-black/5 p-4 rounded-lg h-40 focus:outline-none focus:bg-black/10 transition-colors resize-none"
                    placeholder="Tell us about your projects"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-black text-white font-['Anton'] text-lg rounded-lg hover:bg-black/90 transition-colors"
                >
                  SEND MESSAGE
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function LocationIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );
}

function EmailIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );
}
