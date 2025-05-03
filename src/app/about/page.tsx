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
    image: "/team/ceo.jpg"
  },
  {
    name: "Janille Gabionza",
    role: "Project Manager",
    image: "/team/creative.jpg"
  },
  {
    name: "Joe Gabionza",
    role: "Graphic Designer",
    image: "/team/marketing.jpg"
  }
];

export default function About() {
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
            <div className="flex flex-col md:flex-row justify-between items-start gap-16">
              <div className="max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white/60 font-['Anton'] text-lg mb-4 block"
                >
                  ABOUT US
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-7xl font-['Anton'] leading-[1.1] mb-8"
                >
                  WE ARE<br />DIGITAL CRAFTSMEN
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 max-w-lg font-['Gilroy']"
              >
                Transforming businesses through innovative digital solutions. We're not just a team, we're your digital growth partners.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="block font-['Anton'] text-5xl mb-2"
                  >
                    {stat.number}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-white/60 font-['Gilroy']"
                  >
                    {stat.label}
                  </motion.span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/about-image.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-['Anton']">OUR STORY</h2>
                <p className="text-black/60 font-['Gilroy'] text-lg leading-relaxed">
                  Established in November 2024, We Nailed It Media emerges as a dynamic force in digital marketing. Our founder's vision was simple: create a digital agency that combines fresh perspectives with proven strategies to help businesses thrive in the digital age.
                </p>
                <p className="text-black/60 font-['Gilroy'] text-lg leading-relaxed">
                  Though we're new in the industry, our team brings together diverse expertise in digital marketing, design, and development. We're committed to growing alongside our clients and setting new standards in the industry.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-['Anton'] mb-6">WHY WORK WITH US?</h2>
              <p className="text-white/60 font-['Gilroy'] text-lg">
                Choose a partner who's hungry for success and dedicated to your growth. We bring fresh energy and innovative solutions to every project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
                >
                  <h3 className="font-['Anton'] text-2xl mb-4">{benefit.title}</h3>
                  <p className="text-white/60 font-['Gilroy']">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-['Anton'] text-center mb-16"
            >
              MEET OUR TEAM
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-['Anton'] text-2xl mb-2">{member.name}</h3>
                  <p className="text-white/60 font-['Gilroy']">{member.role}</p>
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
