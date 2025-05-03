"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DM_Sans } from 'next/font/google';
import Header from "@/components/Header";

const dmSans = DM_Sans({ subsets: ['latin'] });

const socialIcons = {
  facebook: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
    </svg>
  )
};

const navigationItems = [
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/works" },
  { name: "About Us", href: "/about" },
  { name: "Let's Chat", href: "/contact", isButton: true }
];

const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{text: string, isUser: boolean}>>([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    setChatHistory(prev => [...prev, { text: chatMessage, isUser: true }]);
    setChatMessage('');
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        text: "Thanks for your message! We'll get back to you soon.", 
        isUser: false 
      }]);
    }, 1000);
  };

  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onAnimationComplete={() => setIsLoading(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-[240px] h-[100px]"
        >
          <Image
            src="/logo.png"
            alt="We Nailed It Media"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className={`${dmSans.className} min-h-screen bg-white`}>
      <Header />
      
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/90 transition-colors"
          onClick={() => setIsChatOpen(true)}
        >
          <ChatIcon />
        </motion.button>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-40 overflow-hidden"
          >
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <h3 className="font-['Norwester'] text-lg">Let's Chat</h3>
              <button onClick={() => setIsChatOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="p-4 h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatHistory.map((msg, i) => (
                  <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isUser ? 'bg-black text-white' : 'bg-gray-100'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-200 rounded focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white font-['Norwester'] rounded hover:bg-black/90"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="min-h-screen relative flex items-center justify-center bg-white pt-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/5 z-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] z-20" />
          </div>
          
          <div className="relative z-30 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-8"
              >
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-['Norwester'] leading-[1.1] text-black">
                  LET'S BUILD YOUR BRAND—START NOW
                </h1>
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-['Norwester'] text-black/80">
                  INNOVATIVE SOLUTIONS FOR YOUR BUSINESS
                </h2>
                <p className="text-lg md:text-xl text-black/60 max-w-xl">
                  Marketing That Sticks. Strategies That Scale. We turn small and medium-sized businesses into brands people can't stop talking about.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-black origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 0.9 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                  </div>
                  <span className="font-['Norwester'] text-lg">90%</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-black origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 0.85 }}
                      transition={{ delay: 0.7, duration: 1 }}
                    />
                  </div>
                  <span className="font-['Norwester'] text-lg">85%</span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8"
                >
                  <Link href="/contact">
                    <button className="px-12 py-6 bg-black text-white text-xl font-['Norwester'] tracking-wider hover:bg-black/90 transition-all">
                      TRY IT FOR FREE
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative grid grid-cols-2 gap-4 aspect-square max-w-xl mx-auto"
            >
              <Image
                src="/img1.jpg"
                alt="Business Solutions"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
              <Image
                src="/img2.jpg"
                alt="Digital Marketing"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg mt-8"
              />
              <Image
                src="/img3.jpg"
                alt="Content Creation"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg -mt-8"
              />
              <Image
                src="/img4.jpg"
                alt="Brand Strategy"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-32 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white/5 z-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] z-20" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-30">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white/60 font-['Norwester'] text-lg mb-4 block">Our Approach</span>
                  <h2 className="text-5xl md:text-6xl font-['Norwester'] leading-tight mb-8">
                    EXPERTISE IN<br />STRATEGY, DESIGN<br />AND DEVELOPMENT
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-12">
                    Forget boring. Forget forgettable. We Nailed It Media helps brands cut through the noise, get noticed, and grow. We believe in real connections, creative storytelling, and marketing that makes people stop scrolling. Whether it's a social media glow-up, a website that wows, or ads that convert—we help brands nail it every. single. time.
                  </p>
                  <Link href="/services">
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 group"
                    >
                      <span className="font-['Norwester'] text-lg">LEARN MORE</span>
                      <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "AUTHENTICITY",
                    description: "Authentic strategies tailored to your business goals",
                    icon: "01"
                  },
                  {
                    title: "STRATEGY",
                    description: "Boosted visibility and business growth",
                    icon: "02"
                  },
                  {
                    title: "CUSTOMIZATION",
                    description: "Custom solutions that reflects your brands unique identity",
                    icon: "03"
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
                  >
                    <span className="font-['Norwester'] text-white/40 text-sm mb-4 block">{feature.icon}</span>
                    <h3 className="font-['Norwester'] text-2xl mb-3">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Image
                src="/logo.png"
                alt="We Nailed It Media"
                width={140}
                height={56}
                className="object-contain brightness-0 invert"
                priority
              />
              <p className="font-['Norwester'] text-white/80 text-sm">
                Creating impactful digital experiences through innovative solutions
              </p>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-start space-x-2">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>19360 Rinaldi St, Los Angeles, CA, United States, California</span>
                </p>
                <p className="flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+1 626-365-9617</span>
                </p>
                <p className="flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>wenaileditmedia@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <Link href="https://wenailedit.media" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    wenailedit.media
                  </Link>
                </p>
                <p className="flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <Link href="https://wenaileditmedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    wenaileditmedia.com
                  </Link>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-gray-400">
                {services.map(service => (
                  <li key={service.title}>
                    <Link 
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                {["About", "Works", "Services", "Contact"].map(item => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} 
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'facebook', url: 'https://facebook.com/wenaileditmedia' },
                  { name: 'instagram', url: 'https://instagram.com/wenaileditmedia' }
                ].map(social => (
                  <Link 
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcons[social.name as keyof typeof socialIcons]({
                      className: "w-5 h-5 text-white/70 group-hover:text-white/90 transition-colors"
                    })}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} We Nailed It Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Social Media Marketing",
    description: "Strategic campaigns that engage and convert your audience through tailored strategies"
  },
  {
    title: "Content Creation",
    description: "High-quality content that connects and inspires your audience"
  },
  {
    title: "SMS & Email Marketing",
    description: "Build loyalty and drive results with targeted campaigns that reach your audience directly"
  }
];
