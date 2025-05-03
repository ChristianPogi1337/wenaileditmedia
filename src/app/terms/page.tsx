"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const sections = [
  {
    title: "1. ACCEPTANCE OF TERMS",
    content: "By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms apply to all visitors, users, and others who access or use our service."
  },
  {
    title: "2. SERVICE DESCRIPTION",
    content: "We Nailed It Media provides digital marketing, design, and development services. Our services include but are not limited to social media management, content creation, website development, and digital strategy consulting."
  },
  {
    title: "3. INTELLECTUAL PROPERTY",
    content: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of We Nailed It Media and are protected by international copyright laws."
  },
  {
    title: "4. USER RESPONSIBILITIES",
    content: "You agree to provide accurate, complete, and current information during the service engagement process. You are responsible for maintaining the confidentiality of your account information."
  }
];

export default function Terms() {
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
              <span className="text-white/60 font-['Anton'] text-lg mb-4 block">
                LEGAL
              </span>
              <h1 className="text-6xl md:text-7xl font-['Anton'] leading-[1.1] mb-8">
                Terms of Service
              </h1>
              <p className="text-xl text-white/60 font-['Gilroy']">
                Last updated: November 2024
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-16">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h2 className="font-['Anton'] text-2xl mb-4">
                    {section.title}
                  </h2>
                  <p className="text-black/60 font-['Gilroy'] text-lg leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
