"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const stats = [
  { number: "NOV", label: "Est. 2024" },
  { number: "10+", label: "Projects" },
  { number: "15+", label: "Clients" },
  { number: "100%", label: "Success Rate" }
];

const benefits = [
  {
    title: "FRESH PERSPECTIVE",
    description: "As a new agency, we bring innovative ideas and modern approaches to digital marketing."
  },
  {
    title: "PERSONALIZED ATTENTION",
    description: "We maintain a select client base to ensure dedicated, high-quality service for each project."
  },
  {
    title: "RESULT-DRIVEN",
    description: "Our success is measured by your growth. We focus on delivering tangible results."
  },
  {
    title: "AGILE & ADAPTIVE",
    description: "Quick to respond and adapt to changing market trends and your business needs."
  }
];

const team = [
  {
    name: "Pauline Ogbac",
    role: "Founder",
    image: "/team/pauline.png"
  },
  {
    name: "Janille Gabionza",
    role: "Project Manager",
    image: "/team/janielle.jpg"
  },
  {
    name: "Joe Gabionza",
    role: "Graphic Designer",
    image: "/team/joe.jpg"
  },
  {
    name: "Jury Gabionza",
    role: "Content Creator",
    image: "/team/jury.jpg"
  },
  {
    name: "Angel Leonor",
    role: "Lead Generation",
    image: "/team/angel.jpg"
  },
  {
    name: "Christian Emmanuel",
    role: "Web Developer",
    image: "/team/webdev.jpg"
  }
];

export default function About() {
  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
      <Header />

      <main className="pt-24">
        <section className="py-20 bg-black text-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-lg md:text-xl text-white/80 text-center max-w-3xl mx-auto mb-10" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
              The name We Nailed It! Media was born out of a desire to honor the collaborative spirit of our team and the high-quality results we deliver to our clients. It’s not just about getting the job done; it’s about exceeding expectations, achieving excellence, and celebrating every milestone we reach together.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
              <div>
                <span className="block text-3xl md:text-4xl font-bold font-['Anton']">NOV</span>
                <span className="block text-sm md:text-base text-white/70">EST 2024</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-bold font-['Anton']">20+</span>
                <span className="block text-sm md:text-base text-white/70">PROJECTS</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-bold font-['Anton']">8</span>
                <span className="block text-sm md:text-base text-white/70">CLIENTS</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-bold font-['Anton']">100%</span>
                <span className="block text-sm md:text-base text-white/70">SUCCESS RATE</span>
              </div>
            </div>  
            <p className="text-center text-white/80 mb-12" style={{ fontFamily: 'Gilroy, var(--font-opensauce, "Open Sauce", sans-serif)' }}>
              Los Angeles Based | Proudly <span className="italic">Filipino</span> Owned & Managed
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-3 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-['Anton'] text-lg md:text-xl">{member.role}</h4>
                  <p className="font-['Gilroy'] text-white/80 text-sm md:text-base">{member.name.toUpperCase()}</p>
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
