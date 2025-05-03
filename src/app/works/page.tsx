"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const projects = [
  {
    title: "BRAND REVOLUTION",
    subtitle: "Social Media Strategy",
    description: "Complete social media transformation for a leading lifestyle brand.",
    image: "/works/project1.jpg",
    href: "/works/brand-revolution"
  },
  {
    title: "DIGITAL PRESENCE",
    subtitle: "Website Development",
    description: "Modern e-commerce platform with seamless user experience.",
    image: "/works/project2.jpg",
    href: "/works/digital-presence"
  },
  {
    title: "MARKET GROWTH",
    subtitle: "Marketing Campaign",
    description: "Integrated marketing campaign that doubled client's market reach.",
    image: "/works/project3.jpg",
    href: "/works/market-growth"
  }
];

export default function Works() {
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
                  OUR WORK
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-7xl font-['Anton'] leading-[1.1] mb-8"
                >
                  CRAFTING DIGITAL<br />SUCCESS STORIES
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 max-w-lg font-['Gilroy']"
              >
                Each project is a journey of transformation, innovation, and measurable results. Explore how we've helped brands stand out and succeed.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-20">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Link href={project.href}>
                    <div className="group grid md:grid-cols-2 gap-8 items-center">
                      <div className="order-2 md:order-1">
                        <span className="font-['Anton'] text-black/40 text-lg mb-4 block">
                          {project.subtitle}
                        </span>
                        <h2 className="font-['Anton'] text-4xl mb-4">
                          {project.title}
                        </h2>
                        <p className="text-black/60 font-['Gilroy'] text-lg mb-8">
                          {project.description}
                        </p>
                        <motion.div
                          whileHover={{ x: 10 }}
                          className="flex items-center space-x-4 text-black group"
                        >
                          <span className="font-['Anton'] text-lg">VIEW PROJECT</span>
                          <span className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </motion.div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
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
