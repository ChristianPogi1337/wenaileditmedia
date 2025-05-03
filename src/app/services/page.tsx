"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const services = [
  {
    title: "SOCIAL MEDIA MARKETING",
    description: "Build visibility and connect with your audience on platforms that matter most.",
    href: "/services/social-media",
    icon: "01"
  },
  {
    title: "VIDEO PRODUCTION",
    subtitle: "AND CONTENT CREATION",
    description: "Build visibility and connect with your audience on platforms that matter most.",
    href: "/services/video-production",
    icon: "02"
  },
  {
    title: "SMS AND EMAIL MARKETING",
    description: "Reach your audience where it matters—in their inbox or on their phone. Build loyalty and drive results with targeted email and SMS campaigns",
    href: "/services/email-marketing",
    icon: "03"
  },
  {
    title: "BRANDING AND DESIGN",
    description: "From logos to complete brand identities, we design visuals that reflect your story and set your brand apart.",
    href: "/services/branding",
    icon: "04"
  },
  {
    title: "WEBSITE, SEO, AND ADS",
    description: "Optimize your online presence, improve search rankings, and launch campaigns that drive growth.",
    href: "/services/web-seo",
    icon: "05"
  }
];

export default function Services() {
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
                  className="text-white/60 font-['Norwester'] text-lg mb-4 block"
                >
                  OUR SERVICES
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-7xl font-['Anton'] leading-[1.1] mb-8"
                >
                  WE NAILED IT!<br />DIGITAL AGENCY
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 max-w-lg font-['Gilroy']"
              >
                Your goals are our mission. Let's bring your vision to life with strategies that work and deliver results that matter.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={service.href}>
                    <div className="group grid md:grid-cols-[auto,1fr,auto] gap-8 items-center p-8 hover:bg-black/5 transition-all rounded-lg border border-transparent hover:border-black/10">
                      <span className="font-['Anton'] text-6xl text-black group-hover:text-black transition-colors">
                        {service.icon}
                      </span>
                      <div className="space-y-2">
                        <h3 className="font-['Anton'] text-3xl">
                          {service.title}
                          {service.subtitle && (
                            <span className="block text-black/60">{service.subtitle}</span>
                          )}
                        </h3>
                        <p className="text-black/60 font-['Gilroy'] max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
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
